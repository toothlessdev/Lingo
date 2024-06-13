export interface INavItem {
    key: number;
    text: string;
    href: string;
}

export const navItems: INavItem[] = [
    {
        key: 1,
        text: "About",
        href: "/about",
    },
    {
        key: 2,
        text: "Principles",
        href: "/principle",
    },
    {
        key: 3,
        text: "Contact Us",
        href: "/contact",
    },
];
