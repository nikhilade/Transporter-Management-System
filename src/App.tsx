import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DispatchRoutesPage from './pages/DispatchRoutesPage';

function App() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard":
                return <div>Welcome to the Dashboard 🚀</div>;
            case "dispatch":
                return <DispatchRoutesPage />;
            default:
                return <div>Coming soon...</div>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title={activeTab === "dashboard" ? "Dashboard" : "Dispatch & Routes"} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}

export default App;
