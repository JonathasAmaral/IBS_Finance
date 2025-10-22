import HeaderFirtPage from '@/components/header-firtPage';
import Banner from '@/components/banner';
import AboutUs from '@/components/about-us';
import DayAndHour from '@/components/day-and-hour';
import Peoples from '@/components/peoples';
import { Head } from '@inertiajs/react';

export default function Welcome() {

    return (
        <>
            <Head title="IBS">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18]">
                <HeaderFirtPage />

                <main className="w-full pt-16">
                    {/* Seção do Banner */}
                    <Banner 
                        title={<>Bem-vindo à<br />Igreja Bíblica Semear</>}
                        backgroundImageUrl=""
                        instagramUrl="https://www.instagram.com/ibscatole"
                        youtubeUrl="https://www.youtube.com/c/IBSCatolé"
                        buttonText="Visite-nos"
                        buttonLink="#quem-somos"
                    />

                    <div id="quem-somos" className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-4 lg:gap-24 lg:py-12">
                        {/* Seção: Quem Somos */}
                        <AboutUs 
                            imageUrl="/Igreja.png"
                            imageName='Fachada da Igreja'
                            title="Quem somos?"
                            text="A Igreja Bíblica Semear do Catolé (Campina Grande) é uma uma igreja cristã evangélica, 
                            de orientação pentecostal, comprometida com a sã doutrina e com a prática equilibrada do Evangelho 
                            do Senhor Jesus Cristo. Cremos na contemporaneidade dos dons espirituais; não validamos o batismo 
                            infantil e a nossa regra de fé e prática têm origem nos 66 livros que compõem as Escrituras Sagradas. 
                            Acreditamos no sacerdócio de todos os cristãos – cada cristão é habitado pelo Espírito Santo, é capaz 
                            de relacionar-se diretamente com Deus e de representá-Lo diante dos homens – mas todos coexistindo 
                            debaixo de uma liderança eclesiástica separada e ordenada com o propósito de apascentar e presidir o rebanho."
                        />

                        {/* Seção: Dias e Horários de Culto */}
                        <DayAndHour />

                        {/* Seção: Pastores */}
                        <Peoples />
                    </div>
                </main>


            </div>
        </>
    );
}
