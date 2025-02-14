
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center text-center text-black"
      style={{
        backgroundImage: "url('https://www.fcbarcelona.com/fcbarcelona/photo/2020/02/24/3f1215ed-07e8-47ef-b2c7-8a519f65b9cd/mini_UP3_20200105_FCB_VIS_View_1a_Empty.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}   
    >
      <div className="container">
        <h1>Welcome to the football World</h1>
        <p>This pictures of Camp Nou, Barcelona</p>
      </div>
    </section>
  );
};

export default HeroSection;
