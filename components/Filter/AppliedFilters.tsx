import { Filter } from "./";

export default function AppliedFilters(): JSX.Element {
  return (
    <div className="max-w-[1110px] mx-auto my-10 py-4 px-8 flex flex-row justify-between bg-white rounded-md shadow-xl shadow-primary/20">
      <div className="flex flex-row flex-wrap gap-4">
        <Filter label="Frontend" />
        <Filter label="CSS" />
        <Filter label="JavaScript" />
      </div>
      <button>
        <h3 className="text-primary text-sm font-bold hover:underline active:underline">
          Clear
        </h3>
      </button>
    </div>
  );
}
