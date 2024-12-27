function About() {
  return (
    <div className="w-full mb-20 lg:mb-80">
      <div className="min-h-screen pt-20 lg:pt-44 flex flex-col bg-[rgb(255,3,3,.8)]">
        <div className="space-y-10 lg:space-y-16 px-5 lg:px-10">
          <h3 className="text-white text-3xl lg:text-5xl m-5 mt-10 lg:mt-20 font-Krona-One">
            About Me
          </h3>
          <p className="text-white text-lg lg:text-2xl font-Kufam m-5">
            I am a passionate and dedicated film director with a keen eye for
            storytelling and visual aesthetics. With a strong background in
            cinematic arts and years of experience, I strive to create compelling
            narratives that captivate and inspire audiences. My portfolio showcases
            a variety of projects ranging from short films to full-length
            features, commercials, and music videos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 lg:mt-36 px-5 lg:px-0">
          <div className="flex justify-center lg:justify-start">
            <img src="/img3.png" alt="img3" className="h-72 lg:h-96 w-full object-cover" />
          </div>
          <div className="flex justify-center">
            <img src="/img4.png" alt="img4" className="h-72 lg:h-96 w-full object-cover" />
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src="/img5.png" alt="img5" className="h-72 lg:h-96 w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
