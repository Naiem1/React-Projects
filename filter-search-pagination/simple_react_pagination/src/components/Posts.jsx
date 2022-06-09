
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <div className="spinner-border m-5 text-danger" role="status">
    <span className="visually-hidden"></span>
  </div>
  }
  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;