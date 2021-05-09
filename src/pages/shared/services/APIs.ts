//APIs for Germany

// Total cases, deaths, recovered, week incedence, casesPer100k,casesPerWeek of Germany
export const getGermanyTotalCovid19Datas = async () => {
  const endpoint = "https://api.corona-zahlen.org/germany";

  const data = await (await fetch(endpoint)).json();
  try {
    return data;
  } catch {
    console.log("So many Request so far " + data.code);
    return data.code;
  }
};

//APIs of Graph for Germany

//Selected days cases of Germany for Graph
export const getGermanyCovid19CasesForGraph = async (days: number) => {
  const endpoint = `https://api.corona-zahlen.org/germany/history/cases/${days}`;

  const data = await (await fetch(endpoint)).json();
  try {
    return data.data.map((a: any) => a.cases);
  } catch {
    console.log("So many Request so far " + data.code);
    return data.code;
  }
};

//Selected days death of Germany for Graph
export const getGermanyCovid19DeathsForGraph = async (days: number) => {
  const endpoint = `https://api.corona-zahlen.org/germany/history/deaths/${days}`;

  const data = await (await fetch(endpoint)).json();
  try {
    return data.data.map((a: any) => a.deaths);
  } catch {
    console.log("So many Request so far " + data.code);
    return data.code;
  }
};

//Selected days recovered of Germany for Graph
export const getGermanyCovid19RecoveredForGraph = async (days: number) => {
  const endpoint = `https://api.corona-zahlen.org/germany/history/recovered/${days}`;

  const data = await (await fetch(endpoint)).json();
  try {
    return data.data.map((a: any) => a.recovered);
  } catch {
    console.log("So many Request so far " + data.code);
    return data.code;
  }
};

//Selected days date of Germany for Graph
export const getGermanyCovid19CasesDateForGraph = async (days: number) => {
  const endpoint = `https://api.corona-zahlen.org/germany/history/cases/${days}`;

  const data = await (await fetch(endpoint)).json();
  try {
    return data.data.map((a: any) =>
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(a.date))
    );
  } catch {
    console.log("So many Request so far " + data.code);
    return data.code;
  }
};

//States APIs
//Covid19 Total data of selected state
export const getStateCovid19Data = async (state: string) => {
    const endpoint = `https://api.corona-zahlen.org/states/${state}`;

    const data = await (await fetch(endpoint)).json();
    return data.data[state];
};

//APIs of Graph for selected state and days

//selected state and days cases of Germany for Graph
export const getStateCovid19CasesForGraph = async (state: string, days: number) => {
    const endpoint = `https://api.corona-zahlen.org/states/history/cases/${days}`;

    const data = await (await fetch(endpoint)).json();
    try {
      return data.data[state].history.map((a: any) => a.cases);
    } catch {
      console.log("So many Request so far " + data.code);
      return data.code;
    }
  };

  //selected state and days death of Germany for Graph
  export const getStateCovid19DeathsForGraph = async (state: string, days: number) => {
    const endpoint = `https://api.corona-zahlen.org/states/history/deaths/${days}`;

    const data = await (await fetch(endpoint)).json();
    try {
      return data.data[state].history.map((a: any) => a.deaths);
    } catch {
      console.log("So many Request so far " + data.code);
      return data.code;
    }
  };

  //selected state and days recovered of Germany for Graph
  export const getStateCovid19RecoveredForGraph = async (state: string, days: number) => {
    const endpoint = `https://api.corona-zahlen.org/states/history/recovered/${days}`;

    const data = await (await fetch(endpoint)).json();
    try {
      return data.data[state].history.map((a: any) => a.recovered);
    } catch {
      console.log("So many Request so far " + data.code);
      return data.code;
    }
  };

  //selected state and days date of Germany for Graph
  export const getStateCovid19CasesDateForGraph = async (state: string, days: number) => {
    const endpoint = `https://api.corona-zahlen.org/states/history/cases/${days}`;

    const data = await (await fetch(endpoint)).json();
    try {
      return data.data[state].history.map((a: any) =>
        new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(a.date))
      );
    } catch {
      console.log("So many Request so far " + data.code);
      return data.code;
    }
  };
