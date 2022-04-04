import Image from "next/image"
import React from "react"
import { signIn } from "next-auth/react"

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={() => signIn("google")}
        className="p-5 bg-white rounded-full border shadow-lg text-center cursor-pointer"
      >
        Login in with Google
      </h1>
    </div>
  )
}

export default Login
