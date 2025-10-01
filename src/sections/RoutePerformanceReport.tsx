import React from "react";

const RoutePerformanceReports: React.FC = () => {
  const reports = [
    { route: "Route A", distance: "150 km", fuelUsed: "45L", timeTaken: "3h 30m", delay: "15m" },
    { route: "Route B", distance: "200 km", fuelUsed: "60L", timeTaken: "4h 15m", delay: "0m" },
    { route: "Route C", distance: "120 km", fuelUsed: "35L", timeTaken: "2h 45m", delay: "30m" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Route Performance Reports</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Route</th>
              <th className="py-2 px-4 border-b">Distance</th>
              <th className="py-2 px-4 border-b">Fuel Used</th>
              <th className="py-2 px-4 border-b">Time Taken</th>
              <th className="py-2 px-4 border-b">Delay</th>
              <th className="py-2 px-4 border-b">Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              // calculate efficiency km/L
              const distanceValue = parseInt(report.distance.replace(" km", ""));
              const fuelValue = parseInt(report.fuelUsed.replace("L", ""));
              const efficiency = fuelValue ? Math.round(distanceValue / fuelValue) : 0;

              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{report.route}</td>
                  <td className="py-2 px-4 border-b">{report.distance}</td>
                  <td className="py-2 px-4 border-b">{report.fuelUsed}</td>
                  <td className="py-2 px-4 border-b">{report.timeTaken}</td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        report.delay === "0m" ? "bg-green-200" : "bg-red-200"
                      }`}
                    >
                      {report.delay}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span className="px-2 py-1 rounded text-xs bg-blue-200">
                      {efficiency} km/L
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoutePerformanceReports;
