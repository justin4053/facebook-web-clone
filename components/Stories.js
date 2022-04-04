import React, { useEffect, useState } from "react"
import faker from "@faker-js/faker"
import StroyCard from "./StroyCard"
import { ArrowSmRightIcon } from "@heroicons/react/outline"

function Stories() {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="flex justify-center space-x-1 mx-auto relative">
      {suggestions.map(profile =>
        <StroyCard
          key={profile.id}
          name={profile.name}
          src={faker.image.image()}
          profile={profile.avatar}
        />
      )}
      <div className="relative">
        <ArrowSmRightIcon className="bg-white rounded-full text-gray-500 absolute right-[-15px] top-[40%] border-4 border-white cursor-pointer hover:bg-gray-300 hover:border-gray-300" width={40} height={40} />
      </div>
    </div>
  )
}

export default Stories
