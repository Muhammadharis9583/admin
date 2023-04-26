import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './screens/dashboard/Dashboard';
import Users from './screens/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    // <Dashboard/>
  );
}

export default App;
