import { RiDashboardFill } from "react-icons/ri"
import { NestedMenuItemProps } from "../_components/NestedMenuItem"
import { LuImage } from "react-icons/lu";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { FaPagelines } from "react-icons/fa";
import { MdOutlineWbTwilight } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

export interface SidebarItemProps extends NestedMenuItemProps {
    type: 'nested' | 'divider' | 'heading';
}

const sidebarContent: SidebarItemProps[] = [
    {
        type: 'nested',
        title: 'Brooklyn Alice',
        image: '/images/team-3.jpg',
        nestedItems: [
            {
                title: 'My Profile',
                href: '/dashboard/profile'
            },
            {
                title: 'Settings',
                href: '/dashboard/settings'
            },
            {
                title: 'Logout',
                href: '/dashboard/logout'
            }
        ]
    },
    {
        type: 'divider',
        title: 'Main'
    },
    {
        type: 'nested',
        title: 'Dashboards',
        Icon: RiDashboardFill,
        className: 'mt-4',
        nestedItems: [
            {
                title: 'Analytics',
                href: '/dashboard/analytics'
            },
            {
                title: 'Sales',
                href: '/dashboard/sales'
            },
            {
                title: 'Discover',
                href: '/dashboard/discover'
            },
            {
                title: 'Smart Home',
                href: '/dashboard/smart-home'
            }
        ]
    },
    {
        type: 'heading',
        title: 'Pages'
    },
    {
        type: 'nested',
        title: 'Pages',
        Icon: LuImage,
        nestedItems: [
            {
                title: 'Profile',
                nestedItems: [
                    {
                        title: 'Profile Overview',
                        href: '/dashboard/profile/overview'
                    },
                    {
                        title: 'All Projects',
                        href: '/dashboard/profile/projects'
                    },
                    {
                        title: 'Messages',
                        href: '/dashboard/profile/messages'
                    }
                ]
            },
            {
                title: 'Users',
                nestedItems: [
                    {
                        title: 'Reports',
                        href: '/dashboard/reports'
                    },
                    {
                        title: 'New User',
                        href: '/dashboard/new-user'
                    }
                ]
            },
            {
                title: 'Account',
                nestedItems: [
                    {
                        title: 'Settings',
                        href: '/dashboard/settings'
                    },
                    {
                        title: 'Billing',
                        href: '/dashboard/billing'
                    },
                    {
                        title: 'Invoice',
                        href: '/dashboard/invoice'
                    },
                    {
                        title: "Security",
                        href: '/dashboard/security'
                    }
                ]
            },
            {
                title: 'Projects',
                nestedItems: [
                    {
                        title: 'General',
                        href: '/dashboard/general'
                    },
                    {
                        title: 'Timeline',
                        href: '/dashboard/timeline'
                    },
                    {
                        title: 'New Project',
                        href: '/dashboard/new-project'
                    }
                ]
            },
            {
                title: 'Virtual Reality',
                nestedItems: [
                    {
                        title: 'VR Default',
                        href: '/dashboard/vr-default'
                    },
                    {
                        title: 'VR Info',
                        href: '/dashboard/vr-info'
                    }
                ]
            },
            {
                title: 'Pricing Page',
                href: '/dashboard/pricing'
            },
            {
                title: 'Widgets',
                href: '/dashboard/widgets'
            },
            {
                title: 'FAQ Page',
                href: '/dashboard/faq'
            }
        ]
    },
    {
        type: 'nested',
        title: 'Applications',
        Icon: BsGrid3X3GapFill,
        nestedItems: [
            {
                title: 'CRM',
                href: '/dashboard/crm'
            },
            {
                title: 'Kanban',
                href: '/dashboard/kanban'
            },
            {
                title: 'Wizard',
                href: '/dashboard/wizard'
            },
            {
                title: 'DataTables',
                href: '/dashboard/datatables'
            },
            {
                title: 'Calendar',
                href: '/dashboard/calendar'
            },
            {
                title: 'Stats',
                href: '/dashboard/stats'
            },
            {
                title: 'Validation',
                href: '/dashboard/validation'
            }
        ]
    },
    {
        type: 'nested',
        Icon: MdDirectionsBoatFilled,
        title: 'Ecommerce',
        nestedItems: [
            {
                title: 'Products',
                nestedItems: [
                    {
                        title: 'New Product',
                        href: '/dashboard/new-product'
                    },
                    {
                        title: 'Edit Product',
                        href: '/dashboard/edit-product'
                    },
                    {
                        title: 'Product Page',
                        href: '/dashboard/product-page'
                    },
                    {
                        title: 'Products List',
                        href: '/dashboard/products-list'
                    }
                ]
            },
            {
                title: 'Orders',
                nestedItems: [
                    {
                        title: 'New Order',
                        href: '/dashboard/new-order'
                    },
                    {
                        title: 'Order Details',
                        href: '/dashboard/order-details'
                    },
                    {
                        title: 'Orders List',
                        href: '/dashboard/orders-list'
                    }
                ]
            }
        ]
    },
    {
        type: 'nested',
        title: 'Authentication',
        Icon: FaPagelines,
        nestedItems: [
            {
                title: 'Sign In',
                nestedItems: [
                    {
                        title: 'Basic',
                        href: '/dashboard/sign-in-basic'
                    },
                    {
                        title: 'Cover',
                        href: '/dashboard/sign-in-cover'
                    }
                ]
            },
            {
                title: 'Sign Up',
                nestedItems: [
                    {
                        title: 'Basic',
                        href: '/dashboard/sign-up-basic'
                    },
                    {
                        title: 'Cover',
                        href: '/dashboard/sign-up-cover'
                    }
                ]
            },
            {
                title: 'Reset Password',
                nestedItems: [
                    {
                        title: 'Basic',
                        href: '/dashboard/reset-password-basic'
                    },
                    {
                        title: 'Cover',
                        href: '/dashboard/reset-password-cover'
                    }
                ]
            },
            {
                title: 'Lock',
                nestedItems: [
                    {
                        title: 'Basic',
                        href: '/dashboard/lock-basic'
                    },
                    {
                        title: 'Cover',
                        href: '/dashboard/lock-cover'
                    }
                ]
            }
        ]
    },
    {
        type: 'heading',
        title: 'Docs'
    },
    {
        type: 'nested',
        title: 'Basic',
        Icon: MdOutlineWbTwilight,
        nestedItems: [
            {
                title: 'Getting Started',
                nestedItems: [
                    {
                        title: 'Quick Start',
                        href: '/dashboard/quick-start'
                    },
                    {
                        title: 'License',
                        href: '/dashboard/license'
                    },
                    {
                        title: 'Changelog',
                        href: '/dashboard/changelog'
                    },
                    {
                        title: 'FAQ',
                        href: '/dashboard/faq'
                    }
                ]
            },
            {
                title: 'Foundation',
                nestedItems: [
                    {
                        title: "Colors",
                        href: '/dashboard/colors'
                    },
                    {
                        title: 'Grid',
                        href: '/dashboard/grid'
                    },
                    {
                        title: 'Typography',
                        href: '/dashboard/typography'
                    },
                    {
                        title: 'Icons',
                        href: '/dashboard/icons'
                    }
                ]
            }
        ]
    },
    {
        type: 'nested',
        title: 'Components',
        Icon: MdOutlineSettingsInputComponent,
        href: '/dashboard/components'
    },
    {
        type: 'nested',
        title: 'Changelog',
        Icon: SiPowerpages,
        href: '/dashboard/changelog'
    }
]

export default sidebarContent