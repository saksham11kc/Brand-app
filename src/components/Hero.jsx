import FlipkartLogo from "../../public/flipkart.png";
import ShoeImage from "../../public/shoe_image.png";
import AmazonLogo from "../../public/amazon.png";

export default function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          YOUR FEET DESERVE THE BEST <br />
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES. <br /> <br />
        </p>

        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping ">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={AmazonLogo} alt="amazon logo" /> &nbsp;&nbsp;&nbsp;
            <img src={FlipkartLogo} alt="flipkart logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={ShoeImage} alt="shoe image" />
      </div>
    </main>
  );
}
