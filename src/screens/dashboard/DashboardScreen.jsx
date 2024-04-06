import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
      <barC />
    </div>
  );
};

export default Dashboard;
