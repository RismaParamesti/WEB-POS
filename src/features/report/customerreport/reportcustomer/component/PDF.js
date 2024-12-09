import {DocumentTextIcon} from "@heroicons/react/24/outline";
function PDF() {
  const handleExportPDF = () => console.log("Export to PDF clicked");
  return (
    <button
      onClick={handleExportPDF}
      className="btn btn-outline btn-error flex items-center text-sm sm:w-auto w-full"
    >
      <DocumentTextIcon className="w-5 h-5 mr-1" />
      PDF
    </button>
  );
}

export default PDF;
