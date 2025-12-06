import React from "react";

const Journey = () => {
  return (
    <section
      id="section-2"
      className="2xl:w-[160rem] lg:w-[120rem] md:w-[56rem] w-[37rem] mx-auto 2xl:mt-[20rem] lg:mt-[14rem] md:mt-[10rem] mt-[12rem]"
    >
      <h2
        className="2xl:text-[5.6rem] xl:text-[4.8rem] md:text-[3.6rem] text-[2.8rem] font-normal 2xl:w-[56rem] xl:w-[48rem] md:w-[36rem] w-[30rem] mx-auto text-center"
        data-aos="fade-up"
      >
        The complete journey for developers
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 2xl:gap-[2.4rem] lg:gap-[2rem] gap-[6.4rem] w-full 2xl:mt-[6.4rem] lg:mt-[4rem] md:mt-[2.4rem] mt-[1.6rem]">
        <div className="flex flex-col w-full " data-aos="fade-up">
          <div className="w-full md:aspect-square aspect-[16/9] rounded-[1.6rem] overflow-hidden">
            <img
              src="/images/Communicate.png"
              alt="Communicate"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="2xl:text-[3.2rem] md:text-[2.4rem] text-[2rem] font-normal">
            Communicate <span className="text-[#808080]">with developers</span>
          </span>
          <span className="2xl:text-[1.6rem] text-[1.4rem] font-normal text-[#BBBBBB]">
            Easily share your thoughts and exchange knowledge with developers
            around the world.
          </span>
        </div>
        <div className="flex flex-col w-full " data-aos="fade-up">
          <div className="w-full md:aspect-square aspect-[16/9] rounded-[1.6rem] overflow-hidden">
            <img
              src="/images/Collaborate.png"
              alt="Collaborate"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="2xl:text-[3.2rem] md:text-[2.4rem] text-[2rem] font-normal">
            Collaborate <span className="text-[#808080]">with developers</span>
          </span>
          <span className="2xl:text-[1.6rem] text-[1.4rem] font-normal text-[#BBBBBB]">
            Work together not only with programmers but also with designers,
            musicians, and video creators to bring diverse ideas to life.
          </span>
        </div>
        <div className="flex flex-col w-full " data-aos="fade-up">
          <div className="w-full md:aspect-square aspect-[16/9] rounded-[1.6rem] overflow-hidden">
            <img
              src="/images/Grow.png"
              alt="Grow"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="2xl:text-[3.2rem] md:text-[2.4rem] text-[2rem] font-normal">
            Grow <span className="text-[#808080]">with developers</span>
          </span>
          <span className="2xl:text-[1.6rem] text-[1.4rem] font-normal text-[#BBBBBB]">
            Grow together by sharing knowledge and ideas with various kind of
            developers.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Journey;
