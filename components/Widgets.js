import React, { useState, useEffect } from 'react'
import faker from "@faker-js/faker"
import { VideoCameraIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Contact from './Contact'



function Widgets() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(10)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }))
        setSuggestions(suggestions)
    }, [])
    return (
        <div className="hidden md:flex flex-col w-80 p-2 ml-4 min-w-[200px] h-screen overflow-y-auto">
            <hr />
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-md">聯絡人</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            {suggestions.map(profile => (
                <Contact key={profile.id} src={profile.avaytar} name={profile.name} />
            ))}
        </div>
    )
}

export default Widgets