import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaArrowUpLong } from "react-icons/fa6";
import { LIGHT_THEME } from "../../../constants/themeConstants";
import "./AreaCharts.scss";

const data = [
  {
    month: "Tango-2",
    loss: 965.08,
    profit: 902.69,
  },
  {
    month: "Tango-3",
    loss: 632.62,
    profit: 599.61,
  },
  {
    month: "Tango-4",
    loss: 3336.9,
    profit: 3406.6,
  },
  {
    month: "Tango-5",
    loss: 593.2,
    profit: 293.8,
  },
  {
    month: "Tango-6",
    loss: 1178.6,
    profit: 1088.77,
  },
  {
    month: "Tango-7",
    loss: 1862.26,
    profit: 1800.77,
  },
  {
    month: "Tango-8",
    loss: 1607.52,
    profit: 1575.47,
  },
  {
    month: "Tango-9",
    loss: 2149.74,
    profit: 2132.07,
  },
  
];

const AreaBarChart = () => {
  const { theme } = useContext(ThemeContext);

  const formatTooltipValue = (value) => {
    return `${value}m³/d`;
  };

  const formatYAxisLabel = (value) => {
    return `${value}`;
  };

  const formatLegendValue = (value) => {
    return value+ value.slice(1);
  };

  return (
    <div className="bar-chart">
      <div className="bar-chart-info">
        <h5 className="bar-chart-title">1_D VS 7_D </h5>
        <div className="chart-info-data">
          <div className="info-data-value">24 hours vs 7Days Production Averages</div>
          <div className="info-data-text">
            <p></p>
          </div>
        </div>
      </div>
      <div className="bar-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 0,
              bottom: 5,
            }}
          >
            <XAxis
              padding={{ left: 10 }}
              dataKey="month"
              tickSize={0}
              axisLine={false}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
                fontSize: 14,
              }}
            />
            <YAxis
              padding={{ bottom: 10, top: 10 }}
              tickFormatter={formatYAxisLabel}
              tickCount={6}
              axisLine={false}
              tickSize={0}
              tick={{
                fill: `${theme === LIGHT_THEME ? "#676767" : "#f3f3f3"}`,
              }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              cursor={{ fill: "transparent" }}
            />
            {/* <Legend
              iconType="circle"
              iconSize={10}
              verticalAlign="top"
              align="right"
              formatter={formatLegendValue}
            /> */}
            <Bar
              dataKey="profit"
              fill="#475be8"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="loss"
              fill="#e3e7fc"
              activeBar={false}
              isAnimationActive={false}
              barSize={24}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaBarChart;
