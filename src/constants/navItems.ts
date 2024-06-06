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
        text: "Services",
        href: "/service",
    },
    {
        key: 3,
        text: "Contact Us",
        href: "/contact",
    },
];
