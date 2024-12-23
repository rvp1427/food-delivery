import axios from "axios";
import { memo, useState } from "react";
import toast from "react-hot-toast";

const url = "http://localhost:4000/api/food";

const Add = memo(function Add() {
  const [name, setName] = useState("test");
  const [price, setPrice] = useState(2);
  const [category, setCategory] = useState("Salad");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // http://localhost:4000/api/food/all

  async function handleSubmit(e) {
    e.preventDefault();
    const addData = {
      name,
      price,
      category,
      description,
      image,
    };

    try {
      const { data } = await axios.post(`${url}/add`, addData);
      console.log(data);
      if (data.status === "success") {
        toast.success("added successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-96">
        <div className="flex flex-col">
          <label htmlFor="image">Upload Image</label>
          {/* <div>
            <img src="upload_area.png" alt="" />
          </div> */}
          <input
            type="file"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Type Here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Product Description</label>
          <textarea
            type="text"
            id="description"
            placeholder="Write Content Here"
            className="none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="category">Product Category</label>
            {/* <input type="text" id="name" /> */}
            <select
              name="category"
              id="categry"
              className="none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              id="price"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            />
          </div>
        </div>
        <button className="btn none">Add</button>
      </form>
    </div>
  );
});

export default Add;
