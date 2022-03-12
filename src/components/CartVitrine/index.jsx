import { useSelector } from "react-redux";
import { CartVitrineContainer } from "./style";
import CartProductCard from "../CartProductCard";

const CartVitrine = () => {
  const { cartProducts } = useSelector((store) => store);

  return (
    <CartVitrineContainer>
      {cartProducts.map((product, index) => (
        <CartProductCard key={index} product={product} />
      ))}
    </CartVitrineContainer>
  );
};

export default CartVitrine;
