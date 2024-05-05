import { Button } from "@/common/form/Button";

/* eslint-disable @next/next/no-img-element */
export default function PrinciplePage() {
    return (
        <section key="1" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <h1 className="mb-20 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                            How does <span className="text-sky-400">LINGO</span> work?
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Streamline Your Translation Workflow
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                LINGO's intuitive platform and powerful features make it easy to manage all your
                                translation needs in one place.
                            </p>
                            <Button>Learn More</Button>
                        </div>
                        <div>
                            <img
                                alt="Contact Image"
                                className="rounded-xl object-cover"
                                height="400"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "500/400",
                                    objectFit: "cover",
                                }}
                                width="500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Streamline Your Translation Workflow
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                LINGO's intuitive platform and powerful features make it easy to manage all your
                                translation needs in one place.
                            </p>
                            <Button>Learn More</Button>
                        </div>
                        <div>
                            <img
                                alt="Contact Image"
                                className="rounded-xl object-cover"
                                height="400"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "500/400",
                                    objectFit: "cover",
                                }}
                                width="500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Streamline Your Translation Workflow
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                LINGO's intuitive platform and powerful features make it easy to manage all your
                                translation needs in one place.
                            </p>
                            <Button>Learn More</Button>
                        </div>
                        <div>
                            <img
                                alt="Contact Image"
                                className="rounded-xl object-cover"
                                height="400"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "500/400",
                                    objectFit: "cover",
                                }}
                                width="500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Streamline Your Translation Workflow
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                LINGO's intuitive platform and powerful features make it easy to manage all your
                                translation needs in one place.
                            </p>
                            <Button>Learn More</Button>
                        </div>
                        <div>
                            <img
                                alt="Contact Image"
                                className="rounded-xl object-cover"
                                height="400"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "500/400",
                                    objectFit: "cover",
                                }}
                                width="500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
