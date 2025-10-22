import IntagramButton from '@/components/ui/intagram-button';
import YouTubeButton from '@/components/ui/youtube-button';

interface BannerProps {
    title: React.ReactNode; // Usar React.ReactNode permite passar texto com <br />
    backgroundImageUrl: string;
    instagramUrl: string;
    youtubeUrl: string;
    buttonText: string;
    buttonLink: string;
}

export default function Banner({
    title,
    backgroundImageUrl,
    instagramUrl,
    youtubeUrl,
    buttonText,
    buttonLink,
}: BannerProps) {

    return (
        <section
            className="relative flex h-[50vh] w-full items-center justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute top-4 right-6 z-10 flex gap-3">
                <IntagramButton linkInstagram={instagramUrl} />
                <YouTubeButton linkYoutube={youtubeUrl} />
            </div>
            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
                <a href={buttonLink} className="mt-6 inline-block rounded bg-[#c5a47e] px-6 py-2 font-semibold hover:bg-[#b5946e]">
                    {buttonText}
                </a>
            </div>
        </section>
    );
}