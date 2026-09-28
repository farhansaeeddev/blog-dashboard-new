import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: 1,
      title: "Understanding React Hooks",
      category: "React",
      author: "Ali Khan",
      readingTime: 6,
      featured: true,
    },
    {
      id: 2,
      title: "Redux Toolkit Basics",
      category: "Redux",
      author: "Sara Ahmed",
      readingTime: 8,
      featured: false,
    },
    {
      id: 3,
      title: "Building Blog UI in React",
      category: "React",
      author: "Hamza Malik",
      readingTime: 5,
      featured: false,
    },
    {
      id: 4,
      title: "Node.js and Express Introduction",
      category: "Node",
      author: "Ayesha Noor",
      readingTime: 7,
      featured: true,
    },
  ],
  searchText: "",
  selectedCategory: "All",
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },

    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(
        (blog) => blog.id !== action.payload
      );
    },

    toggleFeatured: (state, action) => {
      const blog = state.blogs.find(
        (blog) => blog.id === action.payload
      );

      if (blog) {
        blog.featured = !blog.featured;
      }
    },

    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addBlog,
  deleteBlog,
  toggleFeatured,
  setSearchText,
  setCategory,
  setLoading,
  setError,
} = blogSlice.actions;

export default blogSlice.reducer;