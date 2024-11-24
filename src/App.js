import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import DataTable from "./components/DataTable/DataTable";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/table"
          element={
            <ProtectedRoute>
              <DataTable />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
