import cloneDeep from "lodash/cloneDeep";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

export default function Tag(props: { label: string }): JSX.Element {
  const [filters, setFilters] = useContext(FilterContext);

  const addFilter = (filter: string): void => {
    let tempFilters = cloneDeep(filters);
    tempFilters[filter] = true;
    setFilters(tempFilters);
  };

  const removeFilter = (filter: string): void => {
    let tempFilters = cloneDeep(filters);
    // Check if filter key exists in filters object
    if (!(filter in tempFilters)) {
      return;
    }
    // Toggle key value to be false to "remove" filter
    else {
      tempFilters[filter] = false;
    }
    setFilters(tempFilters);
  };

  return (
    <button
      className="mt-4 md:mt-0 py-1 px-2 bg-lightGrayishCyan hover:bg-primary active:bg-primary text-primary hover:text-white active:text-white rounded-md"
      onClick={() => addFilter(props.label)}
    >
      <h3 className=" text-sm font-bold">{props.label}</h3>
    </button>
  );
}
