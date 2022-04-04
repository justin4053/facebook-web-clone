import Image from 'next/image'
import React from 'react'
import faker from "@faker-js/faker"


function Contact({ name }) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer">
            <Image
                className="rounded-full"
                objectFit="cover"
                src={faker.image.image()}
                width={35}
                height={35}
                layout="fixed"
            />
            <p>{name}</p>
            <div className="absolute bottom-1 left-4 bg-green-400 h-2 w-2 rounded-full" />
        </div>
    )
}

export default Contact