import React from "react";
import { DispatchOrder } from "../pages/DispatchRoutesPage";

interface Props {
  dispatchOrders: DispatchOrder[];
}

const DispatchOrders: React.FC<Props> = ({ dispatchOrders }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-lg font-semibold mb-4">Dispatch Orders</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Order #</th>
            <th className="py-2 px-4 border-b">Destination</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Priority</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dispatchOrders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{order.orderNumber}</td>
              <td className="py-2 px-4 border-b">{order.destination}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    order.status === "Pending"
                      ? "bg-yellow-200"
                      : order.status === "In-Progress"
                      ? "bg-blue-200"
                      : "bg-green-200"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    order.priority === "High"
                      ? "bg-red-200"
                      : order.priority === "Medium"
                      ? "bg-yellow-200"
                      : "bg-green-200"
                  }`}
                >
                  {order.priority}
                </span>
              </td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:text-blue-700 text-sm">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default DispatchOrders;
