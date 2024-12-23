function Hero() {
  return (
    // <div className="con ">
    <div className="relative z-10">
      <img src="frontend_assets/header_img.png" alt="" />
      <div className="absolute bottom-10 left-10 space-y-10 max-w-lg text-white">
        <h1>Order your favourite food here</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias
          magni quo. Corrupti dolores sunt facere consectetur minus, cumque
          voluptate animi esse nulla voluptatem. Dolor ad quaerat sunt
          blanditiis aperiam?
        </p>
        <button className="btn">View Menu</button>
      </div>
    </div>
  );
}

export default Hero;
