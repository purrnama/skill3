/**
 * This code was generated by Builder.io.
 */
import React from "react";
import SearchBar from "./SearchBar";
import SkillSection from "./SkillSection";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const exploreSkills = [
    {
      title: "Find service",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa545c2051821e4a6e41f60157b7d19f84a921dba7f9450c1e5b32dcdb7601a2?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
    {
      title: "Career Boosters",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c781988167e73adb26fd81161204c3ab433dfd8d53be00eb6dc8b6f132c0ac8c?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
    {
      title: "Marketplace",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f2313a76c53d3eec4671fb064e303f3c4a0b626d675451617c021c108eb020?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
  ];

  const trendingSkills = [
    {
      title: "Skill3 Academy",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dd16ba31e122ff81de1c7e52bfabf516627c11061e851b60c1c6863448ebb5df?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
    {
      title: "Creative hub",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5cdf274f9e15da84899f69d1c060228ce9c29f6bfadb2e1a9ed48932bec891d9?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
    {
      title: "Skill 3 hub",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d1efa0e9ab0c27816a2149599d529b0fdcde0a42991559039a26fbdd3bd9aeeb?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
  ];

  const moreSkills = [
    {
      title: "Career Boost",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/632c7553f93ecbcbc339d6ca037b081224a8b5d7e1a08563494f948970a5f224?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
    {
      title: "Skill Mastery",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5c3761178d4f8e29c47d020e876e34b0d0b8d3273d9d0dbcae867b5a2b72ae9f?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
    {
      title: "Skill 3 pro",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df0faed8d50a1b62837052db2544f8d69e96723d09ae39a3f68d35ba11d153fb?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
    },
  ];

  return (
    <main className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-2.5 w-full max-md:mt-6 max-md:max-w-full">
        <SearchBar />
        <SkillSection title="Career Related" skills={exploreSkills} />
        <SkillSection title="Skill Related" skills={trendingSkills} />
        <SkillSection skills={moreSkills} />
      </div>
      {children}
    </main>
  );
};

export default MainContent;
