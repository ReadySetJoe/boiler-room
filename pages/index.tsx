import Landing from '../components/landing';
import Link from 'next/link';

export default function Home() {
  const pages = [
    {
      name: 'Search',
      url: '/search',
      description: 'Search for bundles for any game',
    },
    {
      name: 'Library',
      url: '/library',
      description: 'Use your library to search for bundles',
    },
    {
      name: 'Buddies',
      url: '/buddies',
      description: 'Find shared games with you and your friends',
    },
    {
      name: '☆☆☆ Premium ☆☆☆',
      url: '/twitch',
      description: 'Import your library to find ALL bundles',
      premium: true,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {pages.map(page => (
        <Link key={page.url} href={page.url}>
          <div
            style={{
              padding: '16px',
              border: `2px solid ${page.premium ? '#6441a5' : '#FFF'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              color: '#FFF',
              margin: '8px',
              maxWidth: '300px',
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = '#2d3748')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = 'transparent')
            }
          >
            <h3 style={{ margin: '6px 0px' }}>{page.name}</h3>
            <p style={{ margin: '6px 0px' }}>{page.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
