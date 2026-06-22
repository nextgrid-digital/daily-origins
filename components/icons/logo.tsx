import clsx from "clsx";

// Aurevia monogram — an abstract leaf/droplet "A" mark.
export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME || "Aurevia"} logo`}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
      className={clsx("h-4 w-4", props.className)}
    >
      <path
        d="M16 3C16 3 7 11 7 19a9 9 0 0 0 18 0c0-8-9-16-9-16Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16 11c0 0-4.5 4-4.5 8a4.5 4.5 0 0 0 9 0c0-4-4.5-8-4.5-8Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
    </svg>
  );
}
