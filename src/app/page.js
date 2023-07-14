import SocialMedia from "./socialMedia/page";
import Offers from "./offers/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <html>
      <head>
        <title>Technix</title>
      </head>
      <body>
        <SocialMedia />
        <Footer />
        <Offers />
      </body>
    </html>
  );
}
