function Header() {
  return (
    <div className="flex flex-row z-10 justify-between min-h-screen">
      <div className="flex justify-center items-center px-16">
        <img
          src="/img2.png"
          alt="img2"
          height="380px"
          width="400px"
          className="rounded-sm px-15 py-5 mt-10"
        />
      </div>
      <div className="flex flex-col w-1/3 justify-center items-start">
        <div className="flex flex-col justify-center items-start">
          <p className=" font-Montserrat text-5xl font-bold text-black">
            ANIRBAN
          </p>
          <p className=" font-Montserrat text-5xl font-bold text-red-600">
            CHAKRABORTY
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
