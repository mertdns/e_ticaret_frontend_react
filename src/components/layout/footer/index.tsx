export default function Footer() {
    return (
        <footer className="bg-[#224e34] text-white pt-16 pb-8 px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 md:gap-x-8 items-center justify-between">
                    <div className="md:col-span-4 lg:col-span-6 max-w-md">
                        <div className="mt-4 space-y-4">
                            <input type="email" placeholder="E-Posta adresini gir..." className="newsletter-input w-full px-4 py-3 bg-zinc-900 rounded-xl text-white border border-zinc-800 focus:outline-none focus:border-zinc-700" />
                            <button className="bg-amber-50 text-black px-6 py-2.5 rounded-full flex items-center font-medium hover:bg-gray-200 transition-colors">
                                Abone ol
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">
                        <div>
                            <h3 className="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">Sayfalar</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Home</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Work</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Services</a></li>
                            </ul>
                        </div>
                        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                            <h3 className="text-sm font-normal uppercase tracking-wide text-gray-400 mb-5">Follow Us</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Instagram</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-sm hover:text-gray-300 transition-colors">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-6 border-t border-black font-bold">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">Sitemap</a>
                            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">Privacy Policy</a>
                        </div>
                        <div className="text-xs text-gray-500">
                            © 2025, Lorem ipsum dolor sit.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}