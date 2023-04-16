import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    myBlogs: [],
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        fetchBlogsSuccess(state, action) {
            state.blogs = action.payload;
        },
        fetchMyBlogs(state, action) {
            state.myBlogs = action.payload;
        },
        updateBlogsList(state, action) {
            state.blogs = state.blogs.filter((post) => post._id !== action.payload.postId);
            state.myBlogs = state.myBlogs.filter((post) => post._id !== action.payload.postId);
        },
    },
});

export const { fetchBlogsSuccess, updateBlogsList, fetchMyBlogs } = blogSlice.actions;
export default blogSlice.reducer;
