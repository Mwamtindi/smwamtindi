// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "education");


// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { education } from "../constants";

// const EducationCard = ({ index, degree, institution, period, description, image }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full shadow-lg'
//   >
//     <img
//       src={image}
//       alt={`${institution}`}
//       className='w-full h-40 object-cover rounded-xl mb-4'
//     />
//     <h3 className='text-white font-semibold text-xl'>{degree}</h3>
//     <p className='text-secondary text-sm mt-1'>{institution}</p>
//     <p className='text-secondary text-xs italic mb-2'>{period}</p>
//     <p className='text-white text-[14px]'>{description}</p>
//   </motion.div>
// );

// const EducationSection = () => {
//   return (
//     <div
//       className={`mt-12 rounded-[20px]`}
//       style={{
//         backgroundImage: `url("https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1350&q=80")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className={`bg-black bg-opacity-70 rounded-2xl ${styles.padding} min-h-[300px]`}>
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>My academic path</p>
//           <h2 className={styles.sectionHeadText}>Education</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {education.map((edu, index) => (
//           <EducationCard key={edu.institution} index={index} {...edu} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(EducationSection, "education");


// import React from "react";
// import { educationTimeline } from "../constants";

// const TimelineCard = ({ year, institution, degree, isLast }) => (
//   <div className="relative pl-10 border-l-2 border-blue-400 mb-10 last:mb-0">
//     <div className="absolute top-0 left-[-8px] w-4 h-4 bg-blue-400 rounded-full"></div>
//     <p className="text-gray-200 text-sm">{year}</p>
//     <h3 className="text-white text-lg font-semibold">{institution}</h3>
//     <p className="text-gray-300 text-sm">{degree}</p>
//   </div>
// );

// const EducationTimeline = () => {
//   return (
//     <section
//       className="w-full bg-cover bg-center relative"
//       style={{ backgroundImage: `url('/admin.jpg')` }} // Make sure educ.PNG is in /public
//     >
//       {/* Overlay with dark tint (optional) */}
//       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//       {/* Content on the right */}
//       <div className="relative z-10 flex justify-end items-center min-h-[600px] px-8 py-16">
//         <div className="w-full md:w-1/2 lg:w-1/3">
//           <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-600 pb-2">
//             Educational Background
//           </h2>
//           {educationTimeline.map((item, index) => (
//             <TimelineCard
//               key={index}
//               {...item}
//               isLast={index === educationTimeline.length - 1}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationTimeline;


import React from "react";
import { educationTimeline } from "../constants";
import { SectionWrapper } from "../hoc";

const TimelineCard = ({ year, institution, degree, isLast }) => (
  <div className="relative mb-10 last:mb-0 flex items-start">
    {/* Left side: Year */}
    <div className="w-1/4 text-right pr-4">
      <p className="text-blue-300 font-semibold">{year}</p>
    </div>

    {/* Timeline dot and line */}
    <div className="relative w-4 flex flex-col items-center">
      <div className="w-4 h-4 bg-blue-400 rounded-full z-10"></div>
      {!isLast && <div className="flex-1 w-1 bg-blue-400 mt-1"></div>}
    </div>

    {/* Right side: Content */}
    <div className="w-3/4 pl-4">
      <h3 className="text-white text-lg font-semibold">{institution}</h3>
      <p className="text-gray-300 text-sm">{degree}</p>
    </div>
  </div>
);

const EducationTimeline = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url('/admin.jpg')` }}
    >
      {/* Overlay with dark tint */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex justify-end items-center min-h-[600px] px-8 py-16">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-primary bg-opacity-70 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-600 pb-2">
          🎓 Educational Background
          </h2>
          {educationTimeline.map((item, index) => (
            <TimelineCard
              key={index}
              {...item}
              isLast={index === educationTimeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default EducationTimeline;
//export default SectionWrapper(EducationTimeline, "education");
