export default function LocationMap() {
    return (
        <div>
            <div className="text-center mb-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                    Localização
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                    Verifique nosso endereço diretamente pelo mapa
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
                </div>
            </div>
            <div className="px-4 py-16 sm:px-6 lg:px-8 relative w-full max-w-full mx-auto h-[500px]">
                <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.112739205097!2d-50.66562825473443!3d-22.612422963482707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495201db07b743b%3A0x3ad137216db4ee7!2sAssocia%C3%A7%C3%A3o%20Hospital%20Beneficente%20de%20Maracai!5e0!3m2!1spt-BR!2sbr!4v1732381556665!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </div>
    );
}
