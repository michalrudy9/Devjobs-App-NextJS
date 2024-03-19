import React from "react";

const SearchLabel: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center gap-x-2 bg-violet text-white rounded-full w-fit py-1 px-2 text-sm">
      {text === "on" ? "Full Time" : text}
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default SearchLabel;
