import SocialMedia from "./socialMedia/page";
import Offers from "./offers/page";
import Footer from "./footer/page";
import About from "./about/page";
import PlagiatDetector from "./detector/page";
import Register from "./register/page";
import Log from "./home/page";
import Work from "./work/page";
import Video from "./video/page";
export default function Home() {
  return (
    <html>
      <head>
        <title>PlagPrevent</title>
      </head>
      <body>
        <Log />
        <PlagiatDetector />
        <section id="register-section">
          <Register />
        </section>
        <Work />
        <section id="about-section">
          <About />
        </section>

        <Video />
        <section id="offers-section">
          <Offers />
        </section>
        <section id="socialMedia-section">
          <SocialMedia />
        </section>
        <Footer />
      </body>
    </html>
  );
}
