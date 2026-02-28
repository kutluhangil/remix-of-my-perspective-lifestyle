import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Notion-style header */}
        <div className="mb-12 animate-slide-up">
          <span className="text-5xl mb-4 block">📝</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Build in Public
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Projelerimi geliştirirken neler öğrendiğimi, hangi kararları neden aldığımı ve karşılaştığım zorlukları paylaşıyorum.
          </p>
          <div className="h-px bg-border mt-8" />
        </div>

        {/* Blog post list — Notion style */}
        <div className="space-y-2">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`group block rounded-xl px-4 py-4 -mx-4 hover:bg-muted/50 transition-colors animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5 flex-shrink-0">{post.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-base sm:text-lg font-semibold group-hover:text-accent transition-colors leading-snug mb-1.5">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <div className="flex gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1.5 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
