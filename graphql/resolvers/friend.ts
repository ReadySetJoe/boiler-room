import axios from 'axios';
import { QueryResolvers } from '../../generated/resolvers-types';

type SteamResponseFriend = {
  steamid: string;
  relationship: string;
  friend_since: number;
};

export const getMyFriends: QueryResolvers['getMyFriends'] = async (
  _parent,
  { steamId }
) => {
  const res = await axios.get(
    `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?relationship=friend&key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&format=json`
  );

  const friends: SteamResponseFriend[] = res.data.friendslist.friends;
  const friendIds = friends.map(f => f.steamid);

  const friendSummariesResponse = await axios.get(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${friendIds}`
  );

  const output = friendSummariesResponse.data.response.players.map(p => ({
    id: p.steamid,
    avatar: p.avatar,
    name: p.personaname,
  }));

  return output;
};

export const getSharedGames: QueryResolvers['getSharedGames'] = async (
  _parent,
  { steamIds }
) => {
  const friendsGamesLists = await Promise.all(
    steamIds.map(async id => {
      const res = await axios.get(
        `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${id}&include_appinfo=true&format=json`
      );

      return res.data.response.games;
    })
  );

  const sharedGames = friendsGamesLists.reduce((acc, games, i) => {
    games.forEach(g => {
      const existingGame = acc.find(
        sharedGame => sharedGame.game.id === g.appid
      );

      if (existingGame) {
        existingGame.friends.push({
          id: steamIds[i],
        });
      } else {
        acc.push({
          game: {
            id: g.appid,
            name: g.name,
            image: `http://media.steampowered.com/steamcommunity/public/images/apps/${g.appid}/${g.img_icon_url}.jpg`,
            url: `http://store.steampowered.com/app/${g.appid}`,
          },
          friends: [
            {
              id: steamIds[i],
            },
          ],
        });
      }
    });

    return acc;
  }, []);

  return sharedGames;
};
