import { FiCalendar } from "react-icons/fi";

export default function DatePicker({
  label = "Expiration Date of Current Stroke Certification",
  value,
  onChange,
  name,
  required = false,
}) {
  return (
    <div className="flex flex-col w-full mb-4">

      <label className="text-base font-medium mb-3">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <div className="relative">

        <input
          type="date"
          value={value}
          name={name}
          onChange={onChange}
          className="
            w-full h-10
            px-3 pr-10
            border border-gray-300
            rounded-md
            text-sm
            text-gray-800
            focus:outline-none
            focus:ring-2 focus:ring-brandBlue
            focus:border-brandBlue
            appearance-none
            [appearance:none]
      [&::-webkit-calendar-picker-indicator]:opacity-0
          "
        />
        <FiCalendar className="absolute right-9 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
      </div>
    </div>
  );
}
