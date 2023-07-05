import { BiSearchAlt } from "react-icons/bi";
export default function ProductSearch(props: any) {
  const { search, setSearch } = props;
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };
  const handleClick = (param: string) => {
    setSearch(param);
  };
  return (
    <section className="container mx-auto my-5">
      <div className="flex flex-col justify-center w-full items-center">
        <div className="w-full max-w-lg mb-3">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-brown-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearchAlt className="w-6 h-6 text-brown-500 dark:text-brown-400" />
            </div>
            <input
              type="search"
              id="default-search"
              onChange={handleSearchChange}
              className="block w-full p-4 pl-10 text-sm text-brown-900 border border-brown-300 rounded-lg bg-brown-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Bright, Formen..."
              value={search}
              required
            />
          </div>
        </div>
        <div className="flex w-full md:max-w-lg mb-3 items-center">
          <h3 className="text-base font-poppins font-medium text-brown-900 mr-3">
            Related
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => handleClick("Booster")}
              type="button"
              className="text-sm font-poppins font-medium text-brown-700 bg-brown-50 px-2 py-1 rounded-md shadow-sm hover:bg-brown-100"
            >
              Booster
            </button>
            <button
              onClick={() => handleClick("Series")}
              type="button"
              className="text-sm font-poppins font-medium text-brown-700 bg-brown-50 px-2 py-1 rounded-md shadow-sm hover:bg-brown-100"
            >
              Series
            </button>
            <button
              onClick={() => handleClick("Acne")}
              type="button"
              className="text-sm font-poppins font-medium text-brown-700 bg-brown-50 px-2 py-1 rounded-md shadow-sm hover:bg-brown-100"
            >
              Acne
            </button>
            <button
              onClick={() => handleClick("Serum")}
              type="button"
              className="text-sm hidden md:block font-poppins font-medium text-brown-700 bg-brown-50 px-2 py-1 rounded-md shadow-sm hover:bg-brown-100"
            >
              Serum
            </button>
            <button
              onClick={() => handleClick("Formen")}
              type="button"
              className="text-sm font-poppins font-medium text-brown-700 bg-brown-50 px-2 py-1 rounded-md shadow-sm hover:bg-brown-100"
            >
              Formen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
