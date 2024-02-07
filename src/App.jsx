import './App.css'
import PostsPage from './pages/PostsPage'
import CreatePostPage from './pages/CreatePostPage'
import { Routes, Route, NavLink } from "react-router-dom"
import { fetchPosts } from './redux/postsSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPosts())
}, [])
  return (
    <>
      <NavLink to={"/"}>Posts</NavLink>
      <NavLink to={"create-post"}>Create post</NavLink>
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/create-post' element={<CreatePostPage />} />
      </Routes>
    </>
  )
}

export default App
