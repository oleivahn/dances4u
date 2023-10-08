import dance1 from "../assets/images/dance1.jpg";
import dance2 from "../assets/images/dance2.jpg";
import dance3 from "../assets/images/dance3.jpg";
import dance4 from "../assets/images/dance4.jpg";
import dance5 from "../assets/images/dance5.jpg";
import dance6 from "../assets/images/dance6.jpg";

function Slider() {
  return (
    <div className="container px-20">
      <div className="carousel justify-items-center" width="300" height="200px">
        <div
          id="slide1"
          className="carousel-item relative w-full justify-items-center"
          height="400"
        >
          <img
            src={dance1}
            className="object-contain justify-items-center"
            width="300"
            height="400"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/*  */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={dance2}
            className="object-contain"
            width="300"
            height="400"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/*  */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={dance3}
            className="object-contain"
            width="300"
            height="400"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/*  */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={dance4}
            className="object-contain"
            width="300"
            height="400"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/*  */}
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src={dance5}
            className="object-contain"
            width="300"
            height="400"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/*  */}
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src={dance6}
            className="object-contain"
            width="300"
            height="400"
          />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
