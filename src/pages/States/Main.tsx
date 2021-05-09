import {
  Card,
  CardContent,
  createStyles,
  FormControl,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
import React, { FC, useState } from "react";
import { StateData } from "./StateData";

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

const states = [
  { name: "Baden-Württemberg", value: "BW" },
  { name: "Bayern", value: "BY" },
  { name: "Brandeburg", value: "BB" },
  { name: "Berlin", value: "BE" },
  { name: "Bremen", value: "HB" },
  { name: "Hamburg", value: "HH" },
  { name: "Hessen", value: "HE" },
  { name: "Mecklenburg-Vorpommern", value: "MV" },
  { name: "Niedersachsen", value: "NI" },
  { name: "Nordrhein-Westfalen", value: "NW" },
  { name: "Rheinland-Pfalz", value: "RP" },
  { name: "Saarland", value: "SL" },
  { name: "Sachsen-Anhalt", value: "ST" },
  { name: "Sachsen", value: "SN" },
  { name: "Schleswig-Holstein", value: "SH" },
  { name: "Thüringen", value: "TH" },
];

export const State: FC = () => {
  const classes = useStyles();

  const [stateData, setStateData] = useState(false);
  const showStateData = () => setStateData(true);

  const [state, setState] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setState(event.target.value as string);
    if (event.target.value !== "") {
      showStateData();
    } else {
      setStateData(false);
    }
  };

  return (
    <div style={{ marginLeft: "100px", marginTop: "20px" }}>
      <div className="dashboard">
        <div className="dashboard-row">
          <div className="dashboard-item">
            <Card className="selectOption">
              <CardContent className="selectMenu">
                <FormControl className={classes.formControl}>
                  <Select
                    value={state}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{
                      classes: {
                        icon: classes.icon,
                      },
                    }}
                  >
                    <MenuItem className={classes.menu} value={""}>
                      <em>Select State</em>
                    </MenuItem>
                    {states.map((state) => (
                      <MenuItem className={classes.menu} value={state.value}>
                        {state.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {stateData ? <StateData state={state} /> : null}
    </div>
  );
};
