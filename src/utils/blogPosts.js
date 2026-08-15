// Loads every JSON file in src/data/blog/ at build time (Create React App / webpack feature).
// Adding a new file there (e.g. via the CMS) automatically creates a new blog post + listing entry.
const context = require.context('../data/blog', false, /\.json$/);

const posts = context.keys().map((key) => context(key));

export const getAllPosts = () =>
  [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPostBySlug = (slug) => posts.find((post) => post.slug === slug);
