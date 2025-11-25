import { useState } from "react";

export default function AccordionSection({
  title,
  children,
  editView,
  viewMode,
}) {
  const [open, setOpen] = useState(true);
  const [editing, setEditing] = useState(false);

  return (
    <div className="border border-gray-400 shadow-sm rounded-md mb-4 overflow-hidden bg-white">
      
      <div
        className="bg-brand text-white px-4 py-3 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg">{title}</span>

        {!editing && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditing(true);
            }}
            className="underline text-sm"
          >
            Edit
          </button>
        )}
      </div>

      {open && (
        <div className="p-5">
          {editing ? (
            <div>
              {editView}

              <div className="flex justify-end mt-4 gap-2">
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 border rounded text-brandBlue border-brandBlue"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 bg-brandBlue text-white rounded"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div>{viewMode}</div>
          )}
        </div>
      )}
    </div>
  );
}
