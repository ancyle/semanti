import { useEffect, useState } from "react";
import { Button, Card, CardGroup, Image, Label, Menu } from "semantic-ui-react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp));
  };
  useEffect(() => {
    getProducts();
  });
  return (
    <CardGroup itemsPerRow={4}>
      {products.map((product) => (
        <Card centered>
          <Card.Header as="h4" textAlign="center">
            {product.title}
          </Card.Header>
          <Card.Content textAlign="center">
            <Image src={product.image} size="small"></Image>
          </Card.Content>
          <Card.Description>{product.description}</Card.Description>
          <Card.Meta>
            <Menu size="small" secondary>
              <Menu.Menu position="left">
                <Menu.Item>
                  <Label as="a" color="teal" tag>
                    Featured
                  </Label>
                  <Label as="a" color="red" tag>
                    Almost gone
                  </Label>
                </Menu.Item>
              </Menu.Menu>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Button color="violet" content="Add to Cart"></Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Card.Meta>
        </Card>
      ))}
    </CardGroup>
  );
};
export default ProductList;
