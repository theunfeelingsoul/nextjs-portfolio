// components/Logo.js
export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 60"
      className="h-10 w-auto text-blue-600"
      fill="currentColor"
    >
      {/* V */}
      <path d="M10 10 L30 50 L50 10 Z" />
      {/* N */}
      <path d="M70 50 L70 10 L110 50 L110 10" />
    </svg>
  );
}
