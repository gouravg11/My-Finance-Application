import React, { useEffect, useState } from "react";
import api from "../libs/apiCall";
import Loading from "../components/ui/loading";
import { toast } from "sonner";
import Info from "../components/ui/info";
import Stats from "../components/ui/stats";
import Chart from "../components/ui/Chart";
import RecentTransactions from "../components/ui/recent-transaction";
import Accounts from "../components/ui/accounts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDashboardStats = async () => {
    const URL = "/transaction/dashboard";
    try {
      const { data } = await api.get(URL);
      setData(data);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.responce?.data?.message ||
          "Something unexpected happened. Try again later."
      );
      if (error?.response?.data?.status === "auth_failed") {
        localStorage.removeItem("user");
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchDashboardStats();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <Loading />
      </div>
    );
  }
  return (
    <div className="px-0 mid:px-5 2xl:px-20">
      <Info title="Dashboard" subTitle={"Monitor your financial activities"} />
      <Stats
        dt={{
          balance: data?.availableBalance,
          income: data?.totalIncome,
          expense: data?.totalIncome,
        }}
      />

      <div className="flex flex-col-reverse items-center gap-10 w-full md:flex-row">
        <Chart data={data?.chartData} />
        {data.totalIncome > 0 && (
          <DoughnutChart
            dt={{
              balance: data?.availableBalance,
              income: data?.tatalIncome,
              expense: data?.totalExpense,
            }}
          />
        )}
      </div>
      <div className="flex flex-col-reverse gap-0 md:flex-row md:gap-10 2xl:gap-20">
        <RecentTransactions data={data?.lastTransactions} />
        {data?.lastAccout?.length > 0 && <Accounts data={data?.lastAccout} />}
      </div>
    </div>
  );
};

export default Dashboard;
