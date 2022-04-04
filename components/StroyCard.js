import Image from "next/image"
import React from "react"

function StroyCard({ name, src, profile }) {
  return (
    <div className="relative h-60 w-full cursor-pointer p-3 overflow-hidden rounded-xl">
      <Image
        className="absolute z-50 rounded-full ava"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <style jsx>{`
        :global(.ava) {
          border: 4px solid rgb(23,117,242) !important;
        }
      `}</style>
      <Image
        className="object-over filter brightness-100 transition duration-200 transform ease-in hover:scale-105 hover:brightness-75 overflow-hidden"
        src={src}
        layout="fill"
      />
      <p className="absolute bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>

  )
}

export default StroyCard
