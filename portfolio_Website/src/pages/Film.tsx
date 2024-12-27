const films = [
  {
    title: "Mullickbari",
    year: "2014",
    Genre: "Drama",
  },
  {
    title: "Piklur Janala",
    year: "2016",
    Genre: "Drama",
  },
  {
    title: "Jah Kala",
    year: "2017",
    Genre: "Thriller",
  },
  {
    title: "Bonosundari",
    year: "2018",
    Genre: "Mystery",
  },
  {
    title: "Nonte Fonte",
    year: "2019",
    Genre: "Comedy",
  },
  {
    title: "Abhagi",
    year: "2020",
    Genre: "Drama",
  },
];

function Film() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center space-y-6 bg-white p-12">
        <div className="relative w-full h-96">
          <h1 className="text-6xl font-bold uppercase text-gray-800 font-figma-hand text-end mr-80">
            Film
          </h1>

          <img
            src="/film2.png"
            className="w-1/2 h-auto object-cover rounded shadow-md absolute left-0"
          />
          <img
            src="/film1.png"
            className="w-1/2 h-auto object-cover rounded shadow-lg absolute top-72 left-96 z-10 border border-gray-200"
          />
        </div>
      </div>

      <div className="text-white font-Inter bg-black font-medium text-lg items-center border-white rounded-lg shadow-lg p-10 m-20 mt-96">
        <ul className="list-disc ml-5 flex flex-row flex-wrap">
          {films.map((film, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded-lg shadow-md border border-gray-300 m-2 w-48"
            >
              <h3 className="font-bold">{film.title}</h3>
              <p>{film.year}</p>
              <p>{film.Genre}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Film;
