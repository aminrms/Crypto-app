import React from "react";
// ChartJs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

//Css
import "./LineChartStyle.css";
import Loader from "../../Loader/Loader";
// moment

const LineChart = ({
  history,
  coinName,
}) => {
  const priceHistory = [];
  const timeStampHistory = [];
  if (history) {
    for (let i = 0; i < history.length; i++) {
      priceHistory.push(history[i].price);
      timeStampHistory.push(
        moment(Date(history[i].timestamp)).startOf("hour").fromNow()
      );
    }
  } else {
    return null;
  }

  const data = {
    labels: timeStampHistory,
    datasets: [
      {
        label: "Line Chart",
        data: priceHistory.map((item) => item),
        borderColor: "rgb(52, 65, 180)",
        backgroundColor: "rgb(52,65,180)",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  };
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Price Chart of ${coinName}`,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <>
      {priceHistory.length && timeStampHistory.length ? (
        <Line data={data} options={options} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default LineChart;
