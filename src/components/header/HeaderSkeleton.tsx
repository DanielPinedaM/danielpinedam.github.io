const SHIMMER: string =
  "absolute inset-y-0 left-0 w-full animate-shimmer bg-linear-to-r from-transparent via-white/10 to-transparent motion-reduce:animate-none";

const HeaderSkeleton = () => (
  <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-night">
    <span className={SHIMMER} />
  </div>
);

export default HeaderSkeleton;
