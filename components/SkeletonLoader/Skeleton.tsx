function SkeletonAvatar(): JSX.Element {
  return (
    <div className="relative">
      <div className="bg-slate-300 w-14 h-14 md:w-[89px] md:h-[89px] mt-0 -top-[70px] md:top-0 absolute md:relative rounded-full"></div>
    </div>
  );
}

export default function Skeleton(): JSX.Element {
  return (
    <div className="max-w-[1110px] w-full h-[237px] md:h-[137px] px-4 py-10 md:py-5 mx-auto my-11 bg-white border border-lightGrayishCyan shadow-xl rounded-md">
      <div className="animate-pulse flex space-x-4">
        <SkeletonAvatar />
        <div className="flex-1 space-y-8 py-1">
          <div className="h-3 bg-slate-300 rounded-md relative top-5 md:top-0"></div>
          <div className="grid-cols-3 gap-4 grid md:hidden">
            <div className="h-3 bg-slate-300 rounded-md col-span-1"></div>
            <div className="h-3 bg-slate-300 rounded-md col-span-2"></div>
          </div>
          <div className="space-y-3 md:space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-3 bg-slate-300 rounded-md col-span-2"></div>
              <div className="h-3 bg-slate-300 rounded-md col-span-1"></div>
            </div>
            <div className="h-3 bg-slate-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
