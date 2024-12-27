const works = [
  {
    id: 1,
    title: "Short films",
  },
  {
    id: 2,
    title: "Documentaries",
  },
  {
    id: 3,
    title: "Ad films",
  },
  {
    id: 4,
    title: "Corporate films",
  },
  {
    id: 5,
    title: "Web series",
  },
];

function Other_works() {
  return (
    <div className="flex  flex-row">
      <div className="w-1/2 text-3xl font-normal font-figma-hand text-left m-24">
        <h3 className="">Other Works</h3>
        <ul className="list-disc ml-5 ">
          {works.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/2  justify-center items-center">
        <img src="/img8.png" alt="img8" height={250} width={250} />
      </div>
    </div>
  );
}

export default Other_works;
