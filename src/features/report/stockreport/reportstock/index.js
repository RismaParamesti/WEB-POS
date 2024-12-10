import React, { useState } from "react";
import PageControl from "../../../../components/PageControl/PageControl";
import Search from "./component/Search";
import PDF from "./component/PDF";
import Excel from "./component/Excel";

const ReportPageStock = () => {
  const [activeTab, setActiveTab] = useState("Sales");

  // Data untuk tabel warehouse
  const warehouseData = [
    { name: "Warehouse 1", quantity: "51.00 pc" },
    { name: "Warehouse 2", quantity: "51.00 pc" },
  ];

  // Data untuk setiap tab
  const tabs = [
    { id: "Sales", label: "Sales" },
    { id: "Quotations", label: "Quotations" },
    { id: "Purchases", label: "Purchases" },
    { id: "SalesReturn", label: "Sales Return" },
    { id: "PurchasesReturn", label: "Purchases Return" },
    { id: "Transfer", label: "Transfer" },
    { id: "Adjustment", label: "Adjustment" },
  ];

  // Konten untuk setiap tab
  const renderContent = () => {
    switch (activeTab) {
      case "Sales":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <Excel />
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Customer",
                      "Warehouse",
                      "Product",
                      "Quantity",
                      "Subtotal",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Petter D Kenzo
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">28 pc</td>
                    <td className="py-3 px-4 text-sm bg-base-100">$700</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "Quotations":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <Excel />
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Customer",
                      "Warehouse",
                      "Product",
                      "Quantity",
                      "Subtotal",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Petter D Kenzo
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">28 pc</td>
                    <td className="py-3 px-4 text-sm bg-base-100">$700</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "Purchases":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <Excel />
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Supplier",
                      "Warehouse",
                      "Product",
                      "Quantity",
                      "Subtotal",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Fruits Supply
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">28 pc</td>
                    <td className="py-3 px-4 text-sm bg-base-100">$700</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "SalesReturn":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <Excel />
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Customer",
                      "Warehouse",
                      "Product",
                      "Quantity",
                      "Subtotal",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Petter D Kenzo
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">28 pc</td>
                    <td className="py-3 px-4 text-sm bg-base-100">$700</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "PurchasesReturn":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <Excel />
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Supplier",
                      "Warehouse",
                      "Product",
                      "Quantity",
                      "Subtotal",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Fruits Supply
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">28 pc</td>
                    <td className="py-3 px-4 text-sm bg-base-100">$700</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "Transfer":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Product",
                      "From Warehouse",
                      "To Warehouse",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">Warehouse 2</td>
                    <td className="py-3 px-4 text-sm bg-base-100">Warehouse 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "Adjustment":
        return (
          <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mb-6">
              <Search />
              <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 w-full sm:w-auto items-center sm:justify-end">
                <PDF />
              </div>
            </div>

            {/* Tabel */}
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-base-100">
                  <tr>
                    {[
                      "Date",
                      "Reference",
                      "Product",
                      "Warehouse",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-06</td>
                    <td className="py-3 px-4 text-sm bg-base-100">SL_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">Strawberry</td>
                    <td className="py-3 px-4 text-sm bg-base-100">Warehouse 2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center h-screen pt-10 px-4">
      {/* Header Section: Tabel Warehouse + Judul */}
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-start w-full max-w-6xl mb-6">
        {/* Tabel Warehouse */}
        <div className="w-full sm:w-auto overflow-x-auto">
          <table className="table-auto border border-primary rounded-lg text-sm sm:text-base w-full sm:w-auto">
            <thead className="bg-[#D9D9D9]">
              <tr>
                <th className="py-2 sm:py-4 px-3 sm:px-6 text-left font-semibold text-neutral">
                  Warehouse
                </th>
                <th className="py-2 sm:py-4 px-3 sm:px-6 text-left font-semibold text-neutral">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {warehouseData.map((item, index) => (
                <tr key={index} className="bg-base-100">
                  <td className="py-2 sm:py-4 px-3 sm:px-6 text-[#FFFFF]">
                    {item.name}
                  </td>
                  <td className="py-2 sm:py-4 px-3 sm:px-6 text-[#FFFFF]">
                    {item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Judul */}
        <div className="w-full sm:w-auto sm:ml-2 flex sm:justify-center justify-center mt-2 sm:mt-0">
          <h1 className="text-xl sm:text-3xl font-bold text-[#FFFFF] text-center sm:text-right">
            Strawberry
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full max-w-6xl p-6 sm:p-10 bg-base-100 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-2 sm:gap-1 mb-4 border-b-2 border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-2 px-4 rounded-t-lg ${
                activeTab === tab.id
                  ? "bg-white border-x border-t border-gray-300 -mb-[2px] text-purple-500 font-semibold"
                  : "bg-gray-100 text-gray-500 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Konten Tab */}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default ReportPageStock;
