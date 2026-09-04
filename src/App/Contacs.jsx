import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
    import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
function Contacs() {
  const [darkMode, setDarkMode] = useState(true);
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState()
  const [subject,setSubject]=useState('')
  const [message,setMessage]=useState('')

const sendData = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.post(
      "https://abdulazizweb.pythonanywhere.com/message/",
      {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

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
          Abdulaziz
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
        
      <main className="min-h-screen mx-auto w-full max-w-7xl py-10 text-gray-900 dark:text-white sm:px-6 sm:pt-16 lg:px-8 transition-colors">

  <section>

    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
      Contact
    </h1>

    <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
      Have a project in mind, a question, or want to collaborate?
      Feel free to reach out anytime.
    </p>

    <div className="mt-8 flex flex-wrap gap-2.5">

      <a
        href="mailto:abdurahimovweb@gmail.com"
        className="flex items-center gap-2 rounded-lg border border-gray-200 text-gray-700 hover:border-cyan-500 darck:hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-[#0d0e12] dark:text-gray-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400 px-3.5 py-2.5 text-sm font-medium transition-all duration-200"
      >
        <svg
          className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        abdurahimovweb@gmail.com
      </a>

      <a
        href="https://t.me/abdulazizweb"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-lg border border-gray-200 text-gray-700 hover:border-cyan-500 darck:hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-[#0d0e12] dark:text-gray-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400 px-3.5 py-2.5 text-sm font-medium transition-all duration-200"

      >
        <svg
          className="h-4 w-4 text-sky-500 dark:text-sky-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.9 4.2L18.8 19c-.2 1.1-.8 1.4-1.7.9l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.4-.1-.6-.6-.2L6.7 13.1 2.1 11.7c-1-.3-1-1 .2-1.5L20.2 3.1c.8-.3 1.9.2 1.7 1.1z" />
        </svg>

        @abdulazizweb
      </a>

      <a
        href="https://github.com/abdulazizweb09"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-lg border border-gray-200 text-gray-700 hover:border-cyan-500 darck:hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-[#0d0e12] dark:text-gray-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400 px-3.5 py-2.5 text-sm font-medium transition-all duration-200"
      >
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A12 12 0 0012 .5z" />
        </svg>

        GitHub
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-lg border border-gray-200 text-gray-700 hover:border-cyan-500 darck:hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-[#0d0e12] dark:text-gray-300 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/5 dark:hover:text-cyan-400 px-3.5 py-2.5 text-sm font-medium transition-all duration-200"

      >
        <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-500 text-[10px] font-bold text-white">
          in
        </span>

        LinkedIn
      </a>

    </div>

  </section>


  <div className="mx-start mt-12 max-w-2xl border-t border-gray-200 dark:border-white/10" />


  <section className="mx-auto mt-10 max-w-7xl">

    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
      Send a Message
    </h2>

    <form onSubmit={sendData} className="mt-6">

      <div className="grid grid-cols-1 w-2xl gap-4 sm:grid-cols-2">

        <input
          type="text"
          name="name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          placeholder="Name *"
          required
          className="h-12 w-full rounded-lg border border-gray-200  text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#11141b] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20 px-3 text-sm outline-none transition focus:ring-1"
        />

        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder="Email *"
          required
          className="h-12 w-full rounded-lg border border-gray-200  text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#11141b] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20 px-3 text-sm outline-none transition focus:ring-1"
        />

      </div>


      <div className="mt-4 grid grid-cols-1 w-2xl gap-4 sm:grid-cols-2">

        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}
          placeholder="Phone (optional)"
          className="h-12 w-full rounded-lg border border-gray-200  text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#11141b] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20 px-3 text-sm outline-none transition focus:ring-1"
        />

        <input
          type="text"
          value={subject}
          onChange={(e)=>{setSubject(e.target.value)}}
          name="subject"
          placeholder="Subject (optional)"
          className="h-12 w-full rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#11141b] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20 px-3 text-sm outline-none transition focus:ring-1"
        />

      </div>


      <textarea
        name="message"
        placeholder="Message *"
        required
        rows="5"
        value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
        className="mt-4 w-2xl resize-none rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#11141b] dark:text-white dark:placeholder:text-gray-500 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20 px-3 py-3 text-sm outline-none transition focus:ring-1"
      />


      <button
      // onClick={sendData}
      typeof='submit'
        type="submit"
        className="mt-4 flex h-11 items-center gap-2 rounded-lg bg-cyan-500 text-white shadow-md hover:bg-cyan-600 dark:bg-cyan-400 dark:text-black dark:shadow-[0_0_20px_rgba(34,211,238,0.35)] dark:hover:bg-cyan-300 dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] px-6 text-sm font-semibold transition-all duration-200 active:scale-95"
      >
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.5 3.5L2.8 10.8c-.8.3-.8 1.4 0 1.7l7 2.6 2.6 7c.3.8 1.4.8 1.7 0l7.3-18.7c.3-.8-.4-1.5-1.1-1.1zM11 14l-6-2.2L18.5 7 11 14z" />
        </svg>

        Send Message
      </button>

    </form>

  </section>

</main>
    </div>
  )
}

export default Contacs