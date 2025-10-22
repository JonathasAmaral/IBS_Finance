interface AboutUsProps {
    imageUrl: string;
    imageName?: string;
    title: string;
    text: string;
}

export default function AboutUs({ 
    imageUrl, 
    imageName, 
    title, 
    text
}: AboutUsProps) {
    return (
        <section className="grid grid-cols-1 items-center w-full gap-8 md:grid-cols-[2fr_3fr] md:gap-16">
            {/* Coluna da Imagem */}
            <div className="order-2 md:order-1">
                <img 
                    src={imageUrl}
                    alt={imageName || "Image about us"} 
                    className="w-full max-w-[460px] rounded-sm object-cover mx-auto" 
            />
            </div>
            {/* Coluna do Texto */}
            <div className="order-1 md:order-2 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
                <p className="text-gray-600 leading-relaxed">
                    {text}
                </p>
            </div>
        </section>
    );
}