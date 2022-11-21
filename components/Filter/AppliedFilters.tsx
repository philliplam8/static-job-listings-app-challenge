import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { Filter } from "./";

export default function AppliedFilters(): JSX.Element {
  const [filters, addFilter, removeFilter, removeAll] =
    useContext(FilterContext);

  return (
    <div
      className={`max-w-[1110px] min-h-16 mx-auto py-4 px-6 mt-10 -mb-20 relative -top-20 flex flex-row justify-between gap-2 bg-white rounded-[5px] shadow-xl shadow-primary/20 ${
        Object.keys(filters).length ? "visible" : "h-16 invisible"
      }`}
    >
      <div className="flex flex-row flex-wrap gap-4">
        {Object.keys(filters).map((filter) => {
          return <Filter key={filter} label={filter} />;
        })}
      </div>
      <button onClick={() => removeAll()}>
        <h3 className="text-md font-bold text-darkGrayishCyan hover:underline hover:text-primary active:text-primary active:underline">
          Clear
        </h3>
      </button>
    </div>
  );
}
