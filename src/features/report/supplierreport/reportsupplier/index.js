import React, { useState } from "react";
import {
  CreditCardIcon,
  InboxArrowDownIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import Search from "./component/Search";
import PDF from "./component/PDF";
import PageControl from "../../../../components/PageControl/PageControl";
import SupplierStats from "./component/supplierStats";

function ReportPageSupplier() {
  const [activeTab, setActiveTab] = useState("Sales"); // State untuk tab aktif

  const tabs = [
    { id: "Sales", label: "Sales" },
    { id: "Return", label: "Return" },
    { id: "Purchases Payments", label: "Purchases Payments" },
  ];

  const statsData = [
    {
      title: "Total Paid",
      value: "$10,540",
      icon: (
        <button className="btn btn-circle bg-primary text-white">
          <CreditCardIcon className="w-6 h-6" />
        </button>
      ),
      description: "↗︎ 2300 (22%)",
    },
    {
      title: "Purchase",
      value: "$7,545",
      icon: (
        <button className="btn btn-circle bg-primary text-white">
          <InboxArrowDownIcon className="w-6 h-6" />
        </button>
      ),
      description: "Current month",
    },
    {
      title: "Due",
      value: "713",
      icon: (
        <button className="btn btn-circle bg-primary text-white">
          <UserGroupIcon className="w-6 h-6" />
        </button>
      ),
      description: "50 in hot leads",
    },
    {
      title: "Total Amount",
      value: "$31,111",
      icon: (
        <button className="btn btn-circle bg-primary text-white">
          <PresentationChartBarIcon className="w-6 h-6" />
        </button>
      ),
      description: "↙ 300 (18%)",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Sales":
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
                      "Reference",
                      "Supplier",
                      "Warehouse",
                      "Grand Total",
                      "Paid",
                      "Due",
                      "Status",
                      "Payment Status",
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
                    <td className="py-3 px-4 text-sm bg-base-100">PR_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Fruit Supply
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">2726.00</td>
                    <td className="py-3 px-4 text-sm bg-base-100">2726.00</td>
                    <td className="py-3 px-4 text-sm bg-base-100">0.00</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      <span className="px-2 py-1 text-[#4338CA] border border-[#4338CA] rounded-md text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      <span className="px-2 py-1 text-green-500 border border-green-500 rounded-md text-xs">
                        Paid
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "Return":
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
                      "Reference",
                      "Supplier",
                      "Purchase Ref",
                      "Warehouse",
                      "Grand Total",
                      "Paid",
                      "Due",
                      "Status",
                      "Payment Status",
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
                    <td className="py-3 px-4 text-sm bg-base-100">PR_1117</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Fruit Supply
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100"> </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      Warehouse 1
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">2726.00</td>
                    <td className="py-3 px-4 text-sm bg-base-100">2726.00</td>
                    <td className="py-3 px-4 text-sm bg-base-100">0.00</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      <span className="px-2 py-1 text-[#4338CA] border border-[#4338CA] rounded-md text-xs">
                        Pending
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      <span className="px-2 py-1 text-green-500 border border-green-500 rounded-md text-xs">
                        Paid
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <PageControl />
          </div>
        );
      case "Purchases Payments":
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
                    {["Date", "Reference", "Purchase", "Paid by", "Amount"].map(
                      (header, i) => (
                        <th
                          key={i}
                          className="border-b py-3 px-4 text-left text-sm font-semibold bg-base-100"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {/* Replace with dynamic data */}
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm bg-base-100">2024-11-07</td>
                    <td className="py-3 px-4 text-sm bg-base-100">
                      INV/PR_1117
                    </td>
                    <td className="py-3 px-4 text-sm bg-base-100">PR_1115</td>
                    <td className="py-3 px-4 text-sm bg-base-100">Cash</td>
                    <td className="py-3 px-4 text-sm bg-base-100">2000.00</td>
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
      <div className="w-full max-w-6xl space-y-6">
        {/* Summary Cards */}
        <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
          {statsData.map((d, k) => {
            return <SupplierStats key={k} {...d} colorIndex={k} />;
          })}
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
    </div>
  );
}

export default ReportPageSupplier;
