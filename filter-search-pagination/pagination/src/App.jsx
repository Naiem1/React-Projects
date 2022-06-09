import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [indicator, setIndicator] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);
  
  console.log('indexOfLastPage>>', indexOfLastPage);
  console.log('indexOfFirstPage>>', indexOfFirstPage);
  console.log('currentPosts>>', currentPosts);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Content List</h1>
      <Posts
        posts={currentPosts}
        loading={loading}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default App
