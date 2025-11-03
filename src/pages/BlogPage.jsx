import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css'; 

const posts = [
  {
    id: 1,
    title: "Understanding Your Health",
    description: "Learn how to take care of your health with expert tips and advice from medical professionals.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtn9l1-1D4FUKHXR4ThGifPKPTtrmqNvBRzQ&s"
  },
  {
    id: 2,
    title: "Healthy Eating",
    description: "Discover the benefits of a balanced diet and how it impacts your overall health.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4dDareOuVN2-Pvz5_SQdAVHTohvtth3gAg&s"
  },
  {
    id: 3,
    title: "Managing Stress",
    description: "Learn effective strategies to manage stress and improve mental health.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjUxRVj5tqZ76meWn0rzzUpe2bzKpoOl_ag&s"
  },
  {
    id: 4,
    title: "Yoga",
    description: "Learn different yoga poses to acheive a healthy lifestyle.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIvcT-4mLfjIFTdwwakZZuo75fzgixwcOoWg&s"
  }
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">🩺 Medical Blog</h1>
      <p className="blog-subtitle">
        Get the latest updates, health tips, and articles to improve your well-being.
      </p>
      {posts.map((post, index) => (
        <div key={post.id} className="blog-post">
          <div className="blog-image-container">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-content">
            <h2 className="blog-title">Post {post.id}: {post.title}</h2>
            <p className="blog-description">{post.description}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More →</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;