"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Tooele Technical College</li>
        <li>First Year Byu-Pathways</li>
        <li>Grantsville High School</li>
      </ul>
    ),
  },
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi there! I'm Kaysen, a passionate web developer with a strong
            foundation in technologies like Node.js, Express, JavaScript, React,
            and Next.js. My journey in web development started at the Tooele
            Technical College. I love turning ideas into interactive and
            user-friendly experiences. I've honed my skills
            through hands-on projects and a commitment to staying updated with
            the latest industry trends. My problem-solving mindset and attention
            to detail help me craft clean, efficient, and scalable code. Whether
            it's building responsive user interfaces or optimizing server-side
            performance, I thrive in collaborative environments where creativity
            and innovation are encouraged. I'm excited about the endless
            possibilities in web development and am eager to contribute my
            skills to impactful projects. Let's connect and discuss how I can
            bring my passion for coding to your team!
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}Education{""}
            </TabButton>
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
