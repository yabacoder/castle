import Dashboard from "./components/dashboard";
import Properties from "./components/property";
import Agents from "./components/Agent";
import SaveProperty from "./components/property/save";
import SaveAgent from "./components/Agent/save";
import Login from "./components/auth/login";
import EditProperty from "./components/property/edit";

export const Routes = [
    {path:"/", component:Dashboard},
    {path:"/login", component:Login},
    {path:"/properties", component:Properties},
    {path:"/property/add", component:SaveProperty },
    {path:"/property/edit/:id", component:EditProperty },
    {path:"/agents", component:Agents},
    {path:"/add_agent", component:SaveAgent}
];
