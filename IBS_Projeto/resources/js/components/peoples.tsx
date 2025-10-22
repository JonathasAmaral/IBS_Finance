import PeopleCard from "./ui/people-card";

export default function Peoples() {
    return(
        <section>
            <h2 className="mb-8 text-start text-2xl font-bold text-gray-800">Pastores</h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <PeopleCard
                    imageUrl="/Pastor-luiz.png"
                    imageName="Pr. Luiz Henrique"
                    role="Pr."
                    name= "Luiz Henrique"
                    description="A IBS Catolé é pastoreada pelo Pr. Luiz Henrique Vieira, casado com a irmã Marilene e pai da Aline e da Renata. Ele atua em tempo integral na Igreja e é Diretor Tesoureiro do Colegiado Ministerial da IBS."
                />
                <PeopleCard
                    imageUrl="/Pastor-marconni.png"
                    imageName="Pr. Marconni Cavalcante"
                    role="Pr."
                    name= "Marconni Cavalcante"
                    description="O Pr. Luiz Vieira tem como seu auxiliar direto na IBS Catolé o Pr. Marconni Cavalcante. É casado com a irmã Viviane e pai dos pequenos Vivian e Vinícius."
                />
            </div>
        </section>
    );
}