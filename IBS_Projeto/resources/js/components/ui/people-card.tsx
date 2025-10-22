interface PeopleCardProps {
    imageUrl: string;
    imageName?: string;
    role: string;
    name: string;
    description: string;
}

export default function PeopleCard({ imageUrl, imageName, role, name, description }: PeopleCardProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
                <img src={imageUrl} alt={imageName || "People image"} className="h-32 w-32 flex-shrink-0 rounded-md object-cover" />
                <div>
                    <h3 className="mb-2 text-xl font-bold">{role} {name}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
}