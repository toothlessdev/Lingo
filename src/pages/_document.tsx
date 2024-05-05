import { NavBar } from "@/common/navigation/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <NavBar />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
