import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Title from "./title";

const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F"];

const DoughnutChart = ({ dt }) => {
  const data = [
    { name: "Income", values: Number(dt?.income) },
    { name: "Expense", values: Number(dt?.expense) },
  ];

  return (
    <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-50 dark:bg-transparent">
      <Title title="Summary" />
      <ResponsiveContainer width={"100%"} height={500}>
        <PieChart widht={500} height={400}>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            innerRadius={110}
            outerRadius={180}
            full="#884d8"
            paddingAngle={5}
            dataKey={"value"}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
