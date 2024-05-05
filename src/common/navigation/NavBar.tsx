import { Button } from "@/common/form/Button";
import { navItems } from "@/constants/navItems";
import Link from "next/link";

export const NavBar = () => {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow">
            <div className="flex items-center space-x-4">
                <Link className="text-2xl font-bold text-sky-300 px-3" href="/">
                    LINGO
                </Link>
                <nav className="hidden md:flex space-x-4">
                    {navItems.map((item) => {
                        return (
                            <Link key={item.key} className="hover:underline" href={item.href}>
                                {item.text}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <Button className="hidden md:inline-flex">Get Started</Button>
        </header>
    );
};
