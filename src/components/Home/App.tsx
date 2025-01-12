import { Link } from "react-router";
import "./App.css";
import homePic from "./assets/ai_pic.jpg";

function App() {
  return (
    <main className="mainContainer">
      <div className="shopIntro">
        <div>
          <img className="homeImg" src={homePic} alt="AI_Chip_Image" />
        </div>
        <div className="ShopDesc">
          <p>
            Welcome to REMADE – Your Trusted Source for Premium Computer Parts!
          </p>
          <p>
            At Remade.com, we bring your tech dreams to life with high-quality
            computer components, unmatched prices, and exceptional customer
            service. Whether you're building a powerful gaming rig, upgrading
            your office setup, or assembling your dream PC, we’ve got you
            covered. Explore our extensive catalog featuring the latest CPUs,
            GPUs, motherboards, storage solutions, peripherals, and more—all
            from top brands you know and trust. With fast shipping, reliable
            warranties, and expert support, we make sure your tech journey is
            seamless and stress-free. Ready to build your perfect PC? Let’s get
            started!
          </p>
          <Link to="/shop">
            <button>Shop Now!</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default App;
