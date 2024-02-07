import React, { useState } from 'react'
import { addPost, deletePost, fetchPosts } from '../redux/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function PostsPage() {

    const { posts, loading } = useSelector(state => state.postsReducer);
    const dispatch = useDispatch()

    const handleDeletePost = (id) => {
        dispatch(deletePost(id))
    }


    console.log(posts);

    const [title, setTitle] = useState('')

    return (
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <button onClick={() => dispatch(addPost({ todo: title, id: Math.random() }))}>add post</button>
            <button onClick={() => dispatch(fetchPosts())}>regenerate posts</button>
            <ul>
                {loading
                    ? <h1>Loading...</h1>

                    : posts.map(post => (
                        <li key={post.id}>{post.todo}
                            <button onClick={() => handleDeletePost(post.id)}>delete</button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}
