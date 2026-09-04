import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://abdulazizweb.pythonanywhere.com/blog/")
      .then((response) => {
        const foundBlog = response.data.find(
          (item) => item.slug === slug
        );

        setBlog(foundBlog);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060911] text-white flex items-center justify-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#060911] text-white flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">
          Blog topilmadi
        </h1>

        <button
          onClick={() => navigate("/blogs")}
          className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black"
        >
          ← Blogs
        </button>
      </div>
    );
  }

  const date = new Date(blog.created_at);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#060911] text-white px-4 sm:px-8 lg:px-16">
      <main className="mx-auto max-w-4xl py-10 sm:py-16">
        
        <button
          onClick={() => navigate("/blogs")}
          className="mb-8 text-sm text-gray-400 transition hover:text-cyan-400"
        >
          ← Back to blogs
        </button>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {blog.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span>{formattedDate}</span>

          {blog.read_time && (
            <>
              <span>•</span>
              <span>{blog.read_time} min read</span>
            </>
          )}
        </div>

        {blog.image && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-800 bg-[#121824] p-3">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full max-h-[500px] rounded-xl object-cover"
            />
          </div>
        )}

        {blog.description && (
          <p className="mt-8 text-base leading-8 text-gray-400 sm:text-lg">
            {blog.description}
          </p>
        )}

        <article
          className="
            prose prose-invert
            mt-10 max-w-none
            prose-headings:text-white
            prose-p:text-gray-300
            prose-p:leading-8
            prose-li:text-gray-300
            prose-strong:text-white
            prose-a:text-cyan-400
            prose-a:no-underline
            hover:prose-a:underline
            prose-img:rounded-xl
          "
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />

      </main>
    </div>
  );
}

export default BlogDetail;