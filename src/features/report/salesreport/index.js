import { useState } from "react";
import {
  FunnelIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import PageControl from "../../../components/PageControl/PageControl";
import TitleCard from "../../../components/Cards/TitleCard";
import SearchBar from "../../../components/Input/SearchBar";
import FilterSales from "./Filter/FilterSales";
import Datepicker from "react-tailwindcss-datepicker";

const SALES_DATA = [
  {
    date: "2024-10-26",
    reference: "SL_0005",
    seller: "Petter Kenon",
    customer: "Thomas Edition",
    warehouse: "Warehouse 1",
    status: "Completed",
    grandTotal: 1527.0,
    paid: 1527.0,
    due: 0.0,
    paymentStatus: "Paid",
  },
];

function SalesReport() {
  const [salesData] = useState(SALES_DATA);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const openFilter = () => setIsFilterVisible(true);
  const closeFilter = () => setIsFilterVisible(false);
  const handlePrint = (type) => console.log(`Exporting ${type} PDF`);

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

      <TitleCard title="Sales Report" topMargin="mt-2" >
        <div className="flex w-full items-center justify-between flex-wrap">
          {/* Search Bar */}
          <div className="flex-grow mr-4">
            <SearchBar className="input input-bordered h-10 w-full sm:w-96" />
          </div>
          {/* Buttons */}
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button
              onClick={openFilter}
              className="btn btn-outline btn-primary flex items-center text-sm h-10"
            >
              <FunnelIcon className="w-5 h-5 mr-1" />
              Filter
            </button>
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
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                {[
                  "Date",
                  "Reference",
                  "Seller",
                  "Customer",
                  "Warehouse",
                  "Status",
                  "Grand Total",
                  "Paid",
                  "Due",
                  "Payment Status",
                ].map((header, i) => (
                  <th key={i} className="border-b py-3 px-4 text-left text-sm font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 text-sm">{sale.date}</td>
                  <td className="py-3 px-4 text-sm">{sale.reference}</td>
                  <td className="py-3 px-4 text-sm">{sale.seller}</td>
                  <td className="py-3 px-4 text-sm">{sale.customer}</td>
                  <td className="py-3 px-4 text-sm">{sale.warehouse}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${sale.status === "Completed"
                          ? "text-green-500 border border-green-500"
                          : "text-red-500 border border-red-500"
                        }`}
                    >
                      {sale.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">{sale.grandTotal}</td>
                  <td className="py-3 px-4 text-sm">{sale.paid}</td>
                  <td className="py-3 px-4 text-sm">{sale.due}</td>
                  <td className="py-3 px-4 text-sm">
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${sale.paymentStatus === "Paid"
                          ? "text-green-500 border border-green-500"
                          : "text-red-500 border border-red-500"
                        }`}
                    >
                      {sale.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageControl />
        <FilterSales isVisible={isFilterVisible} onClose={closeFilter} />
      </TitleCard>
    </div>
  );
}

export default SalesReport;
