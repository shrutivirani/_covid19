import {
  Card,
  CardContent,
  CircularProgress,
  createStyles,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  Chip,
} from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import React, { FC, useEffect } from "react";
import { WeekCovid19Data } from "./WeekDataForState";
import { getStateCovid19Data } from "../shared/services/APIs";
import { IStateData } from "../shared/models/Covid19Interfaces";
import NumberFormat from "react-number-format";
import styled from "styled-components";

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
    menu: {
      margin: 20,
      fontSize: 20,
    },
    spinner: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const defaultdatas: IStateData = {
  cases: 0,
  deaths: 0,
  recovered: 0,
  casesPerWeek: 0,
  deathsPerWeek: 0,
  casesPer100k: 0,
};
type SelectedState = {
  state: string;
};

const StateCovid19Data = styled.div``;

export const StateData: FC<SelectedState> = ({ state }) => {
  const classes = useStyles();

  const [stateData, setStateData]: [
    IStateData,
    (stateData: IStateData) => void
  ] = React.useState(defaultdatas);

  const [weekValue, setWeekValue] = React.useState<number>(0);
  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setWeekValue(event.target.value as number);
  };

  //Get total covid19 data of selected state
  const getSelectedStateCovid19Data = async (SelectedState: string) => {
    const stateTotalCovid19Data = await getStateCovid19Data(SelectedState);
    setStateData(stateTotalCovid19Data);
    setLoading(false);
  };

  useEffect(() => {
    getSelectedStateCovid19Data(state);
  }, [state]);

  return (
    <div className="dashboard">
      <div className="dashboard-row">
        <div className="dashboard-item">
          <Card className="header">
            <CardContent>
              <span className="cardTitle">Total Cases</span>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <StateCovid19Data className="cardBody">
                  <NumberFormat
                    value={stateData.cases}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </StateCovid19Data>
              )}
            </CardContent>
            <CardContent>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <Chip
                  icon={<TrendingUpIcon />}
                  label={
                    <NumberFormat
                      value={stateData.delta?.cases}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                  color="secondary"
                />
              )}
            </CardContent>
          </Card>
        </div>
        <div className="dashboard-item">
          <Card className="header">
            <CardContent>
              <span className="cardTitle">Total Deaths</span>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <StateCovid19Data className="cardBody">
                  <NumberFormat
                    value={stateData.deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </StateCovid19Data>
              )}
            </CardContent>
            <CardContent>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <Chip
                  icon={<TrendingUpIcon />}
                  label={
                    <NumberFormat
                      value={stateData.delta?.deaths}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                  color="secondary"
                />
              )}
            </CardContent>
          </Card>
        </div>
        <div className="dashboard-item">
          <Card className="header">
            <CardContent>
              <span className="cardTitle">Total Recovered</span>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <StateCovid19Data className="cardBody">
                  <NumberFormat
                    value={stateData.recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </StateCovid19Data>
              )}
            </CardContent>
            <CardContent>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <Chip
                  icon={<TrendingUpIcon />}
                  label={
                    <NumberFormat
                      value={stateData.delta?.recovered}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                  color="secondary"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-item">
          <Card className="header">
            <CardContent>
              <span className="cardTitle">Cases per Week</span>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <StateCovid19Data className="cardBody">
                  <NumberFormat
                    value={stateData.casesPerWeek}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </StateCovid19Data>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="dashboard-item">
          <Card className="header">
            <CardContent>
              <span className="cardTitle">Deaths per Week</span>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <StateCovid19Data className="cardBody">
                  <NumberFormat
                    value={stateData.deathsPerWeek}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </StateCovid19Data>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="dashboard-item">
          <Card className="header">
            <CardContent>
              <span className="cardTitle">Cases per 100k</span>
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                <StateCovid19Data className="cardBody">
                  <NumberFormat
                    value={stateData.casesPer100k.toFixed(1)}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </StateCovid19Data>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-item">
          <div className="dashboard-row">
            <div className="dashboard-item">
              <Card className="selectOption">
                <CardContent className="selectMenu">
                  <FormControl className={classes.formControl}>
                    <Select
                      value={weekValue}
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
                      <MenuItem className={classes.menu} value={7}>
                        Last One Week
                      </MenuItem>
                      <MenuItem className={classes.menu} value={14}>
                        Last Two Weeks
                      </MenuItem>
                      <MenuItem className={classes.menu} value={21}>
                        Last Three Weeks
                      </MenuItem>
                      <MenuItem className={classes.menu} value={28}>
                        Last Four Weeks
                      </MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {weekValue > 0 ? (
        <WeekCovid19Data currentState={state} weekData={weekValue} />
      ) : null}
    </div>
  );
};
