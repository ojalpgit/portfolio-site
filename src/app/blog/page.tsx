import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Journal — Ojal Prasad",
  description: "Reflections on research, community, and building things at UW-Madison.",
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label mb-4">Journal</p>
          <h1 className="serif text-5xl text-white mb-4">
            Thoughts &amp; <em className="serif-italic">Reflections</em>
          </h1>
          <p className="text-[#666] text-base leading-relaxed mb-16 max-w-xl">
            A space for honest writing about research, community, conferences, and what it
            actually feels like to be figuring things out in real time.
          </p>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="card overflow-hidden flex flex-col sm:flex-row gap-0 hover:border-[#2a2a2a] transition-colors">
                  {post.coverImage && (
                    <div className="relative w-full sm:w-52 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-between gap-4 flex-1">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span key={tag} className="tag text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-white text-xl font-semibold leading-snug mb-2 group-hover:text-[#4d96ff] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#444] text-xs">{post.date}</span>
                      <span className="text-[#4d96ff] text-xs font-medium group-hover:translate-x-1 transition-transform inline-block">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
