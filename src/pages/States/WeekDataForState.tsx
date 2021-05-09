import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { FC, useEffect } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { LineChart } from "../shared/SharedLineChart";
import {
  getStateCovid19CasesForGraph,
  getStateCovid19DeathsForGraph,
  getStateCovid19RecoveredForGraph,
  getStateCovid19CasesDateForGraph,
} from "../shared/services/APIs";

type SelectedWeek = {
  weekData: number;
  currentState: string;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 250,
      maxWidth: 300,
      color: "#fff",
      backgroundColor: "#353535",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color: "#fff",
      fontSize: 20,
      "&:before": {
        borderColor: "#fff",
      },
      "&:after": {
        borderColor: "#fff",
      },
    },
    icon: {
      fill: "#fff",
      color: "#fff",
    },
    spinner: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const defaultCases: number[] = [];
const defaultDeaths: number[] = [];
const defaultRecovered: number[] = [];
const defaultDates: string[] = [];

const WeeklyCovid19Data = styled.div``;

export const WeekCovid19Data: FC<SelectedWeek> = ({
  currentState,
  weekData,
}) => {
  const classes = useStyles();

  //for week Data
  const [cases, setCases] = React.useState<number>(0);
  const [deaths, setDeaths] = React.useState<number>(0);
  const [recovered, setRecovered] = React.useState<number>(0);
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  //for Graph
  const [casesForGraph, setCasesForGraph]: [
    number[],
    (cases: number[]) => void
  ] = React.useState(defaultCases);
  const [deathsForGraph, setDeathsForGraph]: [
    number[],
    (deaths: number[]) => void
  ] = React.useState(defaultDeaths);
  const [recoveredForGraph, setRecoveredForGraph]: [
    number[],
    (recovered: number[]) => void
  ] = React.useState(defaultRecovered);

  const [datesForGraph, setDatesForGraph]: [
    string[],
    (dates: string[]) => void
  ] = React.useState(defaultDates);

  //Get Total cases per selected days in Germany
  const getWeekCovid19Data = async (state: string, days: number) => {
    const weekCovid19Cases = await getStateCovid19CasesForGraph(state, days);
    const weekCovid19Deaths = await getStateCovid19DeathsForGraph(state, days);
    const WeekCovid19Recovered = await getStateCovid19RecoveredForGraph(
      state,
      days
    );
    setCases(
      weekCovid19Cases
        .map((a: any) => a)
        .reduce((prev: any, curr: any) => prev + curr)
    );
    setCasesForGraph(weekCovid19Cases);
    setDeaths(
      weekCovid19Deaths
        .map((a: any) => a)
        .reduce((prev: any, curr: any) => prev + curr)
    );
    setDeathsForGraph(weekCovid19Deaths);
    setRecovered(
      WeekCovid19Recovered.map((a: any) => a).reduce(
        (prev: any, curr: any) => prev + curr
      )
    );
    setRecoveredForGraph(WeekCovid19Recovered);
    const gemanyTotalDate = await getStateCovid19CasesDateForGraph(state, days);
    setDatesForGraph(gemanyTotalDate);
    setLoading(false);
  };

  useEffect(() => {
    getWeekCovid19Data(currentState, weekData);
  }, [currentState, weekData]);

  return (
    <div className="dashboard">
      <div className="dashboard-row">
        {weekData ? (
          <>
            <div className="dashboard-item">
              <Card className="weekHeader">
                <CardContent>
                  <span className="cardTitle">Cases</span>
                  {loading ? (
                    <CircularProgress
                      className={classes.spinner}
                      color="secondary"
                    />
                  ) : (
                    <WeeklyCovid19Data className="cardBody">
                      <NumberFormat
                        value={cases}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </WeeklyCovid19Data>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="dashboard-item">
              <Card className="weekHeader">
                <CardContent>
                  <span className="cardTitle">Deaths</span>
                  {loading ? (
                    <CircularProgress
                      className={classes.spinner}
                      color="secondary"
                    />
                  ) : (
                    <WeeklyCovid19Data className="cardBody">
                      <NumberFormat
                        value={deaths}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </WeeklyCovid19Data>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="dashboard-item">
              <Card className="weekHeader">
                <CardContent>
                  <span className="cardTitle">Recovered</span>
                  {loading ? (
                    <CircularProgress
                      className={classes.spinner}
                      color="secondary"
                    />
                  ) : (
                    <WeeklyCovid19Data className="cardBody">
                      <NumberFormat
                        value={recovered}
                        displayType={"text"}
                        thousandSeparator={true}
                      />
                    </WeeklyCovid19Data>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        ) : null}
        <div className="dashboard-item">
          {weekData ? (
            <div className="dashboard-row">
              <div className="dashboard-item">
                <Card style={{ backgroundColor: "#303030" }}>
                  <CardContent>
                    {loading && weekData! > 0 ? (
                      <CircularProgress
                        className={classes.spinner}
                        color="secondary"
                      />
                    ) : (
                      <LineChart
                        chartCases={casesForGraph}
                        chartDeaths={deathsForGraph}
                        chartRecoverd={recoveredForGraph}
                        chartDates={datesForGraph}
                      />
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
