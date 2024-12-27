import background from "/img6.png";

function Early_life() {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-cover bg-no-repeat items-end mt-10 mb-36"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className=" bg-white w-1/2 p-5 rounded-md shadow-2xl mt-56 mb-56 m-16">
        <h3 className="text-black font-Montserrat font-bold text-2xl mt-20">
          Early Life
        </h3>
        <p className="text-black font-Montserrat text-md text-bold mt-10 mb-20">
          Anirban Chakraborty studied science but was drawn to art and culture
          from young age,influenced by his passion for cinema.His early career
          included occupations as a private detective and professional
          photographer,enriching his storytelling perspective,He later
          transitioned to filmmaking,combining his diverse experiences.
        </p>
      </div>
    </div>
  );
}

export default Early_life;
