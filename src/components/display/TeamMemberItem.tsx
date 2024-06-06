import Image from "next/image";

export interface ITeamMemberItem {
    name: string;
    role: string;
    imgSrc: string;
}

export const TeamMemberItem: React.FC<ITeamMemberItem> = ({ name, role, imgSrc }) => {
    return (
        <div className="text-center">
            <Image
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
                height={120}
                src={imgSrc ?? "/placeholder.svg"}
                style={{
                    aspectRatio: "120/120",
                    objectFit: "cover",
                }}
                width={120}
            />
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-500">{role}</p>
        </div>
    );
};
