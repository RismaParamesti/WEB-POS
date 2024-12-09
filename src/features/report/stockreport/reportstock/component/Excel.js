import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
function Excel() {
  const handleExportExcel = () => console.log("Export to Excel clicked");
  return (
    <button
      onClick={handleExportExcel}
      className="btn btn-outline btn-success flex items-center text-sm sm:w-auto w-full"
    >
      <DocumentArrowDownIcon className="w-5 h-5 mr-1" />
      Excel
    </button>
  );
}

export default Excel;
