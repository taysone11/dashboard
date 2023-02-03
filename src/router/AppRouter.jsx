import { Routes, Link, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";

import UsersPage from "../pages/UsersPage";
import UsersIdPage from "../pages/UsersIdPage";
import TasksPage from "../pages/TasksPage";
import Messages from "../components/Messages/Messages";
import Reports from "../components/Repotrs/Reports";
import LogIn from "../components/LogIn/LogIn";
import { Settings } from "../components/Settings/Settings";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/users/:id" element={<UsersIdPage />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/log-in" element={<Navigate to="/dashboard"/>} />
      <Route path="*" element={<ErrorPage/>} />

      
      
    </Routes>
  );
}
