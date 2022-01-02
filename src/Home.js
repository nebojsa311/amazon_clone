import React from "react";
import "./Home.css";
import Product from "./Product.js";
import amazon_container from "./images/amazon_container.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={amazon_container}
          alt="amazon banner"
        ></img>

        <div className="home__row">
          <Product
            id="5331582"
            title="Apple iPhone 12 Pro Max, 256GB, White - Unlocked (Renewed Premium)"
            price={1149.99}
            image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1631652954000"
            rating={5}
          />
          <Product
            id="1258469"
            title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Silver"
            price={1449.99}
            image="https://atstore.ba/wp-content/uploads/2020/12/1-1000x1000.jpg"
            rating={5} />
        </div>

        <div className="home__row">
          <Product 
          id="2588461"
          title="SUPERDRY Everest Bomber Jacket "
          price={112.99}
          image="https://m.media-amazon.com/images/I/81YX8jXKWsL._AC_SX342._SX._UX._SY._UY_.jpg"
          rating={4}
          />
          <Product 
            id="7282640"
            title="Resistance Bands Set 13 pcs, 6 Tube Stackable Up to 210 lbs Adjustable, Exercise Bands Fitness Workout with Wide Handles, Door Anchor, Steel Clasp, Carry Bag, Ankle Straps for Home Gym Outdoor Travel "
            price={29.96}
            image="https://m.media-amazon.com/images/I/714LJ8F-cCL._AC_SX425_.jpg"
            rating={3}
          />
          <Product 
          id="8948527"
          title="LEGO DC Batman: Batman & Selina Kyle Motorcycle Pursuit 76179 Building Kit; Cool Super-Hero Toy for Kids Aged 6+ (149 Pieces) "
          price={19.99}
          image="https://m.media-amazon.com/images/I/81VrRJpVavL._AC_SX522_.jpg"
          rating={4}
          />
        </div>

        <div className="home__row">
          <Product
          id="3218998"
          title="Dumbbells Set Adjustable Weights Pair: 44lb 66lb Coated Free Adjusted Weight Dumbbell Barbell Variable & Interchangeable Changeable Non-Slip Hand Heavy Workout for Beginner Home Gym Exercise Fitness "
          price={149.99}
          image="https://m.media-amazon.com/images/I/819grtxzC9L._AC_SX522_.jpg"
          rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
