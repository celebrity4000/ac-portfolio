function About() {
  return (
    <div className=" flex flex-col bg-red-600 ">
      <div className="">
        <h3 className="text-white text-2xl m-5 mt-20 font-Krona-One">
          About Me
        </h3>
        <p className="text-white text-sm m-5 font-Krona-One">
          I am a passionate and dedicated film director with a keen eye for
          storytelling and visual aesthetics.With a strong background in
          cinemativ artds and years of experience,I strive to create compelling
          narratives that captivate and inspire audiences.My portfolio showcases
          a variety of projects ranging from short films to full-length
          features,commercials and music videos.
        </p>
      </div>
      <div className="flex space-x-3 justify-center">
        <img src="/img3.png " alt="img3 " className=" w-1/3" />
        <img src="/img4.png " alt="img4 " className=" w-1/3" />
        <img src="/img5.png " alt=" img5" className=" w-1/3" />
      </div>
    </div>
  );
}

export default About;
