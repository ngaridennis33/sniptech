//NavBar links for Mobile Devices.
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ContactPageIcon from '@mui/icons-material/ContactPage';


export const navLinkData = [
    {
      label:"Home", 
      link:"/", 
      tree:"null",
      icon:<HomeIcon/>,
    },
    {
        label: "About",
        link: null,
        icon:<InfoIcon/>,
        tree: [
            {
                label: "About Us",
                link: "/about",
                branches: null,
            },
            {
              label: "Mission",
              link: "/mission",
              branches: null,
          },{
            label: "Vision",
            link: "/vision",
            branches: null,
        },{
          label: "FAQ",
          link: "/faq",
          branches: null,
      },
            {
                label: "Legal",
                link: null,
                branches: [
                    {
                        label: "Terms of Service",
                        link: "/terms-of-service",
                        branches: null,
                    },
                    {
                        label: "Privacy Policy",
                        link: "/privacy-policy",
                        branches: null,
                    },
                    {
                        label: "Terms and Conditions",
                        link: "/terms-and-conditions",
                        branches: null,
                    },
                ],
            },
        ],
    },
    {
        label: "Service",
        link: "/service",
        icon:<HomeRepairServiceIcon/>,
        tree: null,
    },
    {
      label: "Contact",
      link: "/contact",
      icon:<ContactPageIcon/>,
      tree: null,
  },
];