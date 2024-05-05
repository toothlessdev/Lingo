export interface INavItem {
    key: number;
    text: string;
    href: string;
}

export const navItems: INavItem[] = [
    {
        key: 1,
        text: "How It Works",
        href: "/principle",
    },
    {
        key: 2,
        text: "How To Use",
        href: "/instruction",
    },
    {
        key: 3,
        text: "Services",
        href: "/service",
    },
    {
        key: 4,
        text: "About Us",
        href: "/about",
    },
    {
        key: 5,
        text: "Contact Us",
        href: "/contact",
    },
];
