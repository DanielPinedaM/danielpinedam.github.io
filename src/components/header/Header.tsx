import { useEffect, useState } from "react";
import HeaderSkeleton from "@/components/header/HeaderSkeleton";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/MenuButton";
import ButtonThemeToggle from "@/components/theme-toggle/ButtonThemeToggle";
import { useTypewriter } from "@/hooks/useTypewriter";

const VIDEO: string = "absolute top-0 left-0 h-dvh w-full object-cover";

const WORDS: string[] = [
  "ingeniero de sistemas",
  "desarrollador frontend y móvil",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDesktopViewport, setIsDesktopViewport] = useState<boolean | null>(null);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);

  const isVideoLoading: boolean = isDesktopViewport === null || !isVideoReady;

  const typedText: string = useTypewriter(WORDS, 2000);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    /** mismo breakpoint xsm que esta en src/css/tailwind/theme.css */
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 30rem)");

    const syncViewport = (): void => {
      setIsVideoReady(false);
      setIsDesktopViewport(mediaQuery.matches);
    };

    syncViewport();

    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  return (
    <header
      className={`relative flex h-dvh w-full items-center justify-center text-white ${
        isVideoLoading ? "cursor-wait" : ""
      }`}
    >
      <MenuButton
        isOpen={isMenuOpen}
        onToggle={() =>
          setIsMenuOpen((previousIsMenuOpen: boolean) => !previousIsMenuOpen)
        }
      />

      <ButtonThemeToggle />

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="absolute top-0 left-0 z-0 block h-dvh w-full overflow-hidden bg-night">
        {isDesktopViewport !== null && (
          <video
            key={String(isDesktopViewport)}
            autoPlay
            loop
            playsInline
            muted
            aria-hidden="true"
            src={
              isDesktopViewport
                ? "/assets/video/background_video_desktop.mp4"
                : "/assets/video/background_video_mobile.mp4"
            }
            onLoadedData={() => setIsVideoReady(true)}
            onError={() => setIsVideoReady(true)}
            className={VIDEO}
          />
        )}

        {isVideoLoading && <HeaderSkeleton />}
      </div>

      <div className="absolute top-0 left-0 z-1 flex h-dvh w-full flex-col flex-nowrap items-center justify-center bg-white/15 text-center">
        <h1 className="text-hero font-extrabold">
          Yo soy...{" "}
          <span className="block cursor-text text-hero leading-[1.9] text-white">
            <span className="border-r-[0.08em] border-solid border-white pr-px text-hero">
              {typedText}
            </span>
          </span>
        </h1>

        <a
          href="#contactame"
          className="relative z-999 mt-[5dvh] inline-flex cursor-pointer items-center justify-center rounded-[0.625rem] border-2 border-solid border-white px-7 py-3 text-step-1 font-medium text-white transition-[background-color,color,scale] duration-200 ease-[ease] hover:bg-white hover:text-night active:scale-[0.97] active:bg-white active:text-night motion-reduce:transition-none"
        >
          <span>Contáctame</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
