"use client"
export default function Home() {
    document.body.classList.add("page1");
    return (
        <>
            <section className="main-intro flex items-center justify-around text-white md:items-center md:mt-44 mt-96 mx-[10vw] flex-wrap">
                <div className="md:text-center lg:mt-44 ">
                    <h3 className="text-blue-300 text-[1.5rem]">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className="font-bold text-[10rem]">SPACE</h1>
                    <p className="text-blue-300 text-[1rem] ">
                        Let’s face it; if you want to go to space, you might as well <br /> genuinely go to outer
                        space and not hover kind of on the edge <br /> of it. Well sit back, and relax because we’ll
                        give you a truly out <br />of this world experience!
                    </p>
                </div>
                <div>
                    <button className="bg-white text-blue-900 rounded-full w-[300px] h-[300px] mr-[4em] text-[1.8rem] md:mx-[auto] md:mt-12
                        ">EXPLORE</button>
                </div>
            </section>
        </>
    )
}
