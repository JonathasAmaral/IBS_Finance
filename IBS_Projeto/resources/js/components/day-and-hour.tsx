import CalendarCard from "./ui/calendar-card";

export default function DayAndHour() {
    return (
        <section>
            <h2 className="mb-8 text-start text-2xl font-bold text-gray-800">Dias e horários de Culto</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <CalendarCard 
                    iconUrl="/icons/Calendarpoint.svg" 
                    day="TERÇA" 
                    time="19h30" 
                    event="Culto de Oração" 
                />

                <CalendarCard 
                    iconUrl="/icons/CalendarCheck.svg" 
                    day="QUINTA" 
                    time="19h30" 
                    event="Culto da Família" 
                />
               
                <CalendarCard 
                    iconUrl="/icons/CalendarBlank.svg" 
                    day="SÁBADO" 
                    time="19h30" 
                    event="Culto dos Jovens" 
                />

                <CalendarCard 
                    iconUrl="/icons/Clock.svg" 
                    day="DOMINGO" 
                    time="9h30" 
                    event="Escola Bíblica" 
                />

                <CalendarCard 
                    iconUrl="/icons/Clock.svg" 
                    day="DOMINGO" 
                    time="18h" 
                    event="Culto de Adoração" 
                />
            </div>
        </section>
    );
}