import { useLazyQuery, useQuery } from '@apollo/client';
import {
  GetUserBundlesDocument,
  UpdateUserBundlesDocument,
  BundleSortField,
  SortOrder,
} from '../../generated/graphql';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { ConnectTwitch } from '../../components/connect-twitch';

export default function Bundles() {
  const session = useSession();

  if (!session?.data?.user.twitchId) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">
          Connect your Twitch account to check subscription status
        </p>
        <ConnectTwitch />
      </div>
    );
  }

  const [sortField, setSortField] = useState<BundleSortField>(
    BundleSortField.Name
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.Asc);

  const { data, refetch } = useQuery(GetUserBundlesDocument, {
    skip: session.status !== 'authenticated',
    variables: {
      steamId: session?.data?.user.steamId,
      sort: {
        field: sortField,
        order: sortOrder,
      },
    },
  });

  const [updateUserBundles, { loading: updateLoading, error }] = useLazyQuery(
    UpdateUserBundlesDocument
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const [field, order] = event.target.value.split('-');
    setSortField(field as BundleSortField);
    setSortOrder(order as SortOrder);
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
          onClick={async () => {
            await updateUserBundles({
              variables: { steamId: session?.data?.user.steamId },
            });
            await refetch();
          }}
          style={{
            padding: '10px',
            backgroundColor: '#2d3748',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Refresh Bundles
        </button>

        <select
          onChange={handleSortChange}
          value={`${sortField}-${sortOrder}`}
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

      {updateLoading && <p>Loading...</p>}

      {data?.getUserBundles.map(bundle => (
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
