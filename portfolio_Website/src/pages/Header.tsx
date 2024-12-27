function Header() {
  return (
    <div className="flex flex-row ">
      <div className="flex justify-center items-center w-1/2">
        <img
          src="/img2.png"
          alt="img2"
          height="380px"
          width="400px"
          className="rounded-sm px-15 py-5 mt-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div>
          <p className=" font-Montserrat text-4xl font-bold text-black mr-5">
            ANIRBAN
          </p>
        </div>
        <div>
          <p className=" font-Montserrat text-4xl font-bold text-red-600 ml-20 ">
            CHAKRABORTY
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
