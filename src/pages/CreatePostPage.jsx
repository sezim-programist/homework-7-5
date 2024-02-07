import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../redux/postsSlice'

export default function CreatePostPage() {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()
    const {resp, loading, posts} = useSelector(state => state.postsReducer)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(title))
    }
    console.log(posts);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <button type='submit'>submit</button>
            {loading ? <p>Loading...</p> : <p>{resp}</p>}
            
        </form>
    )
}
