import axios from 'axios';
import {
  QueryResolvers,
  SortField,
  SortOrder,
} from '../../generated/resolvers-types';

export const getMyLibrary: QueryResolvers['getMyLibrary'] = async (
  _parent,
  { steamId, sort }
) => {
  const res = await axios.get(
    `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&format=json`
  );

  const games = res.data.response.games.map(game => ({
    id: game.appid,
    name: game.name,
    image: `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
    playtime: game.playtime_forever,
    price: game.price_overview?.final_formatted || 'Free',
  }));

  if (sort) {
    const { field, order } = sort;
    games.sort((a, b) => {
      if (field === SortField.PlaytimeForever) {
        return order === SortOrder.Asc
          ? a.playtime - b.playtime
          : b.playtime - a.playtime;
      }

      if (field === SortField.Name) {
        return order === SortOrder.Asc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }

      if (field === SortField.Price) {
        return order === SortOrder.Asc
          ? a.price.localeCompare(b.price)
          : b.price.localeCompare(a.price);
      }

      return 0;
    });
  }

  return games;
};
