import { downVectorSVG } from "../assets/dashboardSVG.jsx"

export default function Header() {
  return (
    <section className="flex items-center justify-between px-44 bg-black h-[70px]">
      <div className="text-white font-bold text-3xl">WSM</div>
      <div className="">
        <ul className="flex text-white gap-4">
          <li className="flex items-center gap-1  hover:cursor-pointer hover:text-gray-500">
            Products
            {downVectorSVG}
          </li>
          <li className="flex items-center gap-1  hover:cursor-pointer hover:text-gray-500">
            Services
            {downVectorSVG}
          </li>
          <li className="hover:cursor-pointer hover:text-gray-500">Contact Us</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Media</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Gallery</li>
        </ul>
      </div>
    </section>
  )
}
