import Dashboard from "@material-ui/icons/Dashboard";
import PeopleOutline from "@material-ui/icons/PeopleOutline";

import UsersPage from "../pages/UsersPage/UsersPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";

const panelRoutes = [
    [
        {
            path: "/",
            name: "Home",
            icon: Dashboard,
            component: DashboardPage,
            exact: true
        },
        {
            path: "/users",
            name: "Users",
            icon: PeopleOutline,
            component: UsersPage,
            exact: false
        },
    ]
]

export default panelRoutes