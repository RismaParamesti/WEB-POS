import { useState } from "react";
import {
  FunnelIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import PageControl from "../../../components/PageControl/PageControl";
import TitleCard from "../../../components/Cards/TitleCard";
import SearchBar from "../../../components/Input/SearchBar";
import FilterPurchase from "./PUFilter/PurchaseFilter";
import Datepicker from "react-tailwindcss-datepicker";

const PURCHASE_DATA = [
  {
    date: "2024-10-26",
    reference: "SL_0005",
    supplier: "Thomas Edition",
    warehouse: "Warehouse 1",
    status: "Pending",
    grandTotal: 20.0,
    paid: 0.0,
    due: 20.0,
    paymentStatus: "Unpaid",
  },
];

function PurchaseReport() {
  const [purchaseData] = useState(PURCHASE_DATA);
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

      <TitleCard title="Purchase Report" topMargin="mt-2">
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
                  "Supplier",
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
              {purchaseData.map((purchase, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm">{purchase.date}</td>
                  <td className="py-3 px-4 text-sm">{purchase.reference}</td>
                  <td className="py-3 px-4 text-sm">{purchase.supplier}</td>
                  <td className="py-3 px-4 text-sm">{purchase.warehouse}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className="px-2 py-1 text-[#4338CA] border border-[#4338CA] rounded-md text-xs">
                      {purchase.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">{purchase.grandTotal}</td>
                  <td className="py-3 px-4 text-sm">{purchase.paid}</td>
                  <td className="py-3 px-4 text-sm">{purchase.due}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className="px-2 py-1 text-[#E98718] border border-[#E98718] rounded-md text-xs">
                      {purchase.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="bg-[#D9D9D9] font-semibold">
                <td className="py-3 px-4 text-neutral text-sm" colSpan={5}>
                  Total
                </td>
                <td className="py-3 px-4 text-neutral text-sm">20.00</td>
                <td className="py-3 px-4 text-neutral text-sm">0.00</td>
                <td className="py-3 px-4 text-neutral text-sm">20.00</td>
                <td className="py-3 px-4 text-neutral text-sm"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <PageControl />
        <FilterPurchase isVisible={isFilterVisible} onClose={closeFilter} />
      </TitleCard>
    </div>
  );
}

export default PurchaseReport;
