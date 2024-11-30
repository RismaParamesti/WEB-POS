import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import SearchBar from "../../../components/Input/SearchBar";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";

const TOP = [
  {
    code: "123",
    name: "Avocat",
    totalSales: "5",
    totalAmount: 480,
  },
];

function TopSell() {
  const [topsell] = useState(TOP);

  const handlePrint = (type) => {
    console.log(`Exporting ${type} PDF`);
    window.print(); // Placeholder for exporting PDF
  };

  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  return (
    <div className="flex flex-col items-center h-screen pt-10 px-4">
      <div className="flex justify-center w-full mb-1">
        <Datepicker
          containerClassName="w-full sm:w-72"
          value={dateValue}
          theme="light"
          inputClassName="input input-bordered w-full sm:w-72 text-center"
          popoverDirection="down-start"
          toggleClassName="invisible"
          onChange={handleDatePickerValueChange}
          showShortcuts={true}
          primaryColor="white"
        />
      </div>

      <TitleCard title="Top-Selling Product" topMargin="mt-2">
        <div className="flex w-full items-center justify-between flex-wrap">
          {/* Search Bar */}
          <div className="flex-grow sm:flex-grow-0 mr-4">
            <SearchBar className="input input-bordered h-10 w-full sm:w-96" />
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button
              onClick={() => console.log("Exporting Excel")}
              className="btn btn-outline btn-success flex items-center text-sm h-10"
            >
              <DocumentArrowDownIcon className="w-5 h-5 mr-1" />
              Excel
            </button>
            <button
              onClick={() => handlePrint("PDF")}
              className="btn btn-outline btn-error flex items-center text-sm h-10"
            >
              <DocumentTextIcon className="w-5 h-5 mr-1" />
              PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Code</th>
                <th>Product</th>
                <th>Total Sales</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {topsell.map((top, index) => (
                <tr key={index}>
                  <td>{top.code}</td>
                  <td>{top.name}</td>
                  <td>{top.totalSales}</td>
                  <td>${top.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageControl />
      </TitleCard>
    </div>
  );
}

export default TopSell;
