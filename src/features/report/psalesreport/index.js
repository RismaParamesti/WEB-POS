import { useState } from "react";
import {
  FunnelIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import PageControl from "../../../components/PageControl/PageControl";
import TitleCard from "../../../components/Cards/TitleCard";
import SearchBar from "../../../components/Input/SearchBar";
import FilterProductSales from "./FilterP/FilterPSales";
import Datepicker from "react-tailwindcss-datepicker";

const PSALES_DATA = [
  {
    date: "2024-11-06",
    reference: "SI_1117",
    customer: "Petter D Kenzo",
    warehouse: "Warehouse 1",
    product: "Strawberry",
    qtySold: 10,
    grandTotal: 10.00,
  },
];

function PSalesReport() {
  const [psalesData] = useState(PSALES_DATA);
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

      <TitleCard title="Product Sales Report" topMargin="mt-2">
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
                  "Customer",
                  "Warehouse",
                  "Product",
                  "Qty Sold",
                  "Grand Total",
                ].map((header, i) => (
                  <th key={i} className="border-b py-3 px-4 text-left text-sm font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {psalesData.map((sale, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{sale.date}</td>
                  <td className="py-3 px-4 text-sm">{sale.reference}</td>
                  <td className="py-3 px-4 text-sm">{sale.customer}</td>
                  <td className="py-3 px-4 text-sm">{sale.warehouse}</td>
                  <td className="py-3 px-4 text-sm">{sale.product}</td>
                  <td className="py-3 px-4 text-sm">{sale.qtySold}</td>
                  <td className="py-3 px-4 text-sm">{sale.grandTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageControl />
        <FilterProductSales isVisible={isFilterVisible} onClose={closeFilter} />
      </TitleCard>
    </div>
  );
}

export default PSalesReport;
