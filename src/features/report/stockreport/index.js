import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import SearchBar from "../../../components/Input/SearchBar";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import ReportPageStock from "./reportstock/index"; 

const STOCK = [
  {
    code: "87654321",
    name: "Strawberry",
    Category: "Shoes",
    CurrentStock: "102 pc",
  },
];

function StockReport() {
  const [stock] = useState(STOCK);

  const handlePrint = (type) => {
    console.log(`Exporting ${type} PDF`);
    window.print(); // Placeholder for exporting PDF
  };

  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const handleWarehouseChange = (e) => setSelectedWarehouse(e.target.value);
  const warehouses = ["Warehouse 1", "Warehouse 2", "Warehouse 3"];

  const [isReportPageStock, setIsReportPageStock] = useState(false); // Menentukan apakah menampilkan halaman ReportPage
  const navigateToReportPageStock = () => setIsReportPageStock(true); // Navigasi ke ReportPage

  if (isReportPageStock) {
    return <ReportPageStock />; // Tampilkan ReportPage jika state isReportPage true
  }
  return (
    <div className="flex flex-col items-center h-screen pt-10 px-4">
      <TitleCard title="Stock Report" topMargin="mt-2">
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
                <th>Category</th>
                <th>Current Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stock.map((stok, index) => (
                <tr key={index}>
                  <td>{stok.code}</td>
                  <td>{stok.name}</td>
                  <td>{stok.Category}</td>
                  <td>{stok.CurrentStock}</td>
                  <td>
                    <button
                      onClick={navigateToReportPageStock}
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

export default StockReport;
