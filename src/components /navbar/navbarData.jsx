//NavBar links for Mobile Devices.
export const navLinkData = [
    {
      label:"Home", 
      link:"/", 
      tree:"null" 
    },
    {
        label: "About",
        link: null,
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
        label: "Services",
        link: null,
        tree: [
            {
                label: "Financial Services",
                link: null,
                branches: [
                    {
                        label: "Reports",
                        link: "/services/reports",
                        branches: null,
                    },{
                      label: "Presentations",
                      link: "/services/presentations",
                      branches: null,
                  },
                    {
                        label: "Academics Services",
                        link: null,
                        branches: [
                            {
                                label: "Analytics",
                                link: "/services/analytics",
                                branches: null,
                            },
                            {
                                label: "Thesis",
                                link: "/services/thesis",
                                branches: null,
                            },
                            {
                                label: "Dissertations",
                                link: "/services/Dissertations",
                                branches: null,
                            },
                        ],
                    },
                ],
            },
            {
                label: "Pricing",
                link: null,
                branches: [
                    {
                        label: "Enterprise",
                        link: "/services/enterprise",
                        branches: null,
                    },
                    {
                        label: "Small Business",
                        link: "/services/small-business",
                        branches: null,
                    },
                ],
            },
        ],
    },
    {
      label: "Contact",
      link: "/contact",
      tree: null,
  },{
    label: "Blog",
    link: "/blog",
    tree: null,
},
];