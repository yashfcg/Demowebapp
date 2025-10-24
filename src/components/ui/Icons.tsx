export function ChevronDownIcon({
  color = "black",
  strokeWidth = "2",
}: {
  color: string;
  strokeWidth: string;
}) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 9L13 1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ChevronUpIcon({
  color = "black",
  strokeWidth = "2",
}: {
  color: string;
  strokeWidth: string;
}) {
  return (
    <svg
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="8"
    >
      <path
        d="M13 9L7 1L1 9"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SearchIcon({ color = "black" }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.375 14.5H15.3875L15.0375 14.1625C16.2625 12.7375 17 10.8875 17 8.875C17 4.3875 13.3625 0.75 8.875 0.75C4.3875 0.75 0.75 4.3875 0.75 8.875C0.75 13.3625 4.3875 17 8.875 17C10.8875 17 12.7375 16.2625 14.1625 15.0375L14.5 15.3875V16.375L20.75 22.6125L22.6125 20.75L16.375 14.5ZM8.875 14.5C5.7625 14.5 3.25 11.9875 3.25 8.875C3.25 5.7625 5.7625 3.25 8.875 3.25C11.9875 3.25 14.5 5.7625 14.5 8.875C14.5 11.9875 11.9875 14.5 8.875 14.5Z"
        fill={color}
      />
    </svg>
  );
}

export function HouseIcon({ color = "black" }: { color: string }) {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z" fill={color} />
    </svg>
  );
}

export function PhoneIcon({
  color = "black",
  size = "size-5",
}: {
  color: string;
  size: string;
}) {
  return (
    <svg
      className={`${size}`}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
        fill={color}
      />
    </svg>
  );
}
export function MailIcon({
  color = "black",
  size = "size-5",
}: {
  color: string;
  size: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={`${size}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function QuoteIcon({}) {
  return (
    <svg
      width="123"
      height="93"
      viewBox="0 0 123 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M106.97 0H84.8899C76.3899 0 69.4399 6.95 69.4399 15.45C69.4399 47.24 61.3099 82.16 100.28 92.13C117.94 96.64 122.54 77.2 103.76 75.86C92.3099 75.04 90.0699 67.64 89.7199 56.46H107.43C115.93 56.45 122.88 49.5 122.88 41.01V15.91C122.88 7.16 115.72 0 106.97 0ZM38.2299 0H16.1499C7.64988 0 0.699883 6.95 0.699883 15.45C0.699883 47.24 -7.43011 82.16 31.5399 92.13C49.1899 96.64 53.7899 77.2 35.0199 75.86C23.5699 75.04 21.3299 67.64 20.9799 56.46H38.6999C47.1999 56.46 54.1499 49.51 54.1499 41.01V15.91C54.1399 7.16 46.9799 0 38.2299 0Z"
        fill="white"
        fillOpacity="0.1"
      />
    </svg>
  );
}

export function ChevronRightIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
export function HamburgerIcon({}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
}

export function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export function RightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}
export function LefttIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
}

export function BulbIcon({
  color = "black",
  size = "size-5",
}: {
  color: string;
  size: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  );
}

export function LinkedInIcon({ size = "size-5" }: { size: string }) {
  return (
    <svg
      className={size}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 382 382"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "#0077B7" }}
          d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 
         C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 
         H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 
         c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 
         s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 
         c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 
         c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 
         c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 
         L341.91,330.654L341.91,330.654z"
        />
      </g>
    </svg>
  );
}
