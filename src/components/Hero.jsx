
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect } from "react";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 3500);
    return () => clearTimeout(timeout);
  }, []);

  const particlesOptions = {
    background: { color: "#000000" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: { value: ["#00ff00", "#00cc00"] },
      move: {
        enable: true,
        direction: "bottom",
        speed: 2,
      },
      number: { value: 250 },
      opacity: { value: 0.4 },
      shape: {
        type: "char",
        character: {
          value: ["0", "1", "#", "$", "@"],
          font: "monospace",
          style: "",
          weight: "400",
        },
      },
      size: { value: 12 },
    },
    detectRetina: true,
  };

  return (
    <section className="relative w-full h-screen bg-black text-green-400 font-mono overflow-hidden filter brightness-90 contrast-125">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 gap-10">
  <div className="flex-1 flex flex-col items-start justify-center">
    <h1 className="text-xl md:text-2xl mb-2">
      <span className="text-green-500">shabani@cyberdev</span>:~$
      <span className="ml-2 text-green-400">
        <Typewriter
          words={["whoami"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
        />
      </span>
    </h1>

    {showContent && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4"
      >
        <p className="text-green-300 text-lg md:text-xl mb-4 max-w-2xl">
          <Typewriter
            words={[
              "Cybersecurity Analyst.",
              "Digital Forensics Expert.",
              "Frontend Sorcerer.",
              "Pentester & Network Guard.",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <p className="text-green-200 max-w-xl text-base md:text-lg mb-6">
          <Typewriter
            words={[
              "👾 I’m Shabani, a cybersecurity enthusiast & digital defender. I build secure web interfaces and hunt threats in the shadows.",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={40}
          />
        </p>

        <div className="flex gap-6 mb-6 text-2xl text-green-400">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg border border-green-500 transition shadow-[0_0_15px_#00ff00]"
        >
          <FaBriefcase className="text-lg" /> Hire Me
        </motion.a>

      </motion.div>
    )}
  </div>

  {/* Right-side image */}
  {showContent && (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1.2 }}
      className="flex-1 max-w-sm md:max-w-md lg:max-w-lg"
    >
      <img
        src="/s6.jpg"
        alt="Shabani in cyber mode"
        className="rounded-xl shadow-2xl border border-green-500"
      />
    </motion.div>
  )}
</div>


      <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-green-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-green-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;


// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase } from "react-icons/fa";
// import { Typewriter } from "react-simple-typewriter";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback, useEffect, useState } from "react";

// const searchImages = [
//   "/s1.jpg",
//   "/s2.jpg",
//   "/s3.jpg",
//   "/s4.jpg",
//   "/s5.jpg",
//   "/s6.jpg", // This will be the final "found" image
// ];

// const Hero = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [userFound, setUserFound] = useState(false);

//   useEffect(() => {
//     if (currentImageIndex < searchImages.length - 1) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prev) => prev + 1);
//       }, 300); // Change speed of "scanning" here

//       return () => clearInterval(interval);
//     } else {
//       setUserFound(true);
//     }
//   }, [currentImageIndex]);

//   const particlesOptions = {
//     background: { color: "#000000" },
//     fpsLimit: 60,
//     interactivity: {
//       events: {
//         onHover: { enable: false },
//         onClick: { enable: false },
//         resize: true,
//       },
//     },
//     particles: {
//       color: { value: ["#00ff00", "#00cc00"] },
//       move: {
//         enable: true,
//         direction: "bottom",
//         speed: 2,
//       },
//       number: { value: 250 },
//       opacity: { value: 0.4 },
//       shape: {
//         type: "char",
//         character: {
//           value: ["0", "1", "#", "$", "@"],
//           font: "monospace",
//         },
//       },
//       size: { value: 12 },
//     },
//     detectRetina: true,
//   };

//   return (
//     <section className="relative w-full h-screen bg-black text-green-400 font-mono overflow-hidden">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesOptions}
//         className="absolute inset-0 z-0"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 z-10" />

//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 gap-10">
//         <div className="flex-1 flex flex-col items-start justify-center">
//           <h1 className="text-xl md:text-2xl mb-2">
//             <span className="text-green-500">shabani@cyberdev</span>:~$
//             <span className="ml-2 text-green-400">
//               <Typewriter
//                 words={["whoami"]}
//                 loop={1}
//                 cursor
//                 cursorStyle="_"
//                 typeSpeed={100}
//               />
//             </span>
//           </h1>

//           {userFound && (
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="mt-4"
//             >
//               <p className="text-green-300 text-lg md:text-xl mb-4 max-w-2xl">
//                 <Typewriter
//                   words={[
//                     "Cybersecurity Analyst.",
//                     "Digital Forensics Expert.",
//                     "Frontend Sorcerer.",
//                     "Pentester & Network Guard.",
//                   ]}
//                   loop={0}
//                   cursor
//                   cursorStyle="_"
//                   typeSpeed={60}
//                   deleteSpeed={40}
//                   delaySpeed={1500}
//                 />
//               </p>

//               <p className="text-green-200 max-w-xl text-base md:text-lg mb-6">
//                 <Typewriter
//                   words={[
//                     "👾 I’m Shabani, a cybersecurity enthusiast & digital defender. I build secure web interfaces and hunt threats in the shadows.",
//                   ]}
//                   loop={1}
//                   cursor
//                   cursorStyle="_"
//                   typeSpeed={40}
//                 />
//               </p>

//               <div className="flex gap-6 mb-6 text-2xl text-green-400">
//                 <a href="https://github.com/Mwamtindi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                   <FaGithub />
//                 </a>
//                 <a href="https://www.linkedin.com/in/shabani-mwamtindi/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                   <FaLinkedin />
//                 </a>
//                 <a href="https://x.com/Mwamtindi_jnr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                   <FaTwitter />
//                 </a>
//               </div>

//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.1 }}
//                 className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg border border-green-500 transition shadow-[0_0_15px_#00ff00]"
//               >
//                 <FaBriefcase className="text-lg" /> Hire Me
//               </motion.a>
//             </motion.div>
//           )}
//         </div>
//         <motion.div
//         key={currentImageIndex}
//         initial={{ opacity: 0.2, scale: 1.05 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="flex-1 flex items-center justify-center relative"
//       >
//         <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-400 shadow-[0_0_20px_#00ff00] transition-transform duration-300 hover:scale-105">
//           <img
//             src={searchImages[currentImageIndex]}
//             alt="Scanning..."
//             className="w-full h-full object-cover"
//           />
//           {userFound && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full"
//             >
//               <h2 className="text-2xl md:text-3xl font-bold text-green-400 animate-pulse">
//               {userFound ? " ☠️Identity Verified" : "🔍 Scanning for user..."}
//               </h2>
//             </motion.div>
//           )}
//         </div>
//       </motion.div>
//       </div>

//       <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-green-400 flex justify-center items-start p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="w-3 h-3 rounded-full bg-green-400 mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
