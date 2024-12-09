import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import SearchBar from "../../../components/Input/SearchBar";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import Datepicker from "react-tailwindcss-datepicker";
import ReportPage from "./reportproduct/index"; 

const PRODUCTS = [
  {
    code: "123",
    name: "Avocat",
    totalSales: "40kg",
    totalAmount: 480,
  },
  {
    code: "456",
    name: "Banana",
    totalSales: "100kg",
    totalAmount: 600,
  },
];

function ProductReport() {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const handleWarehouseChange = (e) => setSelectedWarehouse(e.target.value);
  const warehouses = ["Warehouse 1", "Warehouse 2", "Warehouse 3"];

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  
  const [isReportPage, setIsReportPage] = useState(false); // Menentukan apakah menampilkan halaman ReportPage
  const navigateToReportPage = () => setIsReportPage(true); // Navigasi ke ReportPage

  if (isReportPage) {
    return <ReportPage />; // Tampilkan ReportPage jika state isReportPage true
  }

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

      <TitleCard title="Product Report" topMargin="mt-2">
        <div className="flex w-full items-center justify-between flex-wrap">
          {/* Search Bar */}
          <div className="flex-grow sm:flex-grow-0 mr-4">
            <SearchBar className="input input-bordered h-10 w-full sm:w-96" />
          </div>

          {/* Dropdown Warehouses */}
          <div className="flex justify-center flex-grow max-w-[200px] mx-4">
            <select
              value={selectedWarehouse}
              onChange={handleWarehouseChange}
              className="select select-bordered w-full h-10 text-center"
            >
              <option value="">Select Warehouse</option>
              {warehouses.map((warehouse, index) => (
                <option key={index} value={warehouse}>
                  {warehouse}
                </option>
              ))}
            </select>
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
              onClick={() => console.log("Exporting PDF")}
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product, index) => (
                <tr key={index}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.totalSales}</td>
                  <td>${product.totalAmount}</td>
                  <td>
                    <button
                      onClick={navigateToReportPage}
                      className="btn btn-outline border-[#7e7e7e] text-white bg-[#4338CA] text-xs px-5 py-4"
                    >
                      Reports
                    </button>
                  </td>
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

export default ProductReport;
