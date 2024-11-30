import { useState } from "react";
import {
  FunnelIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import PageControl from "../../../../components/PageControl/PageControl";
import TitleCard from "../../../../components/Cards/TitleCard";
import SearchBar from "../../../../components/Input/SearchBar";
import FilterProduct from "./Filter/filter";
import Datepicker from "react-tailwindcss-datepicker";

const PRODUCT_SALES_DATA = [
  {
    date: "2024-08-11",
    reference: "SL_117",
    addedBy: "William",
    productName: "Pineapple",
    customer: "Thomas",
    warehouse: "Warehouse 1",
    quantity: 7,
    subtotal: 1200,
  },
  {
    date: "2024-08-12",
    reference: "SL_118",
    addedBy: "Emma",
    productName: "Avocado",
    customer: "Sarah",
    warehouse: "Warehouse 2",
    quantity: 12,
    subtotal: 1800,
  },
];

function ReportPage() {
  const [salesData] = useState(PRODUCT_SALES_DATA);
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  const handlePrint = (type) => {
    console.log(`Exporting ${type}`);
    window.print(); // Placeholder untuk export PDF
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const openFilter = () => setIsFilterVisible(true);
  const closeFilter = () => setIsFilterVisible(false);

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

      <TitleCard title="Sales" topMargin="mt-2">
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
                  "Added By",
                  "Product Name",
                  "Customer",
                  "Warehouse",
                  "Quantity",
                  "Subtotal",
                ].map((header, i) => (
                  <th
                    key={i}
                    className="border-b py-3 px-4 text-left text-sm font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{sale.date}</td>
                  <td className="py-3 px-4 text-sm">{sale.reference}</td>
                  <td className="py-3 px-4 text-sm">{sale.addedBy}</td>
                  <td className="py-3 px-4 text-sm">{sale.productName}</td>
                  <td className="py-3 px-4 text-sm">{sale.customer}</td>
                  <td className="py-3 px-4 text-sm">{sale.warehouse}</td>
                  <td className="py-3 px-4 text-sm">{sale.quantity}</td>
                  <td className="py-3 px-4 text-sm">${sale.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageControl />
        <FilterProduct isVisible={isFilterVisible} onClose={closeFilter} />
      </TitleCard>
    </div>
  );
}

export default ReportPage;
