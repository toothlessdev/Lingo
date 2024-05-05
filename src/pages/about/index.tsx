/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/common/form/Button";
import { EqualIcon } from "@/assets/EqualIcon";
import { SmartphoneIcon } from "@/assets/SmartPhoneIocn";
import { KeyIcon } from "@/assets/KeyIcon";
import { UserIcon } from "@/assets/UserIcon";
import { FactoryIcon } from "@/assets/FactoryIcon";
import { InfoIcon } from "@/assets/InfoIcon";
import { MenuIcon } from "@/assets/MenuIcon";

export default function HomePage() {
    return (
        <>
            <section className="bg-gray-900 text-white py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Welcome to <span className="text-cyan-400">LINGO</span> Services
                    </h1>
                    <p className="text-lg md:text-xl mb-8">Empowering medical communication with AI Technology</p>
                    <Button variant="outline">Learn More</Button>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <EqualIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-lg font-bold mb-2">Diversity</h3>
                        <p className="text-gray-500">Our team represents a diverse range of backgrounds and expertise.</p>
                    </div>
                    <div className="text-center">
                        <SmartphoneIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-lg font-bold mb-2">Innovation-Driven</h3>
                        <p className="text-gray-500">We constantly strive to push the boundaries of what's possible.</p>
                    </div>
                    <div className="text-center">
                        <KeyIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                        <p className="text-gray-500">Our rigorous quality control ensures the best possible results.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">About Us</h2>
                    <p className="text-gray-500 mb-8">
                        At LINGO Services, we are a team of passionate individuals dedicated to empowering medical communication through the power of AI technology. Our mission is to bridge the gap
                        between healthcare providers and patients, ensuring clear and effective communication for better outcomes.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <UserIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">Software Developer</h3>
                            <p className="text-gray-500">Join our team and help build cutting-edge AI solutions.</p>
                        </div>
                        <div className="text-center">
                            <FactoryIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">UI/UX Designer</h3>
                            <p className="text-gray-500">Craft intuitive and visually stunning user experiences.</p>
                        </div>
                        <div className="text-center">
                            <InfoIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">Data Analyst</h3>
                            <p className="text-gray-500">Leverage data to drive informed decision-making.</p>
                        </div>
                        <div className="text-center">
                            <MenuIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">Project Manager</h3>
                            <p className="text-gray-500">Coordinate cross-functional teams for successful project delivery.</p>
                        </div>

                        <div className="text-center">
                            <UserIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">Software Developer</h3>
                            <p className="text-gray-500">Join our team and help build cutting-edge AI solutions.</p>
                        </div>
                        <div className="text-center">
                            <FactoryIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">UI/UX Designer</h3>
                            <p className="text-gray-500">Craft intuitive and visually stunning user experiences.</p>
                        </div>
                        <div className="text-center">
                            <InfoIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">Data Analyst</h3>
                            <p className="text-gray-500">Leverage data to drive informed decision-making.</p>
                        </div>
                        <div className="text-center">
                            <MenuIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                            <h3 className="text-lg font-bold mb-2">Project Manager</h3>
                            <p className="text-gray-500">Coordinate cross-functional teams for successful project delivery.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10">Our Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">John Doe</h3>
                            <p className="text-gray-500">Co-Founder & CEO</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
                            <p className="text-gray-500">CTO</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">Michael Johnson</h3>
                            <p className="text-gray-500">Head of Engineering</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">Emily Davis</h3>
                            <p className="text-gray-500">Lead Designer</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">David Lee</h3>
                            <p className="text-gray-500">Data Scientist</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">Sarah Chen</h3>
                            <p className="text-gray-500">Product Manager</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">Tom Nguyen</h3>
                            <p className="text-gray-500">Software Engineer</p>
                        </div>
                        <div className="text-center">
                            <img
                                alt="Team Member"
                                className="rounded-full mx-auto mb-4"
                                height={120}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "120/120",
                                    objectFit: "cover",
                                }}
                                width={120}
                            />
                            <h3 className="text-lg font-bold mb-2">Olivia Patel</h3>
                            <p className="text-gray-500">Marketing Specialist</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
