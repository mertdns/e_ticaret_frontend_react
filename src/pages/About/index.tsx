
function About() {


    return (
        <div className="bg-white">
            <header className="bg-[#C2EFD4] text-[#224f34] text-center py-12">
                <h1 className="text-4xl font-bold mt-16">Hakkımızda</h1>
            </header>

            <div className="max-w-7xl mx-auto">
                <section className="text-center py-6 px-4">
                    <h2 className="text-2xl font-bold">Faaliyetlerimiz</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        ürünleriniz güvenle size ulaştırılır.
                    </p>
                    <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
                        <div className="transition transform hover:scale-110">
                            <h3 className="text-xl font-bold" >85+</h3>
                            <p className="text-gray-700">Satış</p>
                        </div>
                        <div className="transition transform hover:scale-110">
                            <h3 className="text-xl font-bold" >25+</h3>
                            <p className="text-gray-700">Kargo</p>
                        </div>
                    </div>
                </section>

                <section className="text-center py-6 px-4 w-full">
                    <h2 className="text-2xl font-bold">Sıkça Sorulan Sorular</h2>
                    <div className="mt-8">
                        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
                            <h3 className="text-xl font-bold">How do I make an appointment online?</h3>
                            <p className="mt-2 text-gray-700">You can book an appointment online through our website or mobile app.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                            <h3 className="text-xl font-bold">What types of medical tests do you offer?</h3>
                            <p className="mt-2 text-gray-700">We offer a wide range of medical tests including blood tests, imaging, and more.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
                            <h3 className="text-xl font-bold">Do you accept insurance plans?</h3>
                            <p className="mt-2 text-gray-700">Yes, we accept most major insurance plans.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About;