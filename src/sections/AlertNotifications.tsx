import React from "react";
import { Alert } from "../pages/DispatchRoutesPage";

interface Props {
  alerts: Alert[];
}

const AlertsNotifications: React.FC<Props> = ({ alerts }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-lg font-semibold mb-4">Alerts & Notifications</h3>
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`border-l-4 p-3 rounded ${
            alert.type === "warning"
              ? "border-yellow-500 bg-yellow-50"
              : alert.type === "error"
              ? "border-red-500 bg-red-50"
              : "border-blue-500 bg-blue-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="font-medium">{alert.message}</p>
            <span className="text-sm text-gray-500">{alert.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AlertsNotifications;
