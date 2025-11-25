import { useState } from "react";
import { FiCalendar, FiX } from "react-icons/fi";

export default function MultiDatePicker({
  label = "Dates of last twenty-five thrombolytic administrations",
  required = false,addDate, removeDate, flow, dates
}) {

  

  return (
    <div className="w-full mb-6">
      <label className="text-base font-medium mb-1 block">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div className="relative">
        <input
          type="date"
          value={""}
          name={flow}
          onChange={(e) => addDate(e)}
          placeholder="mm/dd/yyyy , mm/dd/yyyy"
          className="
            w-full h-10 px-3 pr-10 
            border border-gray-300 
            rounded-sm text-sm 
            placeholder-gray-400 
            focus:outline-none 
            focus:ring-2 focus:ring-brand
            focus:border-brand
            [appearance:none]
      [&::-webkit-calendar-picker-indicator]:opacity-0
          "
        />
        <FiCalendar className="absolute right-9 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
      </div>

      <div className="flex flex-wrap gap-3 mt-3">
        {dates.map((date, index) => (
          <div
            key={index}
            className="
              bg-brand text-white 
              px-3 py-1 rounded-md 
              flex items-center gap-2 text-sm
              shadow-sm
            "
          >
            {date}
            <button
              onClick={() => removeDate(index, flow)}
              className="bg-white hover:bg-white/40 rounded-full p-[2px]"
            >
              <FiX className="w-4 h-4 text-black" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
