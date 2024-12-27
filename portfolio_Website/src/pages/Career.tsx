import background from "/img7.png";
const items = [
  {
    id: 1,
    title: "piklur janala",
  },
  {
    id: 2,
    title: "jah kala",
  },
  {
    id: 3,
    title: "Bonosundari",
  },
  {
    id: 4,
    title: "Nonte Fonte(Film)",
  },
  {
    id: 5,
    title: "O Abhagi",
  },
];

function Career() {
  return (
    <div
      className="flex flex-col w-full min-h-screen bg-cover bg-no-repeat items-center mt-10 mb-36 "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className=" mt-20">
        <h2 className="text-white font-Inter font-semibold text-3xl text-center mt-16 mb-16">
          Career
        </h2>
        <div className="text-white font-Inter bg-black  font-medium text-lg items-center border-white rounded-lg shadow-lg p-10 ">
          <p>
            Anirban began his career by assisting renowned directors
            <br /> before venturing into independent filmmaking.He has <br />
            directed television productions (both fiction and non-fiction),
            <br />
            short films,documentaries,advertisements,corporate films, and web
            series.
          </p>
          <p>
            His debut feature film Mullickbari was followed by several notable
            films including:
          </p>
          <ul className="list-disc ml-5 ">
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Career;
