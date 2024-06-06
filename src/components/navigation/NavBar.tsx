import { navItems } from "@/constants/navItems";
import Link from "next/link";

export const NavBar = () => {
    return (
        <header className="fixed top-0 left-0 w-screen flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow z-50">
            <div className="flex items-center space-x-4">
                <Link className="text-2xl font-bold text-white px-3" href="/">
                    LINGO
                </Link>
                <nav className="md:flex space-x-4">
                    {navItems.map((item) => {
                        return (
                            <Link key={item.key} href={item.href}>
                                {item.text}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
};
