function Header() {
  return (
    <div className="flex flex-col lg:flex-row z-10 md:justify-between min-h-screen p-5 lg:p-0">
      {/* Image Section */}
      <div className="flex justify-center items-center mt-10 md:mt-0 lg:mb-0 lg:px-16">
        <img
          src="/img2.png"
          alt="img2"
          className="rounded-sm w-72 h-auto lg:w-[400px] lg:h-[380px] px-5 py-5 mt-5 lg:mt-10"
        />
      </div>
      {/* Text Section */}
      <div className="flex flex-col mt-32 md:mt-0 w-full lg:w-1/3 justify-center items-center lg:items-start">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <p className="font-Montserrat text-3xl lg:text-5xl font-bold text-black">
            ANIRBAN
          </p>
          <p className="font-Montserrat text-3xl lg:text-5xl font-bold text-red-600">
            CHAKRABORTY
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
