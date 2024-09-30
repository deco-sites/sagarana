import { BlogPost } from "apps/blog/types.ts";

export interface Props {
  post?: BlogPost | null;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326";

export default function MainPost({
  post = {
    slug: "/",
    title: "Featured Blog Post",
    authors: [{ name: "John Doe", email: "john@example.com" }],
    excerpt:
      "Discover the latest insights and trends in our featured blog post. Click to read more!",
    image: DEFAULT_IMAGE,
    date: "2023-06-01",
    categories: [{ name: "Featured", slug: "featured" }],
    content: "Blog Post Content",
  },
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
}: Props) {
  return (
    <section style={{ backgroundColor, color: textColor }} class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-full md:w-1/2">
            <img
              src={post?.image || DEFAULT_IMAGE}
              alt={post?.title}
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="w-full md:w-1/2 space-y-4">
            <h2 class="text-3xl font-bold">{post?.title}</h2>
            <p class="text-lg">{post?.excerpt}</p>
            <div class="flex items-center gap-4">
              <img
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
                alt={post?.authors[0]?.name}
                class="w-10 h-10 rounded-full"
              />
              <div>
                <p class="font-semibold">{post?.authors[0]?.name}</p>
                <p class="text-sm opacity-75">
                  {new Date(post?.date ?? Date.now()).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              {post?.categories?.map((category) => (
                <span key={category.slug} class="badge badge-outline">
                  {category.name}
                </span>
              ))}
            </div>
            <a
              href={`/blog/${post?.slug}`}
              class="btn btn-primary mt-4"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
