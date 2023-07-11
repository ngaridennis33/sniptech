//DashBoard Data and Links.
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ViewListIcon from '@mui/icons-material/ViewList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const dashBoardData = [
    {
        label: "MAIN",
        link:null,
        tree:[
            {
                label:"Dashboard", 
                icon: <DashboardIcon/>,
                link:"/dashboard", 
                branches:null,
            },
        ],
    },
    {
        label: "LISTS",
        link:null,
        tree:[
            {
                label:"Users", 
                icon: <PeopleOutlineRoundedIcon/>,
                link:"/dashboard/users", 
                branches:null,
            },
            {
                label:"Products", 
                icon: <Inventory2Icon/>,
                link:"/dashboard/products", 
                branches: null,
            },
            {
                label:"Orders", 
                icon: <ViewListIcon/>,
                link:"/dashboard/orders", 
                branches: null,
            },
            {
                label:"Delivery", 
                icon: <LocalShippingIcon/>,
                link:"/dashboard/delivery", 
                branches: null,
            },
        ],
    },
    {
        label: "USEFUL",
        tree:[
            {
                label:"Stats", 
                icon: <AnalyticsIcon/>,
                link:"/dashboard/stats", 
                branches: null,
            },
            {
                label:"Notification", 
                icon: <NotificationsIcon/>,
                link:"/dashboard/notification", 
                branches: null,
            },
        ],
    },
    {
        label: "SERVICE",
        link:null,
        tree:[
            {
                label:"System Health", 
                icon: <MonitorHeartIcon/>,
                link:"/dashboard/service", 
                branches: null,
            },
            {
                label:"More", 
                icon: <MoreHorizIcon/>,
                link: null, 
                branches:[
                    {
                        label:"Settings", 
                        icon: <SettingsIcon/>,
                        link:"/dashboard/settings", 
                        branches:null,
                    },
                    {
                        label:"Themes", 
                        icon: <ColorLensIcon/>,
                        link:null, 
                        branches:[
                            {
                                label:"Dark", 
                                icon: <DarkModeIcon/>,
                                link:"/dashboard/dark", 
                                branches:null,
                            },
                            {
                                label:"Light", 
                                icon: <LightModeIcon/>,
                                link:"/dashboard/light", 
                                branches: null,
                            },
                        ] 
                    },
                ] 
            },
        ],
    },
    {
        label: "USER",
        tree:[
            {
                label:"Profile", 
                icon: <PersonIcon/>,
                link:"/dashboard/user", 
                branches: null 
            },
            {
                label:"Logout", 
                icon: <LogoutIcon/>,
                link:"/dashboard/logout", 
                tree: null, 
            },
        ],
    },
];

