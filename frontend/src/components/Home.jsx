import { useState } from "react";
import { food_list, menu_list } from "../../public/frontend_assets/assets";
import Category from "./Category";
import Food from "./Food";
import Hero from "./Hero";

function Home({ cartItem, setCartItem }) {
  const [cat, setCat] = useState("all");

  function handleCat(category) {
    setCat(() => category);
  }

  return (
    <>
      <div className="con">
        <Hero />
      </div>
      <div className="space-y-6 con">
        <h2>Explore Our Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia
          ea autem odio ad temporibus nemo non quibusdam! Amet, adipisci
          dolores? Impedit ex dignissimos, et eius harum sed adipisci. Eos?
        </p>
        <div className="flex gap-10 items-center overflow-auto scroll-smooth">
          {menu_list.map((item) => (
            <div key={item.menu_name}>
              <Category category={item} handleCat={handleCat} />
            </div>
          ))}
        </div>
        <hr />
      </div>

      <div className="con">
        <h2>Top dishes near you</h2>
        <div className="grid_auto">
          {food_list.map((item) => {
            if (item.category === cat || cat === "all") {
              return (
                <Food
                  key={item._id}
                  food={item}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
