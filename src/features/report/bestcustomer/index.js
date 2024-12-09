import { useState } from "react";
import TitleCard from "../../../components/Cards/TitleCard";
import PageControl from "../../../components/PageControl/PageControl";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const CUSTOMERS = [
  {
    name: "Aku",
    phone: "08123456789",
    email: "aku@gmail.com",
    totalSales: 2,
    totalAmount: 3430,
  },
  {
    name: "Budi",
    phone: "08129876543",
    email: "budi@example.com",
    totalSales: 5,
    totalAmount: 5700,
  },
  {
    name: "Citra",
    phone: "08129998877",
    email: "citra@example.com",
    totalSales: 3,
    totalAmount: 2500,
  },
];

function BestCustomer() {
  const [customers] = useState(CUSTOMERS);

  const handlePrint = (type) => {
    console.log(`Exporting ${type} PDF`);
    window.print(); // Placeholder untuk ekspor PDF
  };

  return (
    <>
      <TitleCard title="Best Customer" topMargin="mt-2">
        <div className="flex justify-end space-x-2 mt-2 sm:mt-0 ml-auto">
          <button
            onClick={() => handlePrint("PDF")}
            className="btn btn-outline btn-error flex items-center text-sm h-10"
          >
            <DocumentTextIcon className="w-5 h-5 mr-1" />
            PDF
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto w-full mt-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Total Sales</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.totalSales}</td>
                  <td>${customer.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageControl />
      </TitleCard>
    </>
  );
}

export default BestCustomer;
