export default function HeroBanner() {
  return (
    <section className="flex flex-col justify-center relative bg-black h-[325px] z-10 overflow-hidden">
      <img
        className="absolute h-[500px] w-[550px] z-[-1] left-[-140px] opacity-50"
        src="../src/assets/converter.png"
        alt="Converter"
      />
      <div className="text-white text-6xl font-bold px-44 mb-2">PRODUCT LINE</div>
      <div className="text-2xl text-white px-44 opacity-50">Subtitle</div>
      <div className="absolute bg-white h-[95px] w-[90%] bottom-[-75px] left-[-10px] rotate-[3deg]"></div>
      <div className="absolute bg-white h-[95px] w-[90%] right-[-420px] bottom-[-75px] rotate-[-4deg]"></div>
    </section>
  )
}
