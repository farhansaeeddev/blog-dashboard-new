import React from "react";

const BlogCard = React.memo(function BlogCard({
  blog,
  onDelete,
  onToggleFeatured,
}) {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>

      <p>Category: {blog.category}</p>
      <p>Author: {blog.author}</p>
      <p>Reading Time: {blog.readingTime} minutes</p>

      <p>
        Status: {blog.featured ? "⭐ Featured" : "Regular"}
      </p>

      <button onClick={() => onToggleFeatured(blog.id)}>
        {blog.featured ? "Remove Featured" : "Make Featured"}
      </button>

      <button onClick={() => onDelete(blog.id)}>
        Delete
      </button>
    </div>
  );
});

export default BlogCard;