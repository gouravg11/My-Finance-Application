import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../libs/apiCall";
import { toast } from "sonner";
import Loading from "../components/ui/loading";
import Title from "../components/ui/title";
import Input from "../components/ui/input";
import { MdAdd } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../components/ui/button";
import { exportToExcel } from "react-json-to-excel";
import { CiExport } from "react-icons/ci";
import DateRange from "../components/ui/date-range";

const Transactions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState();
  const [isOpenView, setIsOpenView] = useState();
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const startDate = searchParams.get("df") || "";
  const endDate = searchParams.get("dt") || "";

  const handleViewTransaction = (el) => {
    setSelected(el);
    setIsOpenView(true);
  };

  const fetchTransactions = async () => {
    try {
      const URL = `/transaction?df=${startDate}&dt=${endDate}&s=${search}`;
      const { data: res } = api.get(URL);

      setData(res?.data);
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          "Something unexpected happened. Try again later !"
      );

      if (error?.response?.data?.status === "auth_failed") {
        localStorage.removeItem("user");
        window.location.reload();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setSearchParams({
      df: startDate,
      dt: endDate,
    });
    setIsLoading(true);
    await fetchTransactions();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTransactions();
  }, [startDate, endDate]);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="w-full py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <Title title="Transactions Activity" />

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <DateRange />

            <form onSubmit={(e) => handleSearch(e)}>
              <div className="w-full flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 ">
                <IoSearchOutline className="text-xl text-gray-600 dark:text-gray-400" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search Now..."
                  className="outline-none group bg-transparent text-gray-700 dark:text-gray-400 placeholder:text-gray-600"
                />
              </div>
            </form>

            <Button
              onClick={() => setIsOpen(true)}
              className="py-1.5 px-2 text-white bg-black dark:bg-violet-800 flex items-center justify-center gap-2 border border-gray-500"
            >
              <MdAdd size={22} />
              <span>Pay</span>
            </Button>

            <Button
              onClick={() =>
                exportToExcel(data, `Transactions ${startDate}-${endDate}`)
              }
              className="flex items-center gap-2 text-black dark:text-gray-300"
            >
              Export <CiExport size={24} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
