import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BlogList from "./components/BlogList";
import BlogStats from "./components/BlogStats";
import useFilteredBlogs from "./hooks/useFilteredBlogs";
import {
  deleteBlog,
  toggleFeatured,
  setLoading,
  setError,
} from "./redux/blogSlice";

function App() {
  const dispatch = useDispatch();

  const { blogs, searchText, selectedCategory, loading, error } =
    useSelector((state) => state.blogs);

  const searchInputRef = useRef();

  // Focus search input when page loads
  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  // Filter blogs using custom hook + useMemo
  const filteredBlogs = useFilteredBlogs(
    blogs,
    searchText,
    selectedCategory
  );

  // Delete blog
  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteBlog(id));
    },
    [dispatch]
  );

  // Toggle featured
  const handleToggleFeatured = useCallback(
    (id) => {
      dispatch(toggleFeatured(id));
    },
    [dispatch]
  );

  // Simulated async loading example
  const loadBlogs = () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  };

  return (
    <div className="container">
      <Header />

      <SearchBar inputRef={searchInputRef} />

      <BlogStats blogs={blogs} />

      <button className="load-btn" onClick={loadBlogs}>
        Load Blogs
      </button>

      {loading && <p className="loading">Loading blogs...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && (
        <BlogList
          blogs={filteredBlogs}
          onDelete={handleDelete}
          onToggleFeatured={handleToggleFeatured}
        />
      )}
    </div>
  );
}

export default App;