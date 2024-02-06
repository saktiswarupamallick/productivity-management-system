import React from "react";
import TitleSection from '@/components/landing-page/title-section';

const HomePage = () => {
  return (
    <section
      className=" overflow-hidden
  px-4
  sm:px-6
  mt-10
  sm:flex
  sm:flex-col
  gap-4
  md:justify-center
  md:items-center"
    >
      <TitleSection
        pill="✨ Your Workspace, Perfected"
        title="All-In-One Collaboration and Productivity Platform"
      />
      <div
        className="bg-white
          p-[2px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        "
      >
       <Button></Button>
      </div>
    </section>
  );

};
export default HomePage;
