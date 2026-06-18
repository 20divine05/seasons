import logo from "@/assets/seasons-landscapers-logo.png";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="inline-flex shrink-0 items-center">
      <img
        src={logo}
        alt="Seasons Landscapers"
        className={`block object-contain ${
          compact
            ? "h-7 w-20 sm:h-8 sm:w-28 lg:h-8 lg:w-36"
            : "h-14 w-44 sm:h-20 sm:w-64"
        }`}
      />
    </span>
  );
}