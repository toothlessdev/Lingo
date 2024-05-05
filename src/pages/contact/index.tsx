/* eslint-disable @next/next/no-img-element */
import { Button } from "@/common/form/Button";
import { Input } from "@/common/form/Input";
import { Label } from "@/common/form/Label";
import { Textarea } from "@/common/form/TextArea";

export default function ContactPage() {
    return (
        <section key="1" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            Get in touch with us. We're here to assist you in finding the best medical translation
                            solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex items-center">
                            <img
                                alt="Contact Image"
                                className="rounded-xl object-cover mx-auto "
                                height="400"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "500/400",
                                    objectFit: "cover",
                                }}
                                width="500"
                            />
                        </div>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="Enter your email" type="email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="Enter the subject" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
                            </div>
                            <Button type="submit">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
