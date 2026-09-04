import React, { useEffect, useState } from "react";
    import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [data,setData]=useState()
  const navigate=useNavigate()
  
  useEffect(function() {
    axios.get('https://abdulazizweb.pythonanywhere.com/profile/')
    
    .then(response=>{
      setData(response.data[0])
    })
    .catch(err=>{
      console.log(err);
      
    })
  },[])

    useEffect(function() {
      const res=localStorage.getItem('style')
      if  (res=='light'){
      setDarkMode(!darck)
      }
    },[])
    function darck(){
      localStorage.removeItem('style')
    localStorage.setItem('style','dark')
    }
    function light(){
      localStorage.removeItem('light')
    localStorage.setItem('style','light')
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


    function home() {
        navigate('/')
    }

    function projects() {
        navigate('/projects')
    }

    function blogs() {
        navigate('/blogs')
    }

    function about() {
        navigate('/about')
    }

    function contact() {
        navigate('/contact')
    }


  return (
    <div>
     {data && (
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
          {data?.first_name.charAt(0).toUpperCase() + data?.first_name.slice(1)}
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

      <main className="flex-1 flex items-center justify-center py-10 sm:py-16">
        <div className="w-full max-w-4xl flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 to-teal-400 shadow-[0_0_40px_rgba(6,182,212,0.35)]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-col text-center sm:text-left justify-center">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight transition-colors
                ${darkMode ? "text-white" : "text-slate-900"}`}
              >
          {data?.first_name.charAt(0).toUpperCase() + data?.first_name.slice(1)+" "}
          {data?.last_name.charAt(0).toUpperCase() + data?.last_name.slice(1)}
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-xl font-normal mt-3
                ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                {data?.job}
              </p>

              <div
                className={`flex items-center justify-center sm:justify-start gap-5 mt-6
                ${darkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                <a
                  href={data?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                <a
                  href={data?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14z" />
                    <path
                      fill="white"
                      d="M8.27 18.5H5.5v-8.37h2.77v8.37zM6.88 8.56a1.68 1.68 0 110-3.36 1.68 1.68 0 010 3.36zM18.5 18.5h-2.75v-4.93c0-1.18-.02-2.7-1.64-2.7-1.64 0-1.89 1.28-1.89 2.61v5.02H9.44v-8.37h2.67v1.14h.04c.37-.7 1.28-1.44 2.64-1.44 2.82 0 3.34 1.86 3.34 4.28v4.39z"
                    />
                  </svg>
                </a>

                <a
                  href={data?.website}
                  className="hover:text-cyan-500 hover:scale-110 transition-all"
                  aria-label="Website"
                >
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </a>

                <a
                  href={data?.email}
                  className="hover:text-cyan-500 hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <a
              onClick={()=>{blogs()}}
              className="text-center px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transition-all"
            >
              Read Blog
            </a>

            <a
              onClick={()=>{about()}}
              className={`text-center px-6 py-3 rounded-xl border font-medium text-sm transition-all
              ${
                darkMode
                  ? "bg-[#0b1322] border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
                  : "bg-white border-cyan-500/40 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-500 shadow-sm"
              }`}
            >
              About Me
            </a>
          </div>
        </div>
      </main>

      <div className="sm:hidden flex justify-center gap-5 pb-5 text-xs">
        {["Projects", "Blog", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`transition-colors ${
              darkMode
                ? "text-slate-400 hover:text-white"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      <footer
        className={`w-full max-w-7xl mx-auto py-5 text-center text-xs border-t transition-colors
        ${
          darkMode
            ? "text-slate-600 border-white/5"
            : "text-slate-400 border-slate-200"
        }`}
      >
        © 2026 abdulaziz.uz
      </footer>
      </div>
     )}
    </div>
  );
}

export default Home;