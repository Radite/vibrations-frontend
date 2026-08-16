import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';
import { getPostBySlug } from '../utils/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 100);

    const progressBar = document.querySelector('.reading-progress-bar');
    const updateReadingProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / totalHeight) * 100;
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };
    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} - Vibrations Poetry Festival`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      <div className="reading-progress">
        <div className="reading-progress-bar"></div>
      </div>

      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1>{post.title}</h1>
          <div className="blog-author">
            <div className="author-image placeholder"></div>
            <div className="author-info">
              <span className="author-name">{post.author}</span>
              <span className="author-title">{post.authorTitle}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`blog-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="content-container">
          {post.image ? (
            post.imageLink ? (
              <a href={post.imageLink} target="_blank" rel="noopener noreferrer">
                <div className="blog-featured-image">
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </a>
            ) : (
              <div className="blog-featured-image">
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )
          ) : (
            <div className="blog-featured-image placeholder"></div>
          )}
          {post.imageCaption && <div className="image-caption">{post.imageCaption}</div>}

          <article className="blog-article">
            <ReactMarkdown
              components={{
                pre: ({ node, ...props }) => <div className="poetry-example" {...props} />,
                code: ({ node, ...props }) => <p style={{ whiteSpace: 'pre-wrap' }} {...props} />,
              }}
            >
              {post.body}
            </ReactMarkdown>

            {post.ctaText && (
              <div className="highlighted-section">
                {post.ctaHeading && <h3>{post.ctaHeading}</h3>}
                <p>{post.ctaText}</p>
                {post.ctaLinkUrl && post.ctaLinkText && (
                  <Link to={post.ctaLinkUrl} className="link-button">{post.ctaLinkText}</Link>
                )}
              </div>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="article-footer">
                <div className="tags">
                  {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
