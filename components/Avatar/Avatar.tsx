/* eslint-disable @next/next/no-img-element */

export default function Avatar(props: { logo: string }): JSX.Element {
  return (
    <div className="w-14 h-14 md:w-[89px] md:h-full mt-2 md:mt-0 -top-[70px] md:top-0 absolute md:relative rounded-full object-fit">
      <img src={props.logo} alt={""} width={100} height={100} />
    </div>
  );
}
