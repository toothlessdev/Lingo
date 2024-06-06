import { PrincipleItem } from "@/components/display/PrincipleSection";
import { principles } from "@/constants/principles";

export default function PrinciplePage() {
    return (
        <section key="1" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <h1 className="mb-20 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                            How does LINGO work?
                        </h1>
                    </div>

                    {principles.map((principle) => {
                        return (
                            <PrincipleItem key={principle.id} title={principle.title}>
                                {principle.content}
                            </PrincipleItem>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
