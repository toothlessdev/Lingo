/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "@/components/form/Button";
import { EqualIcon } from "@/assets/EqualIcon";
import { SmartphoneIcon } from "@/assets/SmartPhoneIocn";
import { KeyIcon } from "@/assets/KeyIcon";
import { UserIcon } from "@/assets/UserIcon";
import { FactoryIcon } from "@/assets/FactoryIcon";
import { InfoIcon } from "@/assets/InfoIcon";
import { MenuIcon } from "@/assets/MenuIcon";
import { TeamMemberItem } from "@/components/display/TeamMemberItem";
import { teams } from "@/constants/teams";
import { currentOpenings } from "@/constants/currentOpenings";
import { OpeningsItem } from "@/components/display/OpeningsItem";

export default function HomePage() {
    return (
        <>
            <section className="bg-gray-900 text-white py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Welcome to <span className="text-white">LINGO</span> Services
                    </h1>
                    <p className="text-lg md:text-xl mb-8">Empowering medical communication with AI Technology</p>
                    <Button variant="outline">Learn More</Button>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <EqualIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-lg font-bold mb-2">Diversity and Inclusion</h3>
                        <p className="text-gray-500">
                            We prioritize diversity and inclusion in all aspects of our work.
                        </p>
                    </div>
                    <div className="text-center">
                        <SmartphoneIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-lg font-bold mb-2">Innovation-Driven</h3>
                        <p className="text-gray-500">
                            Join us and work from anywhere, embracing a remote-first approach.
                        </p>
                    </div>
                    <div className="text-center">
                        <KeyIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
                        <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                        <p className="text-gray-500">Continuous learning and growth are at the core of our culture.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
                    <p className="text-gray-500 mb-8 text-center">
                        Transforming medical translation with cutting-edge technology.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {currentOpenings.map((item) => {
                            return <OpeningsItem key={item.id} title={item.title} subtitle={item.subtitle} />;
                        })}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-10">Our Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teams.map((teamMember) => {
                            return (
                                <TeamMemberItem
                                    key={teamMember.id}
                                    name={teamMember.name}
                                    role={teamMember.role}
                                    imgSrc={teamMember.imgSrc}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
