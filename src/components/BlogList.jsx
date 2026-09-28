import BlogCard from "./BlogCard";

function BlogList({ blogs, onDelete, onToggleFeatured }) {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onDelete={onDelete}
          onToggleFeatured={onToggleFeatured}
        />
      ))}
    </div>
  );
}

export default BlogList;