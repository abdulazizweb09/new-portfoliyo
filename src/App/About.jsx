import React, { useEffect, useState } from "react";
    import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function About() {
    const [darkMode, setDarkMode] = useState(true)
  const navigate=useNavigate()
  const [data, setData] = useState()
const [skills, setSkills] = useState([])
const [tools, setTools] = useState([])
  console.log(data);
  useEffect(() => {
  axios
    .get("https://abdulazizweb.pythonanywhere.com/profile/")
    .then((response) => {
      setData(response.data[0])
    })
    .catch((err) => {
      console.log(err)
    })

  axios
    .get("https://abdulazizweb.pythonanywhere.com/skill/")
    .then((response) => {
      setSkills(response.data.filter((item) => item.is_active))
    })
    .catch((err) => {
      console.log(err)
    })

  axios
    .get("https://abdulazizweb.pythonanywhere.com/tool/")
    .then((response) => {
      setTools(response.data.filter((item) => item.is_active))
    })
    .catch((err) => {
      console.log(err)
    })
}, [])


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
        navigate('/')
    }

    function projects(params) {
        navigate('/projects')
    }

    function blogs(params) {
        navigate('/blogs')
    }

    function about(params) {
        navigate('/about')
    }

    function contact(params) {
        navigate('/contact')
    }

    function to(link) {
      window.location.href=link
    }

  return (
    <div
     className={`min-h-screen w-full flex flex-col justify-between font-sans transition-colors duration-300
      ${
        darkMode
          ? "bg-[#060911] text-white bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)]"
          : "bg-[#f8fafc] text-slate-900 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)]"
      }
      bg-[size:38px_38px] px-4 sm:px-8 lg:px-16`}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-5">
        <a
          onClick={()=>{home()}}
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
              onClick={()=>{projects()}}
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
          onClick={()=>{blogs()}}

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

          onClick={()=>{about()}}
              
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
          onClick={()=>{contact()}}
              
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
                className="w-5 h-5 "
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
     {data && (
     <main className="mx-auto w-full py-12 max-w-7xl">

    <div className="flex flex-col-reverse gap-6 border-b border-gray-200 pb-6 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
           {data?.first_name.charAt(0).toUpperCase() + data?.first_name.slice(1)+" "}
          {data?.last_name.charAt(0).toUpperCase() + data?.last_name.slice(1)}
        </h1>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span className="font-semibold text-cyan-500">
            {data?.job}
          </span>

          <span
            className={`hidden sm:inline ${
              darkMode ? "text-gray-600" : "text-gray-400"
            }`}
          >
            •
          </span>

          <span
            className={`${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            📍 {data?.location}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-500 transition hover:bg-cyan-500/20">
            ⇩ CV (PDF)
          </button>
        </div>
      </div>

      <div
        className={`flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 sm:h-24 sm:w-24 ${
          darkMode
            ? "border-cyan-500/40 bg-[#121824]"
            : "border-cyan-400 bg-gray-100"
        }`}
      >
        <img
          src={data?.avatar}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    <section className="py-7">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-cyan-500">♙</span>

        <h2 className="text-sm font-bold uppercase">
          Summary
        </h2>

        <div
          className={`h-px flex-1 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        />
      </div>

      <p
        className={`max-w-3xl text-sm leading-7 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`} dangerouslySetInnerHTML={{
    __html: data.bio
  }}
      >
        
      </p>
    </section>

    <section className="py-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-cyan-500">▣</span>

        <h2 className="text-sm font-bold uppercase">
          Experience
        </h2>

        <div
          className={`h-px flex-1 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div>
        

          <p
            className={`mt-2 text-xs ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Not yet
          </p>
        </div>

        <span
          className={`font-mono text-xs ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          
        </span>
      </div>
    </section>

    <section className="py-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-cyan-500">◇</span>

        <h2 className="text-sm font-bold uppercase">
          Education
        </h2>

        <div
          className={`h-px flex-1 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        />
      </div>

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold">
            Codial IT Academy
          </h3>

          <p className="mt-1 text-sm font-medium text-cyan-500">
            Junior - Python
          </p>

          <p
            className={`mt-2 text-xs ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Python Developer
          </p>
        </div>

        <span
          className={`font-mono text-xs ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          2025 — 2026
        </span>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold">
            Najot talim IT Academy
          </h3>

          {/* <p className="mt-1 text-sm font-medium text-cyan-500">
            Bachelor - Computer Engineering
          </p> */}

          <p
            className={`mt-2 text-xs ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Frontend Developer
          </p>
        </div>

        <span
          className={`font-mono text-xs ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          2023 — 2024
        </span>
      </div>
    </section>

    <section className="py-7">
      <div className="mb-5 flex items-center gap-3">
        <span className="text-cyan-500">⌘</span>

        <h2 className="text-sm font-bold uppercase">
          Skills & Technologies
        </h2>

        <div
          className={`h-px flex-1 ${
            darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
        />
      </div>

      <div className="mb-6">
        <p
          className={`mb-3 text-xs font-semibold ${
            darkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          Backend & Database
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill,k) => (
            <span
              key={k}
              className={`rounded border px-2.5 py-1 font-mono text-[10px] sm:text-xs ${
                darkMode
                  ? "border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                  : "border-cyan-500/30 bg-cyan-50 text-cyan-700"
              }`}
            >
              {skill?.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p
          className={`mb-3 text-xs font-semibold ${
            darkMode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          Tools & Environment
        </p>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool,k) => (
            <span
              key={k}
              className={`rounded border px-2.5 py-1 font-mono text-[10px] sm:text-xs ${
                darkMode
                  ? "border-gray-700 bg-white/[0.03] text-gray-300"
                  : "border-gray-300 bg-gray-50 text-gray-700"
              }`}
            >
              {tool?.name}
            </span>
          ))}
        </div>
      </div>
    </section>

    </main>
     )}
      
    </div>
  )
}

export default About

