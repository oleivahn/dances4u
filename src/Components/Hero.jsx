import backgroundVideo from "../assets/images/backgroundVideo.mp4";

function Hero() {
  return (
    <>
      <header
        id="hero"
        className="relative flex items-center justify-center h-[80%] md:h-screen overflow-hidden"
      >
        <div className="relative z-30 md:p-5 text-2xl rounded-xl">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                OUR DANCE TEACHERS COACH THEIR STUDENTS IN ALL TYPES OF DANCE
              </h1>
              <p className="mb-5">PUT YOUR DANCING SHOES AND LETS MOVE</p>
              <p className="mb-5">
                “Dances 4 U has the best dancers that will teach you how to
                dance like a pro!” Cindy G. – 09/21/2019
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </header>
    </>
  );
}

export default Hero;
