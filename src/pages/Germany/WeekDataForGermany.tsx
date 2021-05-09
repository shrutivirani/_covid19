import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { FC, useState } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import {
  getGermanyCovid19CasesForGraph,
  getGermanyCovid19DeathsForGraph,
  getGermanyCovid19RecoveredForGraph,
  getGermanyCovid19CasesDateForGraph,
} from "../shared/services/APIs";
import { LineChart } from "../shared/SharedLineChart";

const defaultCases: number[] = [];
const defaultDeaths: number[] = [];
const defaultRecovered: number[] = [];
const defaultDates: string[] = [];

const WeeklyCovid19Data = styled.div``;

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

export const WeekCovid19Data: FC = () => {
  const classes = useStyles();

  const [weekData, setWeekData] = useState(false);
  const showWeekData = () => setWeekData(true);

  const [week, setWeek] = React.useState<number>(0);

  //for week Data
  const [cases, setCases] = React.useState<number>(0);
  const [deaths, setDeaths] = React.useState<number>(0);
  const [recovered, setRecovered] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(true);

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
  const getWeekCovid19Data = async (days: number) => {
    const weekCovid19Cases = await getGermanyCovid19CasesForGraph(days);
    const weekCovid19Deaths = await getGermanyCovid19DeathsForGraph(days);
    const WeekCovid19Recovered = await getGermanyCovid19RecoveredForGraph(days);
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
    const gemanyTotalDate = await getGermanyCovid19CasesDateForGraph(days);
    setDatesForGraph(gemanyTotalDate);
    setLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWeek(event.target.value as number);
    if (event.target.value !== 0) {
      showWeekData();
      getWeekCovid19Data(event.target.value as number);
    } else {
      setWeekData(false);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-row">
        <div className="dashboard-item">
          <Card className="selectOption">
            <CardContent className="selectMenu">
              <FormControl className={classes.formControl}>
                <Select
                  value={week}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{
                    classes: {
                      icon: classes.icon,
                    },
                  }}
                >
                  <MenuItem value={0}>
                    <em>Select Week</em>
                  </MenuItem>
                  <MenuItem value={7}>Last One Week</MenuItem>
                  <MenuItem value={14}>Last Two Weeks</MenuItem>
                  <MenuItem value={21}>Last Three Weeks</MenuItem>
                  <MenuItem value={28}>Last Four Weeks</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </div>
      </div>
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
                    {loading && week! > 0 ? (
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
