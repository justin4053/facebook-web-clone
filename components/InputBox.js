import { useSession } from "next-auth/react"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { db, storage } from "../firebase"
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore"
import { ref, getDownloadURL, uploadString } from "firebase/storage"
function InputBox() {
    const { data: session } = useSession()
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)
    const [imageToPost, setImageToPost] = useState(null)
    const sendPost = async (e) => {
        e.preventDefault()
        if (!inputRef.current.value) return
        const docRef = await addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            avatar: session.user.image,
            timestamp: serverTimestamp()
        })
        const imageRef = ref(storage, `posts/${docRef.id}/image`)
        {
            imageToPost && (
                await uploadString(imageRef, imageToPost, "data_url").then(
                    async (snapshot) => {
                        const downloadURL = await getDownloadURL(imageRef)
                        await updateDoc(doc(db, "posts", docRef.id), {
                            postImage: downloadURL,
                        })
                    }
                )
            )
        }
        inputRef.current.value = ""
        removeImage()
    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }

    return (
        <div className="bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-16">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none placeholder-gray-500"
                        type="text"
                        ref={inputRef}
                        placeholder={`${session.user.name}，在想些什麼？`}
                    />
                    <button hidden type="summit" onClick={sendPost}>
                        Summit
                    </button>
                </form>

            </div>
            {imageToPost && (
                <div>
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img className="h-30 object-contain" src={imageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                </div>
            )}
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:">直播視訊</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:">相片 / 影片</p>
                    <input onChange={addImageToPost}
                        ref={filePickerRef}
                        type="file" hidden />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-400" />
                    <p className="text-xs sm:text-sm xl:">感受 / 活動</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
