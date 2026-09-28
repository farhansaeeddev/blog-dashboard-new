function BlogStats({ blogs }) {
  const featuredBlogs = blogs.filter((blog) => blog.featured).length;

  return (
    <div className="stats">
      <p>Total Blogs: {blogs.length}</p>
      <p>Featured Blogs: {featuredBlogs}</p>
    </div>
  );
}

export default BlogStats;