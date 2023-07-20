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

export const topDataUsers = [
    {
        id:1,
        img:"/profile.jpg",
        username: "Mike Tyson",
        email:"meke@example.com",
        amount: "100",
    },
    {
        id:2,
        img:"/1.png",
        username: "Dennis Brown",
        email:"dennis@example.com",
        amount: "3668",
    },
    {
        id:3,
        img:"/2.png",
        username: "Jane Doe",
        email:"jane@example.com",
        amount:"400",
    },
    {
        id:4,
        img:"/3.png",
        username: "Nicholus Blunt",
        email:"nave@example.com",
        amount:"400",
    },
    {
        id:5,
        img:"/5.png",
        username: "Simon Young",
        email:"simples@email.com",
        amount:"900",
    }

]

export const chartBoxUser = {
color: "#8884d8",
icon:"/hero.png",
title:"Total Users",
number:"11.238",
dataKey:"users",
percentage:45,
chartData:[
    {name:"Sun", users:400},
    {name:"Mon", users:600},
    {name:"Tue", users:500},
    {name:"Wed", users:700},
    {name:"Thur", users:400},
    {name:"Fri", users:500},
    {name:"Sat", users:450},
    ]
}

export const ChatBoxRevenue = {
    color: "#61167a",
    icon:"/logo.png",
    title:"Total Products",
    number:"33.12",
    dataKey:"revenue",
    percentage:-10,
    chartData:[
        {name:"Sun", revenue:700},
        {name:"Mon", revenue:500},
        {name:"Tue", revenue:600},
        {name:"Wed", revenue:100},
        {name:"Thur", revenue:500},
        {name:"Fri", revenue:500},
        {name:"Sat", revenue:550},
    ]
}


export const ChatBoxProducts = {
    color: "#dad713",
    icon:"/logo2.png",
    title:"Total Revenue",
    number:"56.12",
    dataKey:"products",
    percentage:-6,
    chartData:[
        {name:"Sun", products:400},
        {name:"Mon", products:600},
        {name:"Tue", products:500},
        {name:"Wed", products:700},
        {name:"Thur", products:400},
        {name:"Fri", products:500},
        {name:"Sat", products:450},
    ]
}

export const ChatBoxConversion = {
    color: "#8884d8",
    icon:"/profile.jpg",
    title:"Total Conversion",
    number:"28.33",
    dataKey:"conversions",
    percentage:50,
    chartData:[
        {name:"Sun", conversions:400},
        {name:"Mon", conversions:600},
        {name:"Tue", conversions:500},
        {name:"Wed", conversions:700},
        {name:"Thur", conversions:400},
        {name:"Fri", conversions:500},
        {name:"Sat", conversions:450},
    ]
}

export const barChartRevenue = {
    title:"Profit Earned",
    color: "#30a6ae",
    dataKey:"profit",
    chartData: [
        {
            name:"Sun",
            profit:4000,
        },
        {
            name:"Mon",
            profit:5000,
        },
        {
            name:"Tue",
            profit:3000,
        },
        {
            name:"Wed",
            profit:1200,
        },
        {
            name:"Thur",
            profit:800,
        },
        {
            name:"Fri",
            profit:1500,
        },
        {
            name:"Sat",
            profit:345,
        },
    ]
}

export const barChartVisits = {
    title:"Total Visits",
    color: "#6753c0",
    dataKey:"visits",
    chartData: [
        {
            name:"Sun",
            visits:4000,
        },
        {
            name:"Mon",
            visits:5000,
        },
        {
            name:"Tue",
            visits:3000,
        },
        {
            name:"Wed",
            visits:1200,
        },
        {
            name:"Thur",
            visits:800,
        },
        {
            name:"Fri",
            visits:1500,
        },
        {
            name:"Sat",
            visits:345,
        },
    ]
}

