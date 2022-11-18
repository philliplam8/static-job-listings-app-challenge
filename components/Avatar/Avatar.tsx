import Image from "next/image";

export default function Avatar(props: { logo: string }): JSX.Element {
  return (
    <div className="w-14 h-14 md:w-[89px] md:h-full mt-2 md:mt-0 -top-[70px] md:top-0 absolute md:relative rounded-[100%] object-fit">
      <Image src={props.logo} alt={""} width={100} height={100} />
    </div>
  );
}
