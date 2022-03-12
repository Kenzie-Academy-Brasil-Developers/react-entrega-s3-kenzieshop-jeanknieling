import { useSelector } from "react-redux";
import { Container } from "./style";

const CartCounter = () => {
  const { cartProducts } = useSelector((store) => store);
  return (
    <Container>
      <p>{cartProducts.length}</p>
    </Container>
  );
};

export default CartCounter;
