import React from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddVehicleModal: React.FC<Props> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Vehicle</h2>
        <form>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Vehicle Name</label>
            <input
              type="text"
              placeholder="Enter vehicle name"
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Vehicle Type</label>
            <select className="w-full border rounded px-3 py-2">
              <option value="">Select type</option>
              <option value="Heavy">Heavy</option>
              <option value="Medium">Medium</option>
              <option value="Light">Light</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border hover:bg-gray-100"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleModal;
