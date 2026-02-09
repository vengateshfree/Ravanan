import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({
  services,
  formData,
  setFormData,
  thisOne, // field name like "service"
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 👉 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Selected value */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
              // className="w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
             
        className="
          w-full flex items-center justify-between
          px-4 py-3
         w-full px-5 py-4 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors
        "
      >
        <span className={formData[thisOne] ? "text-gray-800" : "text-gray-500"}>
          {/* {formData[thisOne] || "Select a service"} */}
          {thisOne == "service"  ? "Select a service" : "Select a location"}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform text-gray-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="
          absolute z-50 mt-2 w-full
          bg-black
          text-white
          border border-gray-200
          rounded-xl
          shadow-lg
          overflow-hidden
        ">
          {services.map((service) => (
            <li
              key={service}
              onClick={() => {
                setFormData({ ...formData, [thisOne]: service });
                setOpen(false);
              }}
              className="
                px-4 py-3
                cursor-pointer
                 hover:text-yellow-400
                transition
                
              "
            >
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
