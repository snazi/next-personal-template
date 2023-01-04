import client from 'apollo-client';
import { getUTCTimestampFromLocal } from 'utils/date/helper';

async function getGameInfoById(item) {
  // let game_id = item[0];
  // let end_time = item[1].end_time;s
  // let whitelist = item[1].whitelist;
  // console.log(game_id);
  // console.log(end_time);
  // console.table(whitelist);
  const returningData = {
    game_id: item[0],
    start_time: item[1].start_time,
    end_time: item[1].end_time,
    whitelist: item[1].whitelist,
    usage_cost: item[1].usage_cost,
    positions: item[1].positions,
    lineup_len: item[1].lineup_len,
    joined_player_counter: item[1].joined_player_counter,
    jointed_team_counter: item[1].joined_team_counter,
    isCompleted: getUTCTimestampFromLocal() >= item[1].end_time ? true : false,
    status:
      getUTCTimestampFromLocal() >= item[1].end_time
        ? 'completed'
        : getUTCTimestampFromLocal() < item[1].start_time
        ? 'new'
        : getUTCTimestampFromLocal() > item[1].start_time &&
          getUTCTimestampFromLocal() < item[1].end_time
        ? 'ongoing'
        : 'invalid',
  };

  return returningData;
}

function getImage(gameId: string): string {
  switch (gameId) {
    case '21':
      return '/images/wild_card.jpg';
    case '22':
      return '/images/footballChampsionship.jpg';
    case '24':
      return '/images/holidayContest.jpg';
    case '25':
      return '/images/footballChampsionship.jpg';
    case '30':
      return '/images/4thdown.jpg';
    default:
      return '/images/game.png';
  }
}

function getDescription(gameId: string): string {
  switch (gameId) {
    case '21':
      return 'This is your last chance to earn a spot in next week’s $35K USDC Football Championship. \nOnly those who have not yet won entry into the Championship are eligible.';
    case '22':
      return 'The first annual Playible Football Championship. Only those who won tickets can enter and compete for $35K.';
    case '24':
      return 'Only Sunday games will be eligible to score points in this game. Enjoy the holidays!';
    case '25':
      return 'The first annual Playible Football Championship. Only those who won tickets can enter and compete for $35K.';
    default:
      return 'Enter your team to compete for the prizes up for grabs this week.\n Create your lineup by selecting Playible Football Athletes from your squad';
  }
}

function getPrizePool(gameId: string): string {
  switch (gameId) {
    case '22':
      return '$35K ($10K to 1st)';
    case '23':
      return '$100';
    case '24':
      return 'Playible Athlete NFTs';
    case '25':
      return '$35K ($10K to 1st)';
    case '26':
      return '$100';
    case '27':
      return 'Playible Basketball Starter Pack';
    case '28':
      return 'Playible Football Athlete NFTs';
    case '29':
      return '$100';
    case '30':
      return 'Playible Athlete NFTs';
    default:
      return '$100 + 2 Championship Tickets';
  }
}

export { getGameInfoById, getImage, getDescription, getPrizePool };
