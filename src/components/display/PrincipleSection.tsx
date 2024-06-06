import { useRouter } from "next/router";
import { Button } from "../form/Button";
import Image from "next/image";

export interface IPrincipleItem {
    title: string;
    linkText?: string;
    linkHref?: string;
    imgSrc?: string;
    children: React.ReactNode;
}

export const PrincipleItem: React.FC<IPrincipleItem> = ({ title, linkText, linkHref, imgSrc, children }) => {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 justify-center gap-8 sm:grid-cols-2">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">{title}</h2>
                <p className="text-gray-500 dark:text-gray-400">{children}</p>
                <Button onClick={() => router.push(linkHref ?? "/")}>{linkText ?? "Explore More"}</Button>
            </div>
            <div>
                <Image
                    alt="Contact Image"
                    className="rounded-xl object-cover mx-auto"
                    height="400"
                    src={imgSrc ?? "/placeholder.svg"}
                    style={{
                        aspectRatio: "500/400",
                        objectFit: "cover",
                    }}
                    width="500"
                />
            </div>
        </div>
    );
};
