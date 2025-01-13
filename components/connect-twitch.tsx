import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';

export function ConnectTwitch() {
  const { data: session, update: updateSession } = useSession();
  const [isLinking, setIsLinking] = useState(false);

  const handleConnect = async () => {
    setIsLinking(true);
    try {
      const result = await signIn('twitch', {
        redirect: true,
        callbackUrl: window.location.origin + '/twitch',
      });
      await updateSession();
    } catch (error) {
      console.error('Error linking Twitch account:', error);
    } finally {
      setIsLinking(false);
    }
  };

  const isTwitchConnected = !!session?.user.twitchId;

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Twitch Connection</h3>
      {isTwitchConnected ? (
        <div className="flex items-center space-x-2">
          <span className="text-green-600">✓ Connected to Twitch</span>
          <button
            onClick={async () => {
              // Implement disconnect logic here
              // You'll need to create an API route to handle this
              await fetch('/api/disconnect-twitch', { method: 'POST' });
              await updateSession();
            }}
            className="text-red-600 text-sm hover:underline"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={isLinking}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
        >
          {isLinking ? 'Connecting...' : 'Connect Twitch Account'}
        </button>
      )}
    </div>
  );
}
