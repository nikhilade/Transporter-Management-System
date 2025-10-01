import React from "react";
import { Vehicle, Driver } from "../pages/DispatchRoutesPage";

interface Props {
  vehicles: Vehicle[];
  drivers: Driver[];
}

const VehicleDriverAssignment: React.FC<Props> = ({ vehicles, drivers }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-lg font-semibold mb-4">Vehicle & Driver Assignment</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium mb-3">Available Vehicles</h4>
        <div className="space-y-3">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="border rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{vehicle.name}</span>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    vehicle.status === "Available"
                      ? "bg-green-200"
                      : "bg-yellow-200"
                  }`}
                >
                  {vehicle.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">Type: {vehicle.type}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-3">Available Drivers</h4>
        <div className="space-y-3">
          {drivers.map((driver) => (
            <div key={driver.id} className="border rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">{driver.name}</span>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    driver.status === "Available"
                      ? "bg-green-200"
                      : "bg-yellow-200"
                  }`}
                >
                  {driver.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default VehicleDriverAssignment;
