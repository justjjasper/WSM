export default function Specs() {
  return (
    <section className="flex flex-col items-center px-44 py-16">
      <div className="text-gray-400 font-bold text-5xl mb-8">SPECS</div>
      <div className="flex w-full h-full justify-evenly">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-8">01 <span className="text-black ml-2">SPEC 01</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-8">02 <span className="text-black ml-2">SPEC 02</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
        </div>

        <img
          className="h-[340px] w-[350px]"
          alt="Converter"
          src="../src/assets/converter.png"
        />

       <div className="flex flex-col justify-between">
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-8">03 <span className="text-black ml-2">SPEC 03</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
          <div>
            <div className="text-gray-400 text-xl font-semibold mb-8">04 <span className="text-black ml-2">SPEC 04</span></div>
            <div className="h-[10px] w-[100px] bg-orange-400"></div>
          </div>
        </div>

      </div>
    </section>
  )
}