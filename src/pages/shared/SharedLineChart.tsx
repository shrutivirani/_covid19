import { FC } from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

type dataChart = {
  chartCases: any;
  chartDeaths: any;
  chartRecoverd: any;
  chartDates: any;
};

const ChartData = styled.p`
  display: flex;
  justify-content: center;
  height: 70%;
  width: 70%;
  margin-left: 4rem;

  @media (max-width: 960px) {
    height: 100%;
    width: 100%;
    margin-left: 0rem;
  }
`;

const options = {
  title: {
    display: true,
    text: "Weekly Status",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "top",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          callback: function (value: string, index: any, values: any) {
            return value;
          },
        },
      },
    ],
  },
};

export const LineChart: FC<dataChart> = ({
  chartCases,
  chartDeaths,
  chartRecoverd,
  chartDates,
}) => {
  const data = {
    labels: chartDates,
    datasets: [
      {
        label: "Cases",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(37, 116, 169, 0.4)",
        borderColor: "rgba(37, 116, 169, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(37, 116, 169, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(37, 116, 169, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartCases,
      },
      {
        label: "Death",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(240, 52, 52, 0.4)",
        borderColor: "rgba(240, 52, 52, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(240, 52, 52, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(240, 52, 52, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartDeaths,
      },
      {
        label: "Recovered",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(47,153,76,0.4)",
        borderColor: "rgba(47,153,76,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(47,153,76,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(47,153,76,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartRecoverd,
      },
    ],
  };

  return (
    <ChartData>
      <Line data={data} options={options} />
    </ChartData>
  );
};
