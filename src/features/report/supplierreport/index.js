import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import SearchBar from "../../../components/Input/SearchBar";
import { DocumentArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline";
import ReportPageSupplier from "./reportsupplier/index";

const SUPPLIER = [
  {
    SupplierName: "IT Supply",
    Phone: "08123456789",
    Purchases: "3",
    TotalAmount: "118.00",
    Paid: "118.00",
    TotalPurchaseDue: 0.0,
    TotalPurchaseReturnDue: 0.0,
  },
  {
    SupplierName: "IT Supply",
    Phone: "08123456789",
    Purchases: "2",
    TotalAmount: "20.00",
    Paid: "18.00",
    TotalPurchaseDue: 2.0,
    TotalPurchaseReturnDue: 0.0,
  },
];

function SupplierReport() {
  const [supplierr] = useState(SUPPLIER);

  const handlePrint = (type) => {
    console.log(`Exporting ${type} PDF`);
    window.print(); // Placeholder for exporting PDF
  };

  const [isReportPageStock, setIsReportPageStock] = useState(false); // Menentukan apakah menampilkan halaman ReportPage
  const navigateToReportPageStock = () => setIsReportPageStock(true); // Navigasi ke ReportPage

  if (isReportPageStock) {
    return <ReportPageSupplier />; // Tampilkan ReportPage jika state isReportPage true
  }

  return (
    <div className="flex flex-col items-center h-screen pt-10 px-4">
      <TitleCard title="Supplier Report" topMargin="mt-2">
        <div className="flex w-full items-center justify-between flex-wrap">
          {/* Search Bar */}
          <div className="flex-grow sm:flex-grow-0 mr-4">
            <SearchBar className="input input-bordered h-10 w-full sm:w-96" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Supplier Name</th>
                <th>Phone</th>
                <th>Purchases</th>
                <th>Total Amount</th>
                <th>Paid</th>
                <th>Total Purchases Due</th>
                <th>Total Purchases Return Due</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {supplierr.map((supplier, index) => (
                <tr key={index}>
                  <td>{supplier.SupplierName}</td>
                  <td>{supplier.Phone}</td>
                  <td>{supplier.Purchases}</td>
                  <td>{supplier.TotalAmount}</td>
                  <td>{supplier.Paid}</td>
                  <td>{supplier.TotalPurchaseDue}</td>
                  <td>{supplier.TotalPurchaseReturnDue}</td>
                  <td>
                    {/* Buttons Container */}
                    <div className="flex space-x-2">
                      {/* PDF Button */}
                      <button
                        onClick={() => handlePrint("PDF")}
                        className="p-2 bg-base-100 rounded"
                      >
                        <DocumentArrowDownIcon className="w-5 h-5 text-[#F62626]" />
                      </button>
                      {/* View Button */}
                      <button
                        className="p-2 bg-base-100 rounded"
                        onClick={navigateToReportPageStock}
                      >
                        <EyeIcon className="w-5 h-5 text-[#4880FF]" />
                      </button>
                    </div>
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

export default SupplierReport;
