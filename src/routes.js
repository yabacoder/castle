import Dashboard from "./components/dashboard";
import Properties from "./components/property";
import Agents from "./components/Agent";
import SaveProperty from "./components/property/save";
import SaveAgent from "./components/Agent/save";
import Login from "./components/auth/login";

export const Routes = [
    {path:"/", component:Dashboard},
    {path:"/login", component:Login},
    {path:"/properties", component:Properties},
    {path:"/add_property", component:SaveProperty},
    {path:"/agents", component:Agents},
    {path:"/add_agent", component:SaveAgent}
];
