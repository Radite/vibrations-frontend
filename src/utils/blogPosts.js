// Loads every JSON file in src/data/blog/ at build time (Create React App / webpack feature).
// Adding a new file there (e.g. via the CMS) automatically creates a new blog post + listing entry.
const context = require.context('../data/blog', false, /\.json$/);

// Defends against a slug being entered as a full path (e.g. "/blog/my-post")
// instead of just "my-post" — otherwise the built link doesn't match any
// route and the page renders blank with no error.
const normalizeSlug = (slug = '') => slug.trim().replace(/^\/*(blog\/)?/, '').replace(/\/+$/, '');

const posts = context.keys().map((key) => {
  const post = context(key);
  return { ...post, slug: normalizeSlug(post.slug) };
});

export const getAllPosts = () =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug);
