"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node</li>
        <li>React</li>
        <li>Next</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Astro</li>
        <li>Express</li>
        <li>Docker</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Rey Juan Carlos</li>
        <li>University of Riverside, California</li>
        <li>CEF</li>
        <li>GAMMA TECH SCHOOL</li>
        <li>ConquerBlocks</li>
      </ul>
    ),
  },
  // ,{
  //     title:"Certifications",
  //     id:"certifications",
  //     content:(
  //         <ul>
  //             <li></li>
  //             <li></li>
  //             <li></li>
  //             <li></li>
  //             <li></li>
  //         </ul>
  //     )
  // }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a junior full stack developer with a passion for creating
            interactive and responsive web applications. I have experience with
            HTML, CSS, Javascript, React, Node.js, Nextjs, Express, PostgreSQL
            and GitHub. I am also learning Web3, EVM and Solidity to become a
            Blockchain Developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
