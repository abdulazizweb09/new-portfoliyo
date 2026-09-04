import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Blogs() {
  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://abdulazizweb.pythonanywhere.com/blog/")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  function home() {
    navigate("/");
  }

  function projects() {
    navigate("/projects");
  }

  function blogs() {
    navigate("/blogs");
  }

  function about() {
    navigate("/about");
  }

  function contact() {
    navigate("/contact");
  }

  // Bloglarni yil va oy bo'yicha ajratish
  const groupedBlogs = data.reduce((acc, blog) => {
    const date = new Date(blog.created_at);

    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", {
      month: "long",
    });

    if (!acc[year]) {
      acc[year] = {};
    }

    if (!acc[year][month]) {
      acc[year][month] = [];
    }

    acc[year][month].push(blog);

    return acc;
  }, {});

  // Yillarni yangi -> eski
  const years = Object.keys(groupedBlogs).sort((a, b) => b - a);

  return (
    <div
      className={`min-h-screen w-full flex flex-col gap-10 font-sans transition-colors duration-300
      ${
        darkMode
          ? "bg-[#060911] text-white bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]"
          : "bg-[#f8fafc] text-slate-900 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)]"
      }
      bg-[size:38px_38px] px-4 sm:px-8 lg:px-16`}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-5">
        <a
          onClick={() => {
            home();
          }}
          data-aos="fade-down"
          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors
          ${
            darkMode
              ? "text-white hover:text-cyan-400 cursor-pointer"
              : "text-slate-900 hover:text-cyan-600 cursor-pointer"
          }`}
        >
          Abboskhoja
        </a>

        <div className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
          <div className="hidden sm:flex items-center gap-6">
            <a
              data-aos="fade-down"
              onClick={() => {
                projects();
              }}
              className={`transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white cursor-pointer"
                  : "text-slate-600 hover:text-slate-950 cursor-pointer"
              }`}
            >
              Projects
            </a>

            <a
              data-aos="fade-down"
              onClick={() => {
                blogs();
              }}
              className={`transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white cursor-pointer"
                  : "text-slate-600 hover:text-slate-950 cursor-pointer"
              }`}
            >
              Blog
            </a>

            <a
              data-aos="fade-down"
              onClick={() => {
                about();
              }}
              className={`transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white cursor-pointer"
                  : "text-slate-600 hover:text-slate-950 cursor-pointer"
              }`}
            >
              About
            </a>

            <a
              data-aos="fade-down"
              onClick={() => {
                contact();
              }}
              className={`transition-colors ${
                darkMode
                  ? "text-slate-300 hover:text-white cursor-pointer"
                  : "text-slate-600 hover:text-slate-950 cursor-pointer"
              }`}
            >
              Contact
            </a>
          </div>

          <button
            data-aos="fade-down"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className={`p-2.5 rounded-xl cursor-pointer border transition-all duration-300
            ${
              darkMode
                ? "bg-[#0e1626] border-cyan-500/30 text-cyan-400 hover:border-cyan-400"
                : "bg-white border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 shadow-sm"
            }`}
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M6.34 17.66l-1.41 1.41" />
                <path d="M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="-2 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1012 21a9 9 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl">
        <div className="mb-10 sm:mb-14">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Blog
          </h1>

          <p
            className={`mt-3 text-sm leading-relaxed sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Articles, system design patterns, and backend engineering notes.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_290px] lg:gap-10">
          <div>
            {years.map((year) => {
              const months = Object.keys(groupedBlogs[year]).sort(
                (a, b) => {
                  return (
                    new Date(`${b} 1, ${year}`).getMonth() -
                    new Date(`${a} 1, ${year}`).getMonth()
                  );
                }
              );

              return (
                <div key={year} className="mb-12">
                  <div className="mb-6 flex items-center gap-4">
                    <h2 className="text-xl font-bold sm:text-2xl">
                      {year}
                    </h2>

                    <div
                      className={`h-px flex-1 ${
                        darkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    />
                  </div>

                  {months.map((month) => (
                    <div key={month} className="mb-7">
                      <h3
                        className={`mb-4 text-sm font-semibold tracking-wide ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {month}
                      </h3>

                      {groupedBlogs[year][month].map((blog) => {
                        const date = new Date(blog.created_at);

                        const formattedDate = date.toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          }
                        );

                        return (
                          <div
                            key={blog.id}
                            onClick={() =>
                              navigate(`/blogs/${blog.slug}`)
                            }
                            className={`group flex cursor-pointer items-center gap-3 border-b py-4 transition sm:gap-6 ${
                              darkMode
                                ? "border-gray-800 hover:bg-white/[0.02]"
                                : "border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <span
                              className={`w-24 shrink-0 font-mono text-[11px] sm:text-xs ${
                                darkMode
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }`}
                            >
                              {formattedDate}
                            </span>

                            <p className="flex-1 text-sm font-semibold sm:text-base">
                              {blog.title}
                            </p>

                            {blog.read_time && (
                              <span
                                className={`hidden sm:block text-xs ${
                                  darkMode
                                    ? "text-gray-500"
                                    : "text-gray-400"
                                }`}
                              >
                                {blog.read_time} min
                              </span>
                            )}

                            {/* ARROW */}
                            <span
                              className={`text-lg transition-transform group-hover:translate-x-1 ${
                                darkMode
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }`}
                            >
                              →
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              );
            })}

            {data.length === 0 && (
              <p
                className={`py-10 text-sm ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Hozircha bloglar mavjud emas.
              </p>
            )}
          </div>
          <div className="lg:pt-0">
            <div
              className={`rounded-xl border p-5 sm:p-6 ${
                darkMode
                  ? "border-gray-700 bg-[#121824]"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <h3 className="text-sm font-bold sm:text-base">
                Have questions or ideas?
              </h3>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Feel free to reach out directly via Telegram.
              </p>

              <a
                href="https://t.me/abdulazizweb"
                className="mt-5 block text-sm font-semibold text-cyan-500 transition hover:text-cyan-400"
              >
                @abdulazizweb
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Blogs;