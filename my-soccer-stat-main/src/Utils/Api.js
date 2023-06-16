const urlLeagues = "https://api.football-data.org/v4/competitions/";
const urlTeams = "https://api.football-data.org/v4/teams/";
const API_KEY = "3a31ce438ba04c6baa8827dc56f0d8a7";

export const getLeagues = async () => {
  const response = await fetch(urlLeagues, {
    headers: {
      "x-auth-token": API_KEY,
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getTeams = async () => {
  const response = await fetch(urlTeams, {
    headers: {
      "x-auth-token": API_KEY,
    },
  });
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getLeagueMatches = async (
  idLeague,
  dateFromLeague,
  dateToLeague
) => {
  const response = await fetch(
    `https://api.football-data.org/v4/competitions/${idLeague}/matches?dateFrom=${dateFromLeague}&dateTo=${dateToLeague}`,
    {
      headers: {
        "x-auth-token": API_KEY,
      },
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
export const getTeamMatches = async (idTeam, dateFromTeam, dateToTeam) => {
  const response = await fetch(
    `https://api.football-data.org/v4/teams/${idTeam}/matches?dateFrom=${dateFromTeam}&dateTo=${dateToTeam}`,
    {
      headers: {
        "x-auth-token": API_KEY,
      },
    }
  );
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    console.error("Данные не получены");
    return null;
  }
};
