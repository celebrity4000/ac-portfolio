function About() {
  return (
    <div className="w-full mb-80">
      <div className="max-h-screen pt-44 flex flex-col bg-[rgb(255,3,3,.8)] ">
        <div className="space-y-16 px-10">
          <h3 className="text-white text-5xl m-5 mt-20 font-Krona-One">
            About Me
          </h3>
          <p className="text-white text-2xl font-Kufam m-5">
            I am a passionate and dedicated film director with a keen eye for
            storytelling and visual aesthetics.With a strong background in
            cinemativ artds and years of experience,I strive to create compelling
            narratives that captivate and inspire audiences.My portfolio showcases
            a variety of projects ranging from short films to full-length
            features,commercials and music videos.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-36">
          <div className="flex justify-start">
            <img src="/img3.png" alt="img3" className="h-96 w-[98%]" />
          </div>
          <div className="flex justify-center">
            <img src="/img4.png" alt="img4" className="h-96 w-[98%]" />
          </div>
          <div className="flex justify-end">
            <img src="/img5.png" alt="img5" className="h-96 w-[98%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
