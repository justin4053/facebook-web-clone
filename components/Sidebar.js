import { useSession } from "next-auth/react"
import React from "react"
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from "@heroicons/react/solid"
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from "@heroicons/react/outline"
import SidebarRow from "./SidebarRow"

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className="hidden lg:inline mt-3 max-w-[600px] xl:min-w-[356px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="朋友" />
      <SidebarRow Icon={UserGroupIcon} title="社團" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="動態回顧" />
      <SidebarRow Icon={ChevronDownIcon} buttom title="顯示更多" />
      <hr className="w-full" />
      <p className="p-3 text-lg text-[#64676B] font-bold">你的捷徑</p>
      <p className="absolute bottom-0 p-2 text-sm text-gray-500">隱私政策・服務條款・廣告・Ad Choices</p>
    </div>
  )
}

export default Sidebar
