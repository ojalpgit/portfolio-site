import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ojal Prasad`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#444] hover:text-white text-sm transition-colors mb-12"
          >
            ← Back to Journal
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span key={tag} className="tag text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="serif text-[clamp(2rem,5vw,3rem)] text-white leading-[1.15] mb-4">
              {post.title}
            </h1>
            <p className="text-[#444] text-sm">{post.date}</p>
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-12 border border-[#1a1a1a]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <article className="space-y-6">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-[#888] text-base leading-[1.95]">
                {para}
              </p>
            ))}
          </article>

          {/* Extra images (Cursor post) */}
          {post.images && post.images.length > 0 && (
            <div className="mt-14 grid grid-cols-2 gap-3">
              {post.images.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#1a1a1a]"
                >
                  <Image src={src} alt={`Photo ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex justify-between items-center">
            <Link
              href="/blog"
              className="text-[#444] hover:text-white text-sm transition-colors"
            >
              ← All posts
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
