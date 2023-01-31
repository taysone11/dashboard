import { Routes, Link , Route} from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import MyTasks from "../components/MyTasks/MyTasks";
import UsersPage from "../pages/UsersPage";
import UsersIdPage from "../pages/UsersIdPage";
import TasksPage from "../pages/TasksPage";

export default function AppRouter() {

    return (
        <Routes>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/users/:id" element={<UsersIdPage/>}/>

        </Routes>
    )

}