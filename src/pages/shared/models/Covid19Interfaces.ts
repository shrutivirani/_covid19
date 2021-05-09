//Global Meta data
interface IGermanyCovid19CaseMeta {
  source?: string;
  contact?: string;
  info?: string;
  lastUpdate?: Date;
  lastCheckedForUpdate?: Date;
}

export interface IGermanyCovid19CaseHistoryItem {
  cases: number;
  date: Date;
}

export interface IGermanyCovid19CaseHistory {
  data: IGermanyCovid19CaseHistoryItem[];
  meta?: IGermanyCovid19CaseMeta;
}

interface IGermnayTodayCovid19Cases {
    cases: number;
    deaths: number;
    recovered: number;
}

//Germany Total cases, deaths, recovered
export interface IGermanyCovid19TotalCases {
  cases: number;
  deaths: number;
  recovered: number;
  weekIncidence: number;
  casesPer100k: number;
  casesPerWeek: number;
  delta?: IGermnayTodayCovid19Cases;
  r?: Object;
  meta?: IGermanyCovid19CaseMeta;
}

//State Total cases, deaths, recovered
export interface IStateData {
    id?: number;
    name?: string;
    population?: number;
    cases: number;
    deaths: number;
    casesPerWeek: number;
    deathsPerWeek: number;
    recovered: number;
    abbreviation?: string;
    weekIncidence?: number;
    casesPer100k: number;
      delta?: ICurrentStateData;
      meta?: IGermanyCovid19CaseMeta;
  }
  interface ICurrentStateData {
    cases: number;
    deaths: number;
    recovered: number;
  }
