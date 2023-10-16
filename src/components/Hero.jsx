import "./hero.css";

const Hero = () => {
  return (
    <div className="w-full min-h-screen screen flex justify-center items-end py-[5rem]">
      <div className="">
        <h1 className="text-[90px] text-white font-creatoBold tracking-wider">
          TRY <span className="font-creatoLight">AGAIN,</span> FAIL{" "}
          <span className="font-creatoLight">BETTER</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
