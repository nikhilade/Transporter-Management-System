import React, { useState } from "react";
import { Route, Vehicle, Driver } from "../pages/DispatchRoutesPage";

interface Props {
  routes: Route[];
  setRoutes: React.Dispatch<React.SetStateAction<Route[]>>;
  vehicles: Vehicle[];
  drivers: Driver[];
}

const RoutePlanning: React.FC<Props> = ({ routes, setRoutes, vehicles, drivers }) => {
  const [showRouteForm, setShowRouteForm] = useState(false);
  const [routeForm, setRouteForm] = useState<Omit<Route, "id" | "status" | "createdAt">>({
    name: "",
    startPoint: "",
    endPoint: "",
    departureTime: "",
    arrivalTime: "",
    vehicleId: "",
    driverId: "",
    stops: [],
  });

  // Filter UI states (no logic yet)
  const [statusFilter, setStatusFilter] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [driverFilter, setDriverFilter] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoute: Route = {
      id: routes.length + 1,
      ...routeForm,
      status: "Scheduled",
      createdAt: new Date().toISOString(),
    };
    setRoutes([...routes, newRoute]);
    setShowRouteForm(false);
    setRouteForm({
      name: "",
      startPoint: "",
      endPoint: "",
      departureTime: "",
      arrivalTime: "",
      vehicleId: "",
      driverId: "",
      stops: [],
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Route Planning & Scheduling</h3>
        <button
          onClick={() => setShowRouteForm(!showRouteForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showRouteForm ? "Cancel" : "Create New Route"}
        </button>
      </div>

      {/* Route Creation Form */}
      {showRouteForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Route Name"
              value={routeForm.name}
              onChange={(e) => setRouteForm({ ...routeForm, name: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="Start Point"
              value={routeForm.startPoint}
              onChange={(e) => setRouteForm({ ...routeForm, startPoint: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="text"
              placeholder="End Point"
              value={routeForm.endPoint}
              onChange={(e) => setRouteForm({ ...routeForm, endPoint: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="datetime-local"
              value={routeForm.departureTime}
              onChange={(e) => setRouteForm({ ...routeForm, departureTime: e.target.value })}
              className="border rounded p-2"
              required
            />
            <input
              type="datetime-local"
              value={routeForm.arrivalTime}
              onChange={(e) => setRouteForm({ ...routeForm, arrivalTime: e.target.value })}
              className="border rounded p-2"
              required
            />
            <select
              value={routeForm.vehicleId}
              onChange={(e) => setRouteForm({ ...routeForm, vehicleId: e.target.value })}
              className="border rounded p-2"
              required
            >
              <option value="">Select Vehicle</option>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.name}
                </option>
              ))}
            </select>
            <select
              value={routeForm.driverId}
              onChange={(e) => setRouteForm({ ...routeForm, driverId: e.target.value })}
              className="border rounded p-2"
              required
            >
              <option value="">Select Driver</option>
              {drivers.map((driver) => (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Create Route
          </button>
        </form>
      )}

      {/* 🔽 Filter Section (UI Only) */}
      <div className="bg-gray-50 border rounded-lg p-4 mb-4">
        <h4 className="text-md font-semibold mb-3">Filter Routes</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Filter by Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">Filter by Status</option>
            <option value="Scheduled">Scheduled</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          {/* Filter by Departure Date */}
          <input
            type="date"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border rounded p-2"
            placeholder="Filter by Departure Date"
          />

          {/* Filter by Driver */}
          <select
            value={driverFilter}
            onChange={(e) => setDriverFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">Filter by Driver</option>
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>

          {/* Filter by Vehicle */}
          <select
            value={vehicleFilter}
            onChange={(e) => setVehicleFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">Filter by Vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Routes Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Route Name</th>
              <th className="py-2 px-4 border-b">Start - End</th>
              <th className="py-2 px-4 border-b">Departure</th>
              <th className="py-2 px-4 border-b">Arrival</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {routes.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No records found
                </td>
              </tr>
            ) : (
              routes.map((route) => (
                <tr key={route.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{route.name}</td>
                  <td className="py-2 px-4 border-b">
                    {route.startPoint} - {route.endPoint}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(route.departureTime).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(route.arrivalTime).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded ${
                        route.status === "Scheduled"
                          ? "bg-yellow-200"
                          : route.status === "In Progress"
                          ? "bg-blue-200"
                          : "bg-green-200"
                      }`}
                    >
                      {route.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoutePlanning;
