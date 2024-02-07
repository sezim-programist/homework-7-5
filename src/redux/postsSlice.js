import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async function () {
        return axios.get("https://dummyjson.com/todos").then(resp => resp.data.todos)
    }
)

export const createPost = createAsyncThunk(
    "resp/createPost",
    async function (info) {
        return axios.post("https://dummyjson.com/todos/add", {todo: info, userId: 5}).then(resp => resp.data.todos)
    }
)

const postsSlice = createSlice({
    name: "postsSlice",
    initialState: {
        posts: [],
        loading: false,
        resp: ""
    },
    reducers: {
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
        addPost: (state, action) => {
            state.posts = [action.payload, ...state.posts]
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        });
        builder.addCase(createPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createPost.fulfilled, (state) => {
            state.loading = false;
            state.resp = "Post created!"
        });
        builder.addCase(createPost.rejected, (state, action) => {
            state.loading = false;
            state.resp = "Error occured!!";
            state.posts = action.payload
        });
    }
})

export default postsSlice.reducer;
export const {deletePost, addPost} = postsSlice.actions