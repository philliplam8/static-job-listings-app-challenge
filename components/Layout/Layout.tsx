// components/Layout.tsx

import Image from "next/image";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  function BackgroundHeader() {
    return (
      <div className="sticky -top-20 z-10">
        <Image
          src={`/images/bg-header-desktop.svg`}
          alt={"background-header"}
          width={1440}
          height={156}
          className={"min-w-screen w-full h-[156px] bg-primary hidden md:block"}
        />
        <Image
          src={`/images/bg-header-mobile.svg`}
          alt={"background-header"}
          width={375}
          height={156}
          className={"min-w-screen w-full h-[156px] bg-primary block md:hidden"}
        />
      </div>
    );
  }

  return (
    <>
      <main className="bg-background">
        <div className="min-h-screen h-full flex flex-col justify-between">
          <div>
            <BackgroundHeader />
            <div className="min-[1200px]:px-auto px-[23px] md:px-10">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
