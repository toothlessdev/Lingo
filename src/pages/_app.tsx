import { motion } from "framer-motion";
import { Toast } from "@/components/feedback/Toast";
import { NavBar } from "@/components/navigation/NavBar";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
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
            </PersistGate>
        </Provider>
    );
}
