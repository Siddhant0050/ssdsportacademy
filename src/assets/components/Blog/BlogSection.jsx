import { useEffect } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Clock3 } from "lucide-react";
import "./BlogSection.css";

const blogImages = {
  academy: {
    image: "/images/blog/ssd-academy.png",
  },
  coaching: {
    image: "/images/blog/choosing-gymnastics.png",
  },
  benefits: {
    image: "/images/blog/gymnastics-benefits.png",
  },
  training: {
    image: "/images/blog/right-age-gymnastics.png",
  },
};

const articles = [
  {
    id: 1,
    slug: "why-choose-ssd-sport-academy",
    category: "About SSD",
    title: "Why Choose SSD Sport Academy?",
    excerpt:
      "Discover what makes SSD Sport Academy a supportive place for children to learn, train and grow through gymnastics.",
    readTime: "4 min read",
    publishedAt: "2026-11-02",
    ...blogImages.academy,
    imageAlt: "Gymnastics coach leading a class of children at SSD Sport Academy",
    content: [
      {
        heading: "A place where children grow through gymnastics",
        paragraphs: [
          "Choosing the right sports academy is an important decision for every parent. At SSD Sport Academy, children get an opportunity to develop their physical abilities, confidence and discipline through structured gymnastics training.",
          "Our programs are designed for toddlers, children and teenagers, with training that considers each child's age, ability and learning pace.",
        ],
      },
      {
        heading: "Experienced and dedicated coaching",
        paragraphs: [
          "Our coaching team brings experience in artistic and acrobatic gymnastics. Head Coach Somesh Daterao is NIS certified, has a national-level gymnastics background and more than 10 years of coaching experience.",
          "Senior Coach Siddhant Yadav has represented India at the 19th Asian Acrobatic Gymnastics Championship in Uzbekistan and has over six years of experience. Pavan Daterao, a former senior coach, also contributed his experience to the academy.",
        ],
      },
      {
        heading: "A focus on safety and development",
        paragraphs: [
          "Children learn through age-appropriate activities, supervised practice and progressive skill development. Training includes warm-ups, balance, core strength, flexibility, floor exercises, tumbling and gymnastics apparatus.",
          "A supportive training environment helps children build coordination, confidence, concentration and teamwork while learning at their own pace.",
        ],
      },
      {
        heading: "Visit SSD Sport Academy",
        paragraphs: [
          "We are located at Pruthvi Sports Zone, behind Dhanori M.S.E.B. Office, Kamal Park, Dhanori, Pune.",
          "Parents are welcome to enquire about our programs and book a free trial class to experience the training environment.",
        ],
      },
    ],
    cta: "Call 9325017557 to enquire or book a free trial class.",
  },
  {
    id: 2,
    slug: "choose-gymnastics-classes-for-kids",
    category: "Parent's Guide",
    title: "How to Choose the Best Gymnastics Classes for Kids?",
    excerpt:
      "A practical guide to help parents compare coaching, safety, facilities and programs before choosing a gymnastics class.",
    readTime: "5 min read",
    publishedAt: "2026-11-02",
    ...blogImages.coaching,
    imageAlt: "Coach spotting a young gymnast during a handstand lesson",
    content: [
      {
        heading: "Look for qualified and experienced coaches",
        paragraphs: [
          "A good gymnastics class starts with coaches who understand children's physical development and can teach skills progressively. Ask about their qualifications, experience and approach to beginner training.",
        ],
      },
      {
        heading: "Check the training environment",
        paragraphs: [
          "Look for suitable equipment, safety mats, clean training areas and enough space for children to practise. Supervision and clear safety instructions should be part of every session.",
        ],
      },
      {
        heading: "Choose an age-appropriate program",
        paragraphs: [
          "Toddlers, younger children and teenagers have different needs. Choose a program that matches your child's age, confidence and current ability rather than one that rushes children into advanced skills.",
        ],
      },
      {
        heading: "Observe a class or book a trial",
        paragraphs: [
          "A trial class can help you understand how coaches interact with children, how sessions are organised and whether your child feels comfortable in the environment.",
        ],
      },
    ],
    cta: "Visit SSD Sport Academy in Dhanori, Pune, and ask about a free trial class.",
  },
  {
    id: 3,
    slug: "gymnastics-benefits-for-children",
    category: "Gymnastics Benefits",
    title: "7 Benefits of Gymnastics for Growing Children",
    excerpt:
      "Explore how gymnastics can support strength, flexibility, balance, coordination and confidence in children.",
    readTime: "4 min read",
    publishedAt: "2026-11-02",
    ...blogImages.benefits,
    imageAlt: "Young gymnast building strength while practising on rings",
    content: [
      {
        heading: "More than just physical activity",
        paragraphs: [
          "Gymnastics gives children a fun and structured way to move, practise new skills and develop a range of physical abilities. With age-appropriate coaching, it can support well-rounded development.",
        ],
      },
      {
        heading: "Physical skills children can develop",
        paragraphs: [
          "Regular gymnastics practice can help children work on strength, flexibility, balance, coordination, body awareness, agility and posture. Skills are introduced gradually and adapted to the child's ability.",
        ],
      },
      {
        heading: "Confidence, focus and discipline",
        paragraphs: [
          "Learning a new movement takes patience and practice. Small achievements can help children become more confident, focused and comfortable with trying new challenges.",
        ],
      },
      {
        heading: "Enjoy learning at your own pace",
        paragraphs: [
          "Every child develops differently. A positive gymnastics environment encourages effort, safe practice and steady progress rather than comparing children with one another.",
        ],
      },
    ],
    cta: "Explore age-appropriate gymnastics programs at SSD Sport Academy.",
  },
  {
    id: 4,
    slug: "right-age-to-start-gymnastics",
    category: "For Parents",
    title: "What Is the Right Age to Start Gymnastics?",
    excerpt:
      "Understand how children can begin with basic movement activities and progress to structured gymnastics training.",
    readTime: "4 min read",
    publishedAt: "2026-11-02",
    ...blogImages.training,
    imageAlt: "Coach safely supporting a young child during gymnastics practice",
    content: [
      {
        heading: "There is no single perfect age",
        paragraphs: [
          "Children develop at different rates, so the right time to begin depends on their age, interest, readiness and the type of program available. Many academies offer introductory movement activities for younger children and structured classes for older age groups.",
        ],
      },
      {
        heading: "Start with the basics",
        paragraphs: [
          "For beginners, sessions may focus on simple movements, balance, coordination, flexibility and following instructions. More advanced skills should only be introduced when a child is ready and under appropriate supervision.",
        ],
      },
      {
        heading: "Look for a child-friendly approach",
        paragraphs: [
          "Choose a program that makes learning enjoyable, gives children time to practise and adapts activities to their abilities. Children should never be pressured to perform skills before they are ready.",
        ],
      },
      {
        heading: "Talk to the coach",
        paragraphs: [
          "A coach can help you understand which group is suitable for your child and what to expect from the sessions. A trial class is a useful way to see whether the environment is a good fit.",
        ],
      },
    ],
    cta: "Contact SSD Sport Academy to discuss a suitable program for your child.",
  },
];

function ArticleImage({ article, priority = false }) {
  return (
    <img
      src={article.image}
      alt={article.imageAlt}
      width="1536"
      height="1024"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={(event) => {
        event.currentTarget.hidden = true;
        const imageFrame = event.currentTarget.closest(
          ".blog-card-image, .blog-article-image",
        );
        if (imageFrame) imageFrame.dataset.imageError = "true";
      }}
    />
  );
}

function BlogArticle({ article, onNavigate }) {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.href;
    const articleUrl = `${window.location.origin}/blog/${article.slug}`;
    const articleDescription = article.excerpt;
    document.title = `${article.title} | SSD Sport Academy`;
    description?.setAttribute("content", articleDescription);
    canonical?.setAttribute("href", articleUrl);

    const openGraph = [
      ["og:title", document.title],
      ["og:description", articleDescription],
      ["og:type", "article"],
      ["og:url", articleUrl],
      ["og:image", new URL(article.image, window.location.origin).href],
      ["article:published_time", article.publishedAt],
    ];
    const previousOpenGraph = openGraph.map(([property]) => {
      const meta = document.querySelector(`meta[property="${property}"]`);
      return { meta, content: meta?.content };
    });
    openGraph.forEach(([property, content]) => {
      document
        .querySelector(`meta[property="${property}"]`)
        ?.setAttribute("content", content);
    });
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: articleDescription,
      image: new URL(article.image, window.location.origin).href,
      datePublished: article.publishedAt,
      mainEntityOfPage: articleUrl,
      publisher: {
        "@type": "Organization",
        name: "SSD Sport Academy",
        url: window.location.origin,
      },
    });
    document.head.append(structuredData);

    return () => {
      structuredData.remove();
      document.title = previousTitle;
      if (previousDescription !== undefined) {
        description?.setAttribute("content", previousDescription);
      }
      if (previousCanonical !== undefined) {
        canonical?.setAttribute("href", previousCanonical);
      }
      previousOpenGraph.forEach(({ meta, content }) => {
        if (content !== undefined) meta?.setAttribute("content", content);
      });
    };
  }, [article]);

  return (
    <article className="blog-article-page">
      <div className="blog-article-container">
        <a
          href="/blog"
          className="blog-back-link"
          onClick={(event) => handleBlogNavigation(event, "/blog", onNavigate)}
        >
          <ArrowLeft size={17} />
          Back to Blogs
        </a>
        <header className="blog-article-header">
          <span className="blog-category">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="blog-article-excerpt">{article.excerpt}</p>
          <div className="blog-article-meta">
            <span><CalendarDays size={16} /><time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</time></span>
            <span><Clock3 size={16} />{article.readTime}</span>
          </div>
        </header>
        <div className="blog-article-image"><ArticleImage article={article} priority /></div>
        <div className="blog-article-content">
          {article.content.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <aside className="blog-article-cta">
            <p>{article.cta}</p>
            <a href="tel:9325017557">Call SSD Sport Academy</a>
          </aside>
        </div>
        <section className="blog-related" aria-labelledby="blog-related-title">
          <div className="blog-related-heading">
            <span className="blog-eyebrow">KEEP EXPLORING</span>
            <h2 id="blog-related-title">Related <span>Articles</span></h2>
          </div>
          <div className="blog-grid blog-related-grid">
            {articles.filter((item) => item.slug !== article.slug).slice(0, 3).map((related) => (
              <BlogCard key={related.slug} article={related} onNavigate={onNavigate} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function handleBlogNavigation(event, href, onNavigate) {
  if (
    !onNavigate ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) return;
  event.preventDefault();
  onNavigate(href);
}

function BlogCard({ article, onNavigate }) {
  const href = `/blog/${article.slug}`;

  return (
    <article className="blog-card">
      <a
        className="blog-card-image"
        href={href}
        aria-label={`Read ${article.title}`}
        onClick={(event) => handleBlogNavigation(event, href, onNavigate)}
      >
        <ArticleImage article={article} />
      </a>
      <div className="blog-card-content">
        <span className="blog-card-category">{article.category}</span>
        <div className="blog-card-meta">
          <CalendarDays size={14} />
          <time dateTime={article.publishedAt}>{new Date(`${article.publishedAt}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</time>
          <span className="blog-read-time">{article.readTime}</span>
        </div>
        <h3><a href={href} onClick={(event) => handleBlogNavigation(event, href, onNavigate)}>{article.title}</a></h3>
        <p>{article.excerpt}</p>
        <a
          className="blog-read-more"
          href={href}
          onClick={(event) => handleBlogNavigation(event, href, onNavigate)}
        >
          Read Article <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default function BlogSection({ slug, onNavigate }) {
  const article = slug ? articles.find((item) => item.slug === slug) : null;

  if (slug && article) {
    return <BlogArticle article={article} onNavigate={onNavigate} />;
  }

  if (slug) {
    return (
      <section className="blog-not-found">
        <BookOpen size={38} aria-hidden="true" />
        <h1>Article not found</h1>
        <p>That article may have moved. Browse our latest gymnastics insights instead.</p>
        <a href="/blog" onClick={(event) => handleBlogNavigation(event, "/blog", onNavigate)}>Back to Blogs</a>
      </section>
    );
  }

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div className="blog-section-heading">
          <span className="blog-eyebrow">KNOW MORE • LEARN MORE</span>
          <h2>
            Gymnastics <span>Insights</span>
          </h2>
          <p>
            Helpful tips, expert guidance and useful information to help
            parents make confident choices for their children's gymnastics
            journey.
          </p>
        </div>

        <div className="blog-grid">
          {articles.map((item) => <BlogCard key={item.slug} article={item} onNavigate={onNavigate} />)}
        </div>

        <div className="blog-bottom-note">
          <span>Have questions about gymnastics classes?</span>
          <a href="/blog" onClick={(event) => handleBlogNavigation(event, "/blog", onNavigate)}>View all articles</a>
        </div>
      </div>
    </section>
  );
}