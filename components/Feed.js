import React from "react"
import InputBox from "./InputBox"
import Stories from "./Stories"
import Posts from "./Posts"

function Feed({ posts }) {
  return (
    <div className="flex-grow h-screen pt-4 overflow-y-auto scrollbar-hide min-w-[650px]">
      <div className="mx-auto max-w-xl xl:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default Feed
