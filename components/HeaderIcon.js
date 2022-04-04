import React from "react"

function HeaderIcon({ Icon, active }) {
  return (
    <div className={`${active && "border-b-4 border-blue-500"}`}>
      <div className={`hidden sm:flex px-4 py-3 items-center cursor-pointer ${!active && "hover:bg-gray-100"} rounded-xl active:border-b-2 active:border-blue-500 group`}>
        <div className="">
          <Icon
            className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active &&
              "text-blue-500"}`}
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderIcon
