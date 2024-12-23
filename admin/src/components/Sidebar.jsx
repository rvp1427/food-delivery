import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="space-y-5">
      <div className="">
        <NavLink to="/add" className="flex_layout">
          <img src="add_icon.png" alt="add" />
          <h2>Add Items</h2>
        </NavLink>
      </div>
      <div>
        <NavLink to="/list" className="flex_layout">
          <img src="order_icon.png" alt="list" />
          <h2>List Items</h2>
        </NavLink>
      </div>

      <div>
        <NavLink to="/order" className="flex_layout">
          <img src="order_icon.png" alt="order" />
          <h2>Orders</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
