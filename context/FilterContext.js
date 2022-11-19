import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({});

  return (
    <FilterContext.Provider
      value={[filters, setFilters]}
    >
      {children}
    </FilterContext.Provider>
  );
};
