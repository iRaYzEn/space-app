"use client"
import Header from "./Header"
export default function Home() {
    return (
        <body className="page1">
            <Header />
            <main>
                <section className="main-intro flex items-center justify-around  text-white md:items-center mt-[15dvh] flex-wrap">
                    <div className="text-center lg:text-left">
                        <h3 className="text-blue-300 sm:text-[1.5rem] text-[18vm]">SO, YOU WANT TO TRAVEL TO</h3>
                        <h1 className="font-bold sm:text-[10rem] text-[27vw]">SPACE</h1>
                        <p className="text-blue-300 text-[1rem] ">
                            Let’s face it; if you want to go to space, you might as well <br /> genuinely go to outer
                            space and not hover kind of on the <br /> edge  of it. Well sit back, and relax because we’ll
                            give you a <br /> truly out of this world experience!
                        </p>
                    </div>
                    <div >
                        <button className="bg-white text-blue-900 rounded-full sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] text-[1.8rem] mx-auto mt-12
                        ">EXPLORE</button>
                    </div>
                </section>
            </main>
        </body>
    )
}
