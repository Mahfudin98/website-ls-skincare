import { FiGrid, FiList } from "react-icons/fi";
import { BiSortAZ, BiSortZA } from "react-icons/bi";
export default function ProductSort(props: any) {
  const { setViews, sorts, setSorts } = props;
  function setGrid() {
    setViews("grid");
  }
  function setList() {
    setViews("list");
  }

  function sortTrue() {
    setSorts(true);
  }
  function sortFalse() {
    setSorts(false);
  }
  return (
    <div className="mb-3 flex justify-between items-center">
      <div className="hidden lg:flex gap-2">
        <button onClick={setGrid} className="p-2 bg-white shadow-md rounded-md">
          <FiGrid className="w-5 h-5" />
        </button>
        <button onClick={setList} className="p-2 bg-white shadow-md rounded-md">
          <FiList className="w-5 h-5" />
        </button>
      </div>
      {sorts && (
        <button
          onClick={sortFalse}
          className="p-2 bg-white shadow-md rounded-md flex items-center text-sm font-medium font-poppins text-brown-700"
        >
          Sort <BiSortAZ className="w-5 h-5 ml-2" />
        </button>
      )}
      {!sorts && (
        <button
          onClick={sortTrue}
          className="p-2 bg-white shadow-md rounded-md flex items-center text-sm font-medium font-poppins text-brown-700"
        >
          Sort <BiSortZA className="w-5 h-5 ml-2" />
        </button>
      )}
    </div>
  );
}
