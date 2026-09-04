import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Projects() {
  const [darkMode, setDarkMode] = useState(true);
  const [data, setData] = useState();
  const [leng, Setleng] = useState();
  const [selectedProject, setSelectedProject] = useState(null);

  const navigate = useNavigate();

  console.log(data);

  useEffect(function () {
    axios
      .get("https://abdulazizweb.pythonanywhere.com/project/")
      .then((response) => {
        setData(response.data);
        Setleng(response.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function to(params) {
    navigate("/projects");
  }

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

  function home(params) {
    navigate("/");
  }

  function blogs(params) {
    navigate("/blogs");
  }

  function about(params) {
    navigate("/about");
  }

  function contact(params) {
    navigate("/contact");
  }

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div
      className={`min-h-screen 
    ${
      darkMode
        ? "bg-[#060911] text-white bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]"
        : "bg-[#f8fafc] text-slate-900 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)]"
    }
    bg-[#0b101b] px-6 text-white`}
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
                to();
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

      <main
        className={`mx-auto w-full max-w-7xl sm:px-6 md:py-16 lg:px-8 transition-colors duration-300`}
      >
        <div className="mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects
          </h1>

          <p
            className={`mt-3 max-w-xl text-sm leading-relaxed sm:text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Backend architecture, high-performance APIs, and scalable web
            applications.
          </p>
        </div>

        {data &&
          data.map((e, k) => {
            if ((k + 1) % 2 == 1) {
              return (
                <div
                  key={e.id}
                  className={`grid items-center gap-8 border-b py-10 sm:gap-10 md:grid-cols-2 md:gap-12 ${
                    darkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(e)}
                    className={`order-1 overflow-hidden rounded-xl border p-3 sm:rounded-2xl sm:p-4 md:order-1 cursor-pointer group ${
                      darkMode
                        ? "border-gray-700 bg-[#121824]"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <img
                      src={e.image}
                      alt={e.title}
                      className="mx-auto h-48 max-w-full rounded-xl object-cover sm:h-56 md:h-52 lg:h-64 transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="order-2 md:order-2">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {e.title}
                    </h2>

                    <p
                      className={`mt-3 max-w-lg text-sm leading-relaxed sm:text-base ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {e.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedProject(e)}
                        className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-[#071018] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 sm:px-5 sm:py-3 sm:text-sm"
                      >
                        Details →
                      </button>

                      {e.git_hub && (
                        <button
                          onClick={() =>
                            window.open(e.project_url, "_blank")
                          }
                          className={`rounded-lg border px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:py-3 sm:text-sm ${
                            darkMode
                              ? "border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-100"
                          }`}
                        >
                          ↗ Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            if ((k + 1) % 2 == 0) {
              return (
                <div
                  key={e.id}
                  className={`grid items-center gap-8 border-b py-10 sm:gap-10 md:grid-cols-2 md:gap-12 ${
                    darkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(e)}
                    className={`order-1 overflow-hidden rounded-xl border p-3 sm:rounded-2xl sm:p-4 md:order-2 cursor-pointer group ${
                      darkMode
                        ? "border-gray-700 bg-[#121824]"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <img
                      src={e.image}
                      alt={e.title}
                      className="mx-auto h-48 max-w-full rounded-xl object-cover sm:h-56 md:h-52 lg:h-64 transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {e.title}
                    </h2>

                    <p
                      className={`mt-3 max-w-lg text-sm leading-relaxed sm:text-base ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {e.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedProject(e)}
                        className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-[#071018] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 sm:px-5 sm:py-3 sm:text-sm"
                      >
                        Details →
                      </button>

                      {e.project_url && (
                        <button
                          onClick={() =>
                            window.open(e.project_url, "_blank")
                          }
                          className={`rounded-lg border px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:py-3 sm:text-sm ${
                            darkMode
                              ? "border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                              : "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-100"
                          }`}
                        >
                          ↗ Live Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </main>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl ${
              darkMode
                ? "bg-[#090d15] border-gray-800 text-white"
                : "bg-white border-gray-200 text-slate-900"
            }`}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border text-xl transition ${
                darkMode
                  ? "border-gray-700 bg-black/60 text-gray-300 hover:bg-white/10 hover:text-white"
                  : "border-gray-200 bg-white/80 text-gray-600 hover:bg-gray-100"
              }`}
            >
              ×
            </button>

            <div className="p-3 sm:p-5">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[420px] rounded-xl object-cover"
              />
            </div>

            <div className="px-5 pb-6 sm:px-8 sm:pb-8">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                {selectedProject.title}
              </h2>

              {selectedProject.description && (
                <p
                  className={`mt-4 text-sm leading-7 sm:text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {selectedProject.description}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {Object.entries(selectedProject).map(([key, value]) => {
                  if (
                    key === "id" ||
                    key === "image" ||
                    key === "title" ||
                    key === "description" ||
                    value === null ||
                    value === undefined ||
                    value === ""
                  ) {
                    return null;
                  }

                  if (key === "project_url" || key === "git_hub") {
                    return null;
                  }

                  return (
                    <div
                      key={key}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        darkMode
                          ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-300"
                          : "border-cyan-200 bg-cyan-50 text-cyan-700"
                      }`}
                    >
                      <span className="font-semibold">
                        {key
                          .replaceAll("_", " ")
                          .replace(/\b\w/g, (char) =>
                            char.toUpperCase()
                          )}
                        :
                      </span>{" "}
                      {typeof value === "object"
                        ? JSON.stringify(value)
                        : String(value)}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {selectedProject.project_url && (
                  <button
                    onClick={() =>
                      window.open(selectedProject.git_hub, "_blank")
                    }
                    className="rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-[#071018] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
                  >
                    ↗ Live Demo
                  </button>
                )}

                {selectedProject.git_hub && (
                  <button
                    onClick={() =>
                      window.open(selectedProject.git_hub, "_blank")
                    }
                    className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                      darkMode
                        ? "border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-white/5"
                        : "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    GitHub ↗
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;