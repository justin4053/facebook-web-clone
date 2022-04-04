import Image from "next/image"
import React from "react"

function SidebarRow({ src, Icon, title, buttom }) {
  return (
    <div className="flex items-center min-w-[280px] space-x-3 p-3 hover:bg-gray-200 rounded-xl cursor:pointer">
      {src &&
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />}
      {Icon && <Icon className={`h-8 w-8 text-blue-500 ${buttom && "text-black"}`} />}
      <p className="hidden sm:inline-flex font-medium">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
