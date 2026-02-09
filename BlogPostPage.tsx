import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium">
            <ChevronLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8 md:p-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} read</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-slate-600">Share this article:</span>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">More from {post.category}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedPost.imageUrl}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-blue-600">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
