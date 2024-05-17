export default function HeroBanner() {
  return (
    <section className="flex flex-col justify-center relative bg-black h-[325px] z-10 overflow-hidden">
      <img
        className="absolute h-[800px] w-[800px] top-[-100px] md:top-none md:h-[500px] md:w-[550px] z-[-1] left-[-110px] lg:left-[-140px] opacity-50"
        src="../src/assets/converter.png"
        alt="Converter"
      />
      <div className="text-white text-5xl lg:text-6xl font-bold px-14 lg:px-44 mb-2">PRODUCT LINE</div>
      <div className="text-3xl lg:text-2xl font-semibold text-white px-14 lg:px-44 opacity-70">Subtitle</div>
      <div className="absolute bg-white h-[120px] lg:h-[95px] w-[90%] bottom-[-75px] left-[-40px] lg:left-[-10px] rotate-[10deg] lg:rotate-[3deg]"></div>
      <div className="absolute bg-white h-[110px] lg:h-[95px] w-[90%] right-[-250px] lg:right-[-420px] bottom-[-50px] lg:bottom-[-75px] rotate-[-10deg] lg:rotate-[-4deg]"></div>
    </section>
  )
}
