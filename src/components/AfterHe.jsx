

const ThreeColumnSection = () => {
  const columns = [
    {
      img: " https://static.sambafoot.com/wp/sites/2/Messi-copa.jpeg",
      title: "Lionel Messi",
      description: "This is the world cup winning moment of Lionel Messi, widely regarded as the greatest player of all time, led Argentina to a World Cup victory in 2022, solidifying his legendary status in football history. greatest player of all time",
    },
    {
      img: "http://2.bp.blogspot.com/-xMEmiGHUEtE/TwVwV4xFzfI/AAAAAAAACr8/m-0MD2PLhAM/s1600/Iniesta-Shooting-1600x1142.jpg",
      title: "Andres Iniesta",
      description: "This is the picture of genius payer who was the former barcelona player and play for spainAndrés Iniesta, a genius midfielder and former Barcelona player, is best remembered for scoring the winning goal in the 2010 World Cup final",
    },
    {
      img: "https://www.fcbarcelona.com/fcbarcelona/photo/2020/04/22/38dbf446-b20b-47b3-8d77-d02104507cae/xavi_037-min.JPG",
      title: "Xavi",
      description: "Xavi is a formal Xavi, a former Barcelona player and coach, was part of the iconic midfield trio with Messi and Iniesta, shaping Barcelona's dominance in the late 2000s and early 2010s. player and coach and also he was a part of a best trio with messi and inistea In year 2011.",
    },
  ];

  return (
    <section id="three-column" className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          {columns.map((column, index) => (
            <div key={index} className="col-md-4 mb-4">
              <img
                src={column.img}
                alt={column.title}
                className="img-fluid rounded mb-3"
              />
              <h3>{column.title}</h3>
              <p>{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnSection;
