import React, { FC, useEffect } from "react";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { WeekCovid19Data } from "./WeekDataForGermany";
import {
  GermanyTotalCovid19Data,
  GermanyCurrentCovid19Data,
} from "./GlobalDataGermany";
import { getGermanyTotalCovid19Datas } from "../shared/services/APIs";
import { IGermanyCovid19TotalCases } from "../shared/models/Covid19Interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spinner: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const defaultTotalCases: IGermanyCovid19TotalCases = {
  cases: 0,
  deaths: 0,
  recovered: 0,
  weekIncidence: 0,
  casesPer100k: 0,
  casesPerWeek: 0,
};

export const Germany: FC = () => {
  const classes = useStyles();

  const [totalCases, setTotalCases]: [
    IGermanyCovid19TotalCases,
    (totalCases: IGermanyCovid19TotalCases) => void
  ] = React.useState(defaultTotalCases);

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  //Get Total cases, recovered, deaths in Germany
  const getGermanyData = async () => {
    const gemanyTotalCovid19Datas = await getGermanyTotalCovid19Datas();
    setTotalCases(gemanyTotalCovid19Datas);
    setLoading(false);
  };

  useEffect(() => {
    getGermanyData();
  }, []);

  return (
    <div style={{ marginLeft: "100px" }}>
      <div className="dashboard">
        <div className="dashboard-row">
          <div className="dashboard-item">
            <Card className="header">
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <>
                    <span className="cardTitle">Total Cases</span>
                    <GermanyTotalCovid19Data data={totalCases.cases} />
                  </>
                )}
              </CardContent>
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <GermanyCurrentCovid19Data data={totalCases.delta?.cases} />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="dashboard-item">
            <Card className="header">
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <>
                    <span className="cardTitle">Total Deaths</span>
                    <GermanyTotalCovid19Data data={totalCases.deaths} />
                  </>
                )}
              </CardContent>
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <GermanyCurrentCovid19Data data={totalCases.delta?.deaths} />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="dashboard-item">
            <Card className="header">
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <>
                    <span className="cardTitle">Total Recovered</span>
                    <GermanyTotalCovid19Data data={totalCases.recovered} />
                  </>
                )}
              </CardContent>
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <GermanyCurrentCovid19Data
                    data={totalCases.delta?.recovered}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="dashboard-item">
            <Card className="header">
              <CardContent className="selectMenu">
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <>
                    <span className="cardTitle">Cases per 100k</span>
                    <GermanyTotalCovid19Data data={totalCases.casesPer100k} />
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="dashboard-item">
            <Card className="header">
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <>
                    <span className="cardTitle">Week Incedence</span>
                    <GermanyTotalCovid19Data data={totalCases.weekIncidence} />
                  </>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="dashboard-item">
            <Card className="header">
              <CardContent>
                {loading ? (
                  <CircularProgress
                    className={classes.spinner}
                    color="secondary"
                  />
                ) : (
                  <>
                    <span className="cardTitle">Cases per Week</span>
                    <GermanyTotalCovid19Data data={totalCases.casesPerWeek} />
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/*weekwise data */}
      <WeekCovid19Data />
    </div>
  );
};
