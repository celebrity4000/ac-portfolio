function Navbar() {
  return (
    <div className="flex justify-between items-center p-5  border-b-3 border-gray-800  rounded-xl shadow-lg">
      <h1 className=" font-Krona-One font-semibold text-left text-5xl ml-10">
        Director
      </h1>
      <img
        src="/navbar.png"
        alt="navbar"
        height={25}
        width={25}
        className="mr-10"
      />
    </div>
  );
}

export default Navbar;
