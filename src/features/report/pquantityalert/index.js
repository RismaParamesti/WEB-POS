import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import {
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

const QTY = [
  {
    code: "87654321",
    name: "Strawberry",
    warehouse: "Warehouse 2",
    Quantity: "10",
    AlertQuantity: "10",
  },
];

function QtyAlert() {
  const [qty] = useState(QTY);

  const handlePrint = (type) => {
    console.log(`Exporting ${type} PDF`);
    window.print(); // Placeholder for exporting PDF
  };

  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const handleWarehouseChange = (e) => setSelectedWarehouse(e.target.value);
  const warehouses = ["Warehouse 1", "Warehouse 2", "Warehouse 3"];

  return (
    <div className="flex flex-col items-center h-screen pt-10 px-4">
      <TitleCard title="Product Quantity Alert" topMargin="mt-2">
        <div className="flex w-full items-center justify-between flex-wrap">
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
                <th>Warehouse</th>
                <th>Quantity</th>
                <th>Alert Quantity</th>
              </tr>
            </thead>
            <tbody>
              {qty.map((qtyalert, index) => (
                <tr key={index}>
                  <td>{qtyalert.code}</td>
                  <td>{qtyalert.name}</td>
                  <td>{qtyalert.warehouse}</td>
                  <td>{qtyalert.Quantity}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-md font-bold text-[#F62626] border-[1px] border-[#F62626]`}
                    >
                      {qtyalert.AlertQuantity}
                    </span>
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

export default QtyAlert;
