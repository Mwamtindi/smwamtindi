import React, { useEffect, useRef, useState } from "react";
import ProjectTile from "../common/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { navLinks, PROJECTSS } from "../../constants";
import { styles } from "../../styles";

gsap.registerPlugin(ScrollTrigger); 

const PROJECT_STYLES = {
  SECTION:
    "w-full relative select-none section-container flex-col flex py-8 justify-center",
  PROJECTS_WRAPPER:
    "tall:mt-12 mt-6 grid grid-flow-col auto-cols-max md:gap-10 gap-6 project-wrapper w-fit seq snap-x scroll-pl-6 snap-mandatory",
};

const ProjectsSection = ({ isDesktop }) => {
  const targetSectionRef = useRef(null);
  const sectionTitleElementRef = useRef(null);

  const [willChange, setWillChange] = useState(false);
  const [horizontalAnimationEnabled, setHorizontalAnimationEnabled] =
    useState(false);

  const initRevealAnimation = (ref) => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(ref.current.querySelectorAll(".seq"), {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const initProjectsAnimation = (targetRef, titleRef) => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding =
      document.body.clientWidth -
      targetRef.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      targetRef.current.querySelector(".project-wrapper").clientWidth;

    targetRef.current.style.width = `${elementWidth}px`;

    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;

    timeline
      .to(targetRef.current, { x: width })
      .to(titleRef.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetRef.current,
      start: "top top",
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
      onToggle: (self) => setWillChange(self.isActive),
    });

    return [timeline, scrollTrigger];
  };

  useEffect(() => {
    let projectsScrollTrigger, projectsTimeline;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;

    setHorizontalAnimationEnabled(isDesktop && prefersReducedMotion);

    if (isDesktop && prefersReducedMotion) {
      [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(
        targetSectionRef,
        sectionTitleElementRef
      );
    } else {
      const projectWrapper = targetSectionRef.current.querySelector(
        ".project-wrapper"
      );
      const parentPadding = window
        .getComputedStyle(targetSectionRef.current)
        .getPropertyValue("padding-left");

      targetSectionRef.current.style.width = "100%";
      projectWrapper.classList.add("overflow-x-auto");
      projectWrapper.style.width = "100vw";
      projectWrapper.style.padding = `0 ${parentPadding}`;
      projectWrapper.style.transform = `translateX(-${parentPadding})`;
    }

    const [revealTimeline, revealScrollTrigger] =
      initRevealAnimation(targetSectionRef);

    return () => {
      projectsScrollTrigger?.kill();
      projectsTimeline?.kill();
      revealScrollTrigger?.kill();
      revealTimeline?.progress(1);
    };
  }, [isDesktop]);

  const renderSectionTitle = () => (
    <div
      className={`flex flex-col inner-container ${
        willChange ? "will-change-transform" : ""
      }`}
      ref={sectionTitleElementRef}
    >
      {/* <p className="section-title-sm seq font-bold">PROJECTS</p> */}
      <p className={`${styles.sectionSubText} text-center`}>
        PROJECTS
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
      💻 My Works.
      </h2>
      {/* <h1 className="section-heading seq mt-2">My Works</h1> */}
      {/* <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
        I have contributed in over 20+ projects ranging from Frontend
        development, UI/UX design, Open Source, and Motion Graphics
      </h2> */}
    </div>
  );

  const renderProjectTiles = () =>
    PROJECTSS.map((project) => (
      <ProjectTile
        project={project}
        key={project.name}
        animationEnabled={horizontalAnimationEnabled}
      />
    ));

  const { ref: projectsSectionRef } = navLinks[2];

  return (
    <section
      ref={targetSectionRef}
      className={`${isDesktop ? "min-h-screen" : ""} ${PROJECT_STYLES.SECTION}`}
      id={projectsSectionRef}
    >
      {renderSectionTitle()}
      <div className={PROJECT_STYLES.PROJECTS_WRAPPER}>
        {renderProjectTiles()}
      </div>
    </section>
  );
};

export default ProjectsSection;
