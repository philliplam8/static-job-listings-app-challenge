import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

export default function Tag(props: {
  label: string;
  labelType: string;
}): JSX.Element {
  const [filters, addFilter, removeFilter] = useContext(FilterContext);

  return (
    <button
      className="mt-4 md:mt-0 py-1.5 px-2 bg-lightGrayishCyan hover:bg-primary active:bg-primary text-primary hover:text-white active:text-white rounded-md text-md font-bold"
      onClick={() => addFilter(props.label, props.labelType)}
    >
      {props.label}
    </button>
  );
}
