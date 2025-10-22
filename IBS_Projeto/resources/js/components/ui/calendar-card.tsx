interface CalendarCardProps {
    iconUrl: string;
    day: string;
    time: string;
    event: string;
}

export default function CalendarCard({ iconUrl, day, time, event }: CalendarCardProps) {
    return (
        <div className="flex items-center rounded-lg border border-[#D5CAB4] bg-white p-4 text-center shadow-sm">
            <div>
                <img 
                    src={iconUrl} 
                    alt="icon" 
                    className="h-8 w-8 text-[#D5CAB4]" 
                />
            </div>
            <div className="flex flex-col items-center w-full mr-4">
                <p className="font-semibold text-gray-800 text-sm md:text-base">{day} | {time}</p>
                <p className="mt-1 text-sm text-gray-500">{event}</p>
            </div>
        </div>
    );
}