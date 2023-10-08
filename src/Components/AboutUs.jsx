import dance1 from "../assets/images/dance1.jpg";
import dance2 from "../assets/images/dance2.jpg";
import dance3 from "../assets/images/dance3.jpg";
import dance4 from "../assets/images/dance4.jpg";
import dance5 from "../assets/images/dance5.jpg";
import dance6 from "../assets/images/dance6.jpg";

function AboutUs() {
  return (
    <div id="aboutUs" className="p-5 md:p-20">
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="text-3xl font-bold pt-10">
        Our dance teachers coach their students in all types of dance.
      </p>
      <p className="pt-10">
        Dances 4u has been created by a group of professional dancers and
        teachers dedicated to training and understanding all types of dance
        rhythms around the world. Our teachers and dancers have extensive
        experience and professional experience. With our teachers you can
        receive complete technical training in the different dance styles that
        include latin músic,samba,merengue, salsa, bachata, urban dances, modern
        jazz,contemporary, African rhythms, afro house, kizomba, semba and
        choreographic composition.
      </p>
      <div className="carousel rounded-box pt-10">
        <div className="carousel-item">
          <img src={dance1} alt="Burger" width="300" height="400" />
        </div>
        <div className="carousel-item">
          <img src={dance2} alt="Burger" width="300" height="400" />
        </div>
        <div className="carousel-item">
          <img src={dance3} alt="Burger" width="300" height="400" />
        </div>
        <div className="carousel-item">
          <img src={dance4} alt="Burger" width="300" height="400" />
        </div>
        <div className="carousel-item">
          <img src={dance5} alt="Burger" width="300" height="400" />
        </div>
        <div className="carousel-item">
          <img src={dance6} alt="Burger" width="300" height="400" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
