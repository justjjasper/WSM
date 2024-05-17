export default function Specs() {
  return (
    <section className="flex flex-col items-center px-14 lg:px-44 py-8 lg:py-16 bg-gradient-to-b from-white to-gray-300">
      <div className="text-gray-400 font-bold text-5xl mb-8">SPECS</div>
      <div className="flex w-full h-full justify-evenly md:flex-row flex-col">
        <div className="flex flex-row md:flex-col justify-between">
          <div>
            <div className="text-gray-400 text-xl md:text-xl font-semibold mb-8">01 <span className="text-black ml-2">SPEC 01</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
          <div>
            <div className="text-gray-400 text-xl md:text-xl font-semibold mb-8">02 <span className="text-black ml-2">SPEC 02</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
        </div>

        <img
          className="h-[340px] w-[350px] hidden md:block"
          alt="Converter"
          src="../src/assets/converter.png"
        />

       <div className="flex flex-row md:flex-col justify-between">
          <div>
            <div className="text-gray-400 text-xl md:text-xl font-semibold mb-8">03 <span className="text-black ml-2">SPEC 03</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
          <div>
            <div className="text-gray-400 text-xl md:text-xl font-semibold mb-8">04 <span className="text-black ml-2">SPEC 04</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
        </div>

        <img
          className="h-[330px] w-[400px] md:hidden self-center mt-10"
          alt="Converter"
          src="../src/assets/converter.png"
        />
      </div>
    </section>
  )
}