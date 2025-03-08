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
    { name: "Income", value: Number(dt?.income) },
    { name: "Expense", value: Number(dt?.expense) },
  ];

  // Custom function to display percentages
  const renderLabel = ({ name, value }) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const percentage = ((value / total) * 100).toFixed(2); // Convert to percentage
    return `${name}: ${percentage}%`; // Show label as "Income: 90%"
  };

  return (
    <div className="w-full md:w-1/3 flex flex-col items-center bg-gray-50 dark:bg-transparent">
      <Title title="Summary" />
      <ResponsiveContainer width={"100%"} height={500}>
        <PieChart width={500} height={400}>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            innerRadius={110}
            outerRadius={180}
            paddingAngle={5}
            dataKey="value"
            label={renderLabel} // Use custom label function
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
