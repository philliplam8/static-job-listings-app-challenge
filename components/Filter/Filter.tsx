import Image from "next/image";

export default function Filter(props: { label: string }): JSX.Element {
  return (
    <div className="h-8 flex flex-row">
      <div className="h-full flex items-center py-1 px-2 bg-lightGrayishCyan text-primary rounded-l-md">
        <h3 className="text-sm font-bold">{props.label}</h3>
      </div>
      <button
        id={`btn-remove-filter-${props.label}`}
        className={
          "h-full p-2 my-auto flex justify-center items-center bg-primary hover:bg-veryDarkGrayishCyan active:bg-veryDarkGrayishCyan rounded-r-md"
        }
      >
        <Image
          src={"/images/icon-remove.svg"}
          alt={`Remove filter ${props.label}`}
          width={14}
          height={14}
        />
      </button>
    </div>
  );
}
