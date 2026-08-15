import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import './global-hero.css';
import { getAllPosts } from '../utils/blogPosts';

const BlogPage = () => {
  useEffect(() => {
    document.title = "Island Narratives - Vibrations Poetry Festival";
  }, []);

  const posts = getAllPosts();

  return (
    <div className="blog-coming-soon-container">
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Island Narratives</h1>
          <p>Stories, reviews, and reflections from the vibrant world of Caribbean poetry</p>
        </div>
      </section>

      <section className="blog-preview-content">
        <div className="featured-post-preview">
          <h2>Featured Content</h2>

          {posts.map((post) => (
            <div className="post-card" key={post.slug}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="post-meta">
                <span className="category">{post.category}</span>
                <span className="author">By {post.author}</span>
                <span className="date">
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <Link to={`/blog/${post.slug}`} className="read-review-btn">
                Read Full {post.category === 'Book Review' || post.category === 'Festival Review' ? 'Review' : 'Feature'}
              </Link>
            </div>
          ))}
        </div>

        <div className="coming-soon-section">
          <h2>More Content Coming Soon</h2>
          <p>Stay tuned for exciting updates including cultural essays, literary reviews, and more poet features!</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
