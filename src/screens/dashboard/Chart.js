import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData("0", 0),
//   createData("3", 300),
//   createData("4", 600),
//   createData("4", 800),
//   createData("6", 1500),
//   createData("9", 2000),
//   createData("10", 2400),
//   createData("12", 2400),
//   // createData("2", undefined),
// ];
const salesData = [
  { date: "2", sales: 200 },
  { date: "1", sales: 100 },
  { date: "3", sales: 150 },
  { date: "4", sales: 300 },
  { date: "4", sales: 150 }, // Add another sale for the same date
  // more data
];
const groupedSalesData = salesData.reduce((accumulator, currentValue) => {
  const date = currentValue.date;
  if (accumulator[date]) {
    accumulator[date] += currentValue.sales;
  } else {
    accumulator[date] = currentValue.sales;
  }
  return accumulator;
}, {});
const formattedSalesData = Object.keys(groupedSalesData).map((date) => {
  return {
    date: date,
    sales: groupedSalesData[date],
  };
});

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Current Month</Title>
      <ResponsiveContainer>
        <LineChart width={500} height={300} data={formattedSalesData}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
