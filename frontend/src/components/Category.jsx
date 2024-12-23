function Category({ category, handleCat }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-30 h-30 rounded-lg flex flex-col items-center ">
        <a
          className="bg-orange-300 w-30 h-30 rounded-full group cursor-pointer"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleCat(category.menu_name);
            // console.log(category.menu_name);
            // setCat(category.menu_name);
          }}
        >
          <img
            src={category.menu_image}
            alt={category.menu_name}
            className="group-hover:border-red-400 border-4 rounded-full group-active:border-red-400 group-focus:border-red-400"
          />
          {/* image is great and all */}
        </a>
        <h3>{category.menu_name}</h3>
      </div>
      <div></div>
    </div>
  );
}

export default Category;
