import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const url = "http://localhost:4000/api/food";

function List() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get(`${url}/all`).then(({ data }) => setItemList(data.data));

    // if (data.status === "success") {
    //   toast.success("added successfully");
    // }

    // toast.error(error);
  }, []);

  return <div>list</div>;
}

export default List;
