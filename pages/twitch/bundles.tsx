import { useLazyQuery, useQuery } from '@apollo/client';
import {
  GetUserBundlesDocument,
  BundleSortField,
  SortOrder,
  GetMyLibraryDocument,
  UpdateUserGameBundleDocument,
} from '../../generated/graphql';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Bundles() {
  const session = useSession();
  const [subStatus, setSubStatus] = useState({
    loading: true,
    isSubscribed: false,
    error: null,
  });
  const [totalGames, setTotalGames] = useState(0);
  const [processedGames, setProcessedGames] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (!session?.data?.user.twitchId) {
        setSubStatus(prev => ({ ...prev, loading: false }));
        return;
      }

      try {
        const response = await fetch('/api/check-twitch-sub', {
          credentials: 'same-origin',
        });

        if (!response.ok) {
          throw new Error('Failed to check subscription status');
        }

        const data = await response.json();
        setSubStatus({
          loading: false,
          isSubscribed: data.isSubscribed,
          error: null,
        });
      } catch (error) {
        setSubStatus({
          loading: false,
          isSubscribed: false,
          error: 'Failed to check subscription status',
        });
      }
    };

    checkSubscription();
  }, [session?.data?.user.twitchId]);

  const [sortField, setSortField] = useState<BundleSortField>(
    BundleSortField.Name
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Asc);

  const { data, refetch, loading } = useQuery(GetUserBundlesDocument, {
    skip: session.status !== 'authenticated',
    variables: {
      steamId: session?.data?.user.steamId,
      sort: {
        field: sortField,
        order: sortOrder,
      },
    },
  });
  const [updateUserGameBundle] = useLazyQuery(UpdateUserGameBundleDocument);
  const [getMyLibrary] = useLazyQuery(GetMyLibraryDocument);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [field, order] = event.target.value.split('-');
    setSortField(field as BundleSortField);
    setSortOrder(order as SortOrder);
  };

  const handleRefreshBundles = async () => {
    setIsRefreshing(true);
    setProcessedGames(0);

    const library = await getMyLibrary({
      variables: { steamId: session?.data?.user.steamId },
    });

    const games = library.data.getMyLibrary;
    setTotalGames(games.length);

    if (process.env.NODE_ENV === 'development') {
      await Promise.all(
        games.map(async game => {
          await updateUserGameBundle({
            variables: {
              steamId: session?.data?.user.steamId,
              gameName: game.name,
            },
          });
          setProcessedGames(prev => prev + 1);
        })
      );
    } else {
      for (const game of games) {
        await updateUserGameBundle({
          variables: {
            steamId: session?.data?.user.steamId,
            gameName: game.name,
          },
        });
        setProcessedGames(prev => prev + 1);
      }
    }

    await refetch();
    setIsRefreshing(false);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <button
          onClick={handleRefreshBundles}
          disabled={isRefreshing}
          style={{
            padding: '10px',
            backgroundColor: isRefreshing ? '#4a5568' : '#2d3748',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: isRefreshing ? 'not-allowed' : 'pointer',
          }}
        >
          {isRefreshing ? 'Refreshing...' : 'Refresh Bundles'}
        </button>

        <select
          onChange={handleSortChange}
          value={`${sortField}-${sortOrder}`}
          disabled={isRefreshing}
          style={{
            padding: '10px',
            backgroundColor: '#2d3748',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px',
          }}
        >
          <option value={`${BundleSortField.Name}-${SortOrder.Asc}`}>
            Name (A-Z)
          </option>
          <option value={`${BundleSortField.Name}-${SortOrder.Desc}`}>
            Name (Z-A)
          </option>
          <option value={`${BundleSortField.Price}-${SortOrder.Asc}`}>
            Price (Low to High)
          </option>
          <option value={`${BundleSortField.Price}-${SortOrder.Desc}`}>
            Price (High to Low)
          </option>
          <option value={`${BundleSortField.Discount}-${SortOrder.Asc}`}>
            Discount (Low to High)
          </option>
          <option value={`${BundleSortField.Discount}-${SortOrder.Desc}`}>
            Discount (High to Low)
          </option>
        </select>
      </div>

      {isRefreshing && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p>
            Refreshed {processedGames} out of {totalGames} games...
          </p>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: '#2d3748',
              borderRadius: '2px',
              overflow: 'hidden',
              margin: '10px auto',
              maxWidth: '400px',
            }}
          >
            <div
              style={{
                width: `${(processedGames / totalGames) * 100}%`,
                height: '100%',
                backgroundColor: '#48bb78',
                transition: 'width 0.3s ease-in-out',
              }}
            />
          </div>
        </div>
      )}

      {loading && !isRefreshing && <p>Loading bundles...</p>}

      {!isRefreshing &&
        data?.getUserBundles.map(bundle => (
          <a
            key={bundle.id}
            style={{
              border: '1px solid white',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              transition: 'background-color 0.3s',
              borderRadius: '5px',
            }}
            href={bundle.url}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = '#2d3748')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
          >
            <img
              src={bundle.image}
              alt={bundle.name}
              style={{
                objectFit: 'contain',
                marginRight: '10px',
                width: '128px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: '500' }}>{bundle.name}</div>
              <div style={{ color: '#a0aec0' }}>{bundle.price}</div>
              <div style={{ color: '#48bb78' }}>{bundle.discount}</div>
            </div>
          </a>
        ))}
    </div>
  );
}
