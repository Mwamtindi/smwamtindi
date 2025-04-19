import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

const Tech = () => {
  return (
    <>
      <div className="lg:hidden flex flex-wrap justify-center gap-4">
        {technologies.map((technology) => (
          <img
            key={technology.name}
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain"
          />
        ))}
      </div>

      <div className="hidden lg:flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Tech, "");
