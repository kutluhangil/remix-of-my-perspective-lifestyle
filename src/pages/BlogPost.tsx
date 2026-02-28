import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { getBlogPostById } from "@/data/blogPosts";
import { ArrowLeft, Clock } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPostById(id || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Yazı bulunamadı</h1>
          <Link to="/blog" className="text-accent hover:underline">← Blog'a dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Blog
        </Link>

        {/* Notion-style article header */}
        <div className="mb-10 animate-slide-up">
          <span className="text-5xl mb-4 block">{post.emoji}</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <div className="flex gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="h-px bg-border mt-8" />
        </div>

        {/* Notion-style content blocks */}
        <article className="space-y-6 animate-slide-up stagger-2">
          {post.sections.map((section, i) => {
            if (section.divider) {
              return <div key={i} className="h-px bg-border my-8" />;
            }

            if (section.callout) {
              return (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl bg-muted/50 border border-border/50 p-4"
                >
                  <span className="text-xl flex-shrink-0">{section.callout.emoji}</span>
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {section.callout.text}
                  </p>
                </div>
              );
            }

            if (section.code) {
              return (
                <pre
                  key={i}
                  className="rounded-xl bg-muted/70 border border-border/50 p-4 overflow-x-auto text-sm font-mono"
                >
                  <code>{section.code.code}</code>
                </pre>
              );
            }

            return (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    {section.emoji && <span>{section.emoji}</span>}
                    {section.heading}
                  </h2>
                )}
                {section.content && (
                  <p className="text-foreground/80 leading-relaxed mb-3">
                    {section.content}
                  </p>
                )}
                {section.bullets && (
                  <ul className="space-y-1.5 ml-1">
                    {section.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-foreground/80 text-[15px] leading-relaxed"
                      >
                        <span className="text-muted-foreground mt-1.5 text-[8px]">●</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </article>

        {/* Link to project */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to={`/project/${post.projectId}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
          >
            Projeyi Görüntüle →
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
