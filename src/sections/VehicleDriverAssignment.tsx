import React, { useState } from "react";
import { Vehicle, Driver } from "../pages/DispatchRoutesPage";
import AddVehicleModal from "./AddVehicleModal";
import AddDriverModal from "./AddDriverModal";

interface Props {
  vehicles: Vehicle[];
  drivers: Driver[];
}

const VehicleDriverAssignment: React.FC<Props> = ({ vehicles, drivers }) => {
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [showDriverModal, setShowDriverModal] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Vehicle & Driver Assignment
        </h3>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowVehicleModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add New Vehicle
          </button>
          <button
            onClick={() => setShowDriverModal(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Add New Driver
          </button>
        </div>
      </div>

      {/* Filters UI (no logic) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 w-full">
          <option>Filter Vehicles by Type</option>
          <option>Heavy</option>
          <option>Medium</option>
          <option>Light</option>
        </select>
        <select className="border rounded-lg p-2 focus:ring-2 focus:ring-green-500 w-full">
          <option>Filter Drivers by Status</option>
          <option>Available</option>
          <option>On Duty</option>
          <option>Off Duty</option>
        </select>
      </div>

      {/* Vehicles & Drivers side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vehicles */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-gray-700">Available Vehicles</h4>
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="border rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">{vehicle.name}</p>
                  <p className="text-sm text-gray-500">Type: {vehicle.type}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-lg font-medium ${
                      vehicle.status === "Available" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {vehicle.status}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Assign Now
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drivers */}
        <div>
          <h4 className="text-lg font-medium mb-4 text-gray-700">Available Drivers</h4>
          <div className="space-y-4">
            {drivers.map((driver) => (
              <div
                key={driver.id}
                className="border rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">{driver.name}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-lg font-medium ${
                      driver.status === "Available" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {driver.status}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Assign Now
                    </button>
                    <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddVehicleModal open={showVehicleModal} onClose={() => setShowVehicleModal(false)} />
      <AddDriverModal open={showDriverModal} onClose={() => setShowDriverModal(false)} />
    </div>
  );
};

export default VehicleDriverAssignment;
