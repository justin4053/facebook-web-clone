import Image from "next/image"
import React from "react"
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from "@heroicons/react/solid"
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"
import { signOut, useSession } from "next-auth/react"

function Header() {
  const { data: session } = useSession()

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center px-5 shadow-md w-full">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden flex xl:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex ml-20 space-x-[4vw]">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-2 justify-end">
        {/* Profile pic */}
        <div className="hidden xl:flex items-center space-x-2">
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer hidden"
            src={session.user.image}
            width={30}
            height={30}
            layout="fixed"
          />
          <p className="whitespace-nowrap font-semibold pr-3">
            {session.user.name}
          </p>
        </div>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <div className="relative">
          <BellIcon className="icon" />
          <div className=" flex items-center justify-center absolute top-0 left-7 bg-red-600 h-5 w-5 rounded-full">
            <p className="text-white text-xs">9</p>
          </div>
        </div>
        <div className="relative">
          <ChevronDownIcon className="icon" />
          <div className="absolute top-0 left-7 bg-red-600 h-4 w-4 border-2 border-white  rounded-full" />
        </div>
      </div>
    </div >
  )
}

export default Header
