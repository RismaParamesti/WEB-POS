import { useState } from "react";

function PageControl() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = 100;

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset ke halaman pertama ketika rows per page berubah
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > Math.ceil(totalItems / rowsPerPage)) return;
    setCurrentPage(newPage);
  };

  const startItem = (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="flex flex-wrap justify-between items-center mt-4 gap-4">
      {/* Rows Per Page */}
      <div className="w-full sm:w-auto">
        <span className="flex items-center gap-2 text-[10px] sm:text-[14px]">
          Rows Per Page:
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="select select-bordered select-sm w-20 text-[10px] sm:text-[14px]"
          >
            {[10, 20, 30, 40].map((rows) => (
              <option key={rows} value={rows}>
                {rows}
              </option>
            ))}
          </select>
        </span>
      </div>

      {/* Pagination */}
      <div className="w-full sm:w-auto flex justify-between sm:justify-center items-center gap-4">
        <span className="text-[10px] sm:text-[14px]">
          {startItem} - {endItem} of {totalItems}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-outline btn-sm text-[10px] sm:text-[14px]"
          >
            {"<"}
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalItems / rowsPerPage)}
            className="btn btn-outline btn-sm text-[10px] sm:text-[14px]"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageControl;
