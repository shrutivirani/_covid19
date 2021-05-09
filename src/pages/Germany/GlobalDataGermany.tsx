import { Chip } from "@material-ui/core";
import { FC } from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import NumberFormat from "react-number-format";
import styled from "styled-components";

const GermanyTotalCases = styled.div``;
const GermanyCurrentCases = styled.div``;

type TotalCases = {
  data: number | undefined;
};

export const GermanyTotalCovid19Data: FC<TotalCases> = ({ data }) => (
  <>
    <GermanyTotalCases className="cardBody">
      <NumberFormat
        value={data ? data.toFixed(1) : null}
        displayType={"text"}
        thousandSeparator={true}
      />
    </GermanyTotalCases>
  </>
);

export const GermanyCurrentCovid19Data: FC<TotalCases> = ({ data }) => (
  <>
    <GermanyCurrentCases>
      <Chip
        icon={<TrendingUpIcon />}
        label={
          <NumberFormat
            value={data}
            displayType={"text"}
            thousandSeparator={true}
          />
        }
        color="secondary"
      />
    </GermanyCurrentCases>
  </>
);
