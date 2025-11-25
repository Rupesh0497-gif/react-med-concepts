import { useState } from "react";
import { FiChevronDown, FiX } from "react-icons/fi";

const optionsList = [
  "Action1",
  "Action2",
  "Action3",
  "Action4",
  "Action5",
];

export default function MultiSelect({ label = "Select Standard(s)" , toggleSelect, selected, remove}) {
  const [open, setOpen] = useState(false);

  


  return (
    <div className="w-full relative">
      <div
        onClick={() => setOpen(!open)}
        className="
          border border-gray-300 rounded-md bg-white h-10
          pl-3 pr-10 flex items-center cursor-pointer
          focus-within:ring-2 focus-within:ring-brandBlue
          focus-within:border-brandBlue
        "
      >
        <span className="text-gray-500 text-sm">
          Select Standard(s)
        </span>

        <FiChevronDown className="absolute right-3 text-gray-500" />
      </div>

      {open && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
          {optionsList.map((option) => (
            <div
              key={option}
              onClick={() => toggleSelect(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {option}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {selected.map((item) => (
          <div
            key={item}
            className="flex items-center gap-1 px-3 py-1 border border-blue-600 text-blue-600 rounded-sm text-sm"
          >
            {item}
            <button onClick={() => remove(item)}>
              <FiX className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
