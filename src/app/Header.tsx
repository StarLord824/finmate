
const Header = () => {
    const tabs=[{
        title: "Benefits",
        url: ""
    },{
        title: "Features",
        url: ""
    },{
        title: "Pricing",
        url: ""
    },{
        title: "Testimonials",
        url: ""
    },{
        title: "FAQ's",
        url: ""
    }]
  return (
    <div className="flex items-center justify-around w-full h-1/10 text-white font-bold text-3xl border-b-1 rounded-b-lg mt-4
    bg-white/5 border border-white/20 backdrop-blur-md shadow-lg">
        <div className="mx-6">FinMate.dev</div>
        <div className="flex items-center justify-around text-xl gap-7 text-neutral-500">
            {tabs.map((tab, index) => {
                return <div key={index} className="flex items-center justify-center hover:text-white font-semibold hover:bg-neutral-900 hover:rounded-2xl transition ease-in h-14 w-30">
                    <button><a href={tab.url}>{tab.title}</a></button>
                </div>
            })}
        </div>
        <div className="mx-6">
            <button className="bg-white text-black font-semibold text-xl w-35 h-12 rounded-2xl ">Explore</button>
        </div>
    </div>
  )
}

export default Header