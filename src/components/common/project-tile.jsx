import styles from "./ProjectTile.module.scss";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
//import { IProject } from "../constants"

const ProjectTile = ({ project, animationEnabled }) => {
  const projectCard = useRef(null);
  const {
    name,
    tech,
    image,
    blurImage,
    description,
    gradient: [stop1, stop2],
    url,
  } = project;

  useEffect(() => {
    VanillaTilt.init(projectCard.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
      gyroscope: false,
    });
  }, []);

  const renderTechIcons = (techStack) => (
    <div
      className={`${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden`}
    >
      <div className="flex flex-col pb-8">
        {techStack.map((tech, i) => (
          <div className={`${i % 2 === 0 ? "ml-16" : ""} mb-4`} key={tech}>
            <img
              src={`/projects/tech/${tech}.svg`}
              alt={tech}
              height={45}
              width={45}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderDescription = (text) => (
    <h2
      className="text-lg z-10 tracking-wide font-medium"
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {text}
    </h2>
  );

  const renderProjectName = (title) => (
    <h1
      className="text-2xl sm:text-3xl z-10 pl-2"
      style={{ transform: "translateZ(3rem)" }}
    >
      {title}
    </h1>
  );

  const renderTopBottomGradient = (gradient) => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: `linear-gradient(180deg, ${gradient} 0%, rgba(0,0,0,0) 100%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: `linear-gradient(0deg, ${gradient} 10%, rgba(0,0,0,0) 100%)`,
        }}
      />
    </>
  );

  const renderProjectImage = (src, altText) => (
    <img
      src={src}
      alt={altText}
      className={`${styles.ProjectImg} z-0 absolute top-0 left-0 w-full h-full object-cover`}
      loading="lazy"
    />
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="link overflow-hidden rounded-3xl snap-start"
      style={{
        maxWidth: animationEnabled
          ? "calc(100vw - 2rem)"
          : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.ProjectTile} rounded-3xl relative p-6 flex-col flex justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
        }}
      >
        <img
          src="/project-bg.svg"
          alt="Project Background"
          className="absolute w-full h-full top-0 left-0 opacity-20 object-cover"
          loading="lazy"
        />
        {renderProjectImage(image, name)}
        {renderTopBottomGradient(stop1)}
        {renderProjectName(name)}
        {renderTechIcons(tech)}
        {renderDescription(description)}
      </div>
    </a>
  );
};

export default ProjectTile;
