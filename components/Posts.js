import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "../firebase"
import { collection, orderBy, query } from "firebase/firestore"
import Post from './Post'
function Posts({ posts }) {
    const [realtimePosts, loading, error] = useCollection(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
    )
    return (
        <div>
            {
                realtimePosts ?
                    (realtimePosts?.docs.map(post => (
                        <Post
                            key={post.id}
                            name={post.data().name}
                            email={post.data().email}
                            message={post.data().message}
                            timestamp={post.data().timestamp}
                            avatar={post.data().avatar}
                            postImage={post.data().postImage}
                        />
                    ))) : (
                        posts.map(post => (
                            <Post
                                key={post.id}
                                name={post.name}
                                email={post.email}
                                message={post.message}
                                timestamp={post.timestamp}
                                avatar={post.avatar}
                                postImage={post.postImage}
                            />
                        ))
                    )}
        </div>
    )
}

export default Posts