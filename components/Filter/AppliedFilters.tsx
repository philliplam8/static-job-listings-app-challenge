import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import { Filter } from "./";

export default function AppliedFilters(): JSX.Element {
  const [filters, addFilter, removeFilter, removeAll] =
    useContext(FilterContext);

  return (
    <div
      className={`max-w-[1110px] mx-auto mt-10 -mb-20 py-4 px-8 relative -top-20 flex flex-row justify-between gap-2 bg-white rounded-md shadow-xl shadow-primary/20 ${
        Object.keys(filters).length ? "visible" : "invisible"
      }`}
    >
      <div className="flex flex-row flex-wrap gap-4">
        {Object.keys(filters).map((filter) => {
          return <Filter key={filter} label={filter} />;
        })}
      </div>
      <button onClick={() => removeAll()}>
        <h3 className="text-sm font-bold text-darkGrayishCyan hover:underline hover:text-primary active:text-primary active:underline">
          Clear
        </h3>
      </button>
    </div>
  );
}
