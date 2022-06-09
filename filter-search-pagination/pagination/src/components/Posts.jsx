const Posts = ({ loading, posts }) => {
  if (loading) {
    return (
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden"></span>
      </div>
    );
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li
          className={`list-group-item list-group-item-action ${
            post.id % 2 === 0
              ? 'list-group-item-light'
              : 'list-group-item-success'
          }`}
          key={post.id}
        >
          <span className={`rounded p-2 ${post.id % 2 === 0 ? 'bg-dark text-light' : 'bg-info'}`}>{post.id}</span>
          <span> </span>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
