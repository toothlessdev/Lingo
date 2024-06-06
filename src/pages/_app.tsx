import { motion } from "framer-motion";
import { Toast } from "@/components/feedback/Toast";
import { NavBar } from "@/components/navigation/NavBar";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <NavBar />
            <Toast />
            <motion.main
                key={router.route}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5 }}
            >
                <Component {...pageProps} />
            </motion.main>
        </AnimatePresence>
    );
}
