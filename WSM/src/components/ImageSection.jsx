export default function ImageSection() {
  const imgSrc = "../src/assets/converter.png";

  return (
    <section className="grid grid-cols-2 xl:grid-cols-3 gap-4 px-14 lg:px-44 py-8 lg:py-16">
      {[...Array(6)].map((_, i) => {
        if (i === 4) {
          return (
            <div key={i} className="relative overflow-hidden flex items-center justify-center w-[200px] h-[200px] lg:w-[350px] lg:h-[300px] bg-gray-200 lg:text-2xl text-white font-semibold bg-gradient-to-b from-black to-gray-500">
             <img src={imgSrc} alt="Converter" className="absolute h-[110%] w-[110%] opacity-50 bottom-[-80px] left-[-100px]" />

             <div className="mt-auto pb-4 lg:pb-8">
               <span className="relative text-orange-400">10R80<span className="relative text-white">  XPL PRO-LOC</span></span>
               <div className="relative">BILLET TORQUE</div>
               <div className="relative">CONVERTER 260MM</div>
             </div>
            </div>
          )
        }
        return (
          <div key={i} className="flex items-center justify-center w-[200px] h-[200px] lg:w-[350px] lg:h-[300px] bg-gray-200 bg-gradient-to-b from-black to-gray-500">
            <img src={imgSrc} alt="Converter" className="h-[80%] w-[80%]" />
          </div>
        )})}
    </section>
  )
}
