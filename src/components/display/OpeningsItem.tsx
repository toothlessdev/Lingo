import { UserIcon } from "@/assets/UserIcon";

export interface IOpeningsItem {
    title: string;
    subtitle: string;
}

export const OpeningsItem: React.FC<IOpeningsItem> = ({ title, subtitle }) => {
    return (
        <div className="text-center">
            <UserIcon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-500">{subtitle}</p>
        </div>
    );
};
