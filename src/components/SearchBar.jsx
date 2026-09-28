import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setCategory } from "../redux/blogSlice";

function SearchBar({ inputRef }) {
  const dispatch = useDispatch();

  const searchText = useSelector(
    (state) => state.blogs.searchText
  );

  const category = useSelector(
    (state) => state.blogs.selectedCategory
  );

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search blogs..."
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />

      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="Redux">Redux</option>
        <option value="Node">Node</option>
      </select>
    </div>
  );
}

export default SearchBar;