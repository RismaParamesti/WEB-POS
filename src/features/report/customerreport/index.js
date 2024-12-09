import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import SearchBar from "../../../components/Input/SearchBar";
import ReportPageCustomer from "./reportcustomer/index";
import { DocumentArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline";

const CUSTOMER = [
  {
    Name: "Petter Kenzo",
    Phone: "08123456789",
    Totalsales: "3",
    Amount: "18.00",
    Paid: "18.00",
    TotalSaleDue: "20.0",
    TotalSellReturnDue: 0.0,
  },
];

function CustomerReport() {
  const [customerr] = useState(CUSTOMER);

  const handlePrint = (type) => {
    console.log(`Exporting ${type} PDF`);
    window.print(); // Placeholder for exporting PDF
  };

  const [isReportPageStock, setIsReportPageCustomer] = useState(false); // Menentukan apakah menampilkan halaman ReportPage
  const navigateToReportPageCustomer = () => setIsReportPageCustomer(true); // Navigasi ke ReportPage

  if (isReportPageStock) {
    return <ReportPageCustomer />; // Tampilkan ReportPage jika state isReportPage true
  }

  return (
    <div className="flex flex-col items-center h-screen pt-10 px-4">
      <TitleCard title="Customer Report" topMargin="mt-2">
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
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Total Sales</th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Total Sale Due</th>
                <th>Total Sell Return Due</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customerr.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.Name}</td>
                  <td>{customer.Phone}</td>
                  <td>{customer.Totalsales}</td>
                  <td>{customer.Amount}</td>
                  <td>{customer.Paid}</td>
                  <td>{customer.TotalSaleDue}</td>
                  <td>{customer.TotalSellReturnDue}</td>
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
                        onClick={navigateToReportPageCustomer}
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

export default CustomerReport;
