import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay hidden group-hover:flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-80 transition-all duration-500">
          <Link
            href="/"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link flex items-center justify-center cursor-pointer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] group-hover/link:text-white" />
          </Link>
          <Link
            href="/"
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link flex items-center justify-center cursor-pointer"
          >
            <EyeIcon className="h-10 w-10 text-[#adb7be] group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#adb7be]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
