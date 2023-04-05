import { useEffect, useState } from "react";
import { Input, Menu, MenuHeader } from "semantic-ui-react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((resp) => resp.json())
      .then((resp) => setCategories(resp))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCategories();
  });

  const [filtertext, setFiltertext] = useState("");

  return (
    <div>
      <Menu vertical>
        <Menu.Item>
          <Input
            placeholder="Search..."
            type="search"
            value={filtertext}
            onChange={(event) => {
              setFiltertext(event?.target.value);
            }}
          />
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Category List</Menu.Header>

          <Menu.Menu>
            {categories.map((cat) => (
              <Menu.Item link name={cat} key={cat} />
            ))}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default CategoryList;
