import MainHero from "../../components/MainHero";
import About from "../About";
import Contact from "../Contact";

export default function Home() {

    return (
        <div>
            <div>
                <MainHero />
            </div>
            <div>
                <section className="bg-transparent">
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
                        <div className="max-w-prose text-left">
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                                Understand user flow and
                                <strong className="text-green-500"> increase </strong>
                                conversions
                            </h1>

                            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                                accusamus impedit minima harum corporis iusto.
                            </p>

                            <div className="mt-4 flex gap-4 sm:mt-6">
                                <a className="inline-block rounded border border-green-500 bg-green-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-green-700" href="#">Get Started</a>
                                <a className="inline-block rounded border border-gray-500 px-5 py-3 font-medium text-gray-500 shadow-sm transition-colors hover:bg-gray-900 hover:text-gray-300" href="#">Learn More</a>
                            </div>
                        </div>

                        {/* Responsive Image */}
                        <div className="mt-6 md:mt-0 sm:p-10">
                            <img className="w-full h-auto max-w-full rounded-lg object-cover md:h-[400px] lg:h-[500px]"
                                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Any Image Here" />
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <About />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    )
}