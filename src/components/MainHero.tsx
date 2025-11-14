import HeroImg from "../assets/img/HeroImg.jpg"

function MainHero() {
    return (
        <section className="bg-[#C2EFD4] px-4 py-24">
            <div className="lg:flex mx-auto max-w-7xl text-center lg:text-left lg:justify-between items-center">
                <div className="mb-10 lg:mb-0 mx-auto lg:mx-0 lg:w-140">
                    <h1 className="text-[#224f34] text-4xl md:text-[4rem] lg:text-[4.5rem] font-bold font-['Rufina']">Uygun Fiyatlı Ürün Satışı</h1>
                    <p className="mt-5 mb-12 text-[#267d49] text-2xl font-medium font-['Poppins'] leading-[50px]">
                        Piyasanın alt fiyatına ürünlerinizi tedarik edebilirsiniz
                    </p>
                    <button className="px-16 py-5 text-white text-xl font-medium font-['Poppins'] uppercase bg-[#224e34] rounded-[3px] shadow-[6px_33px_59px_0px_rgba(0,0,0,0.30)] cursor-pointer">Detayları Gör</button>
                </div>
                <div className="mx-auto lg:mx-0 lg:w-140">
                    <img className="w-full" src={HeroImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default MainHero;