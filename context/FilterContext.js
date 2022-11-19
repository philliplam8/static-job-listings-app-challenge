import { createContext, useState } from "react";
import cloneDeep from "lodash/cloneDeep";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({});

  const addFilter = (filter) => {
    let tempFilters = cloneDeep(filters);
    tempFilters[filter] = true;
    setFilters(tempFilters);
  };

  const removeFilter = (filter) => {
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
    <FilterContext.Provider
      value={[filters, addFilter, removeFilter]}
    >
      {children}
    </FilterContext.Provider>
  );
};
