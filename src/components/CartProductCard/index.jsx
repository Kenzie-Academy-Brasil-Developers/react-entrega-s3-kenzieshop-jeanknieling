import { useDispatch } from "react-redux";
import { removeProductsThunk } from "../../store/modules/cartProducts/thunk";
import formatValue from "../../utils/formatValue";
import { CardContainer } from "./style";

const CartProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;

  const handleRemoveProductCart = () => {
    dispatch(removeProductsThunk(product));
  };

  return (
    <CardContainer>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        <span>{formatValue(price)}</span>
        <button onClick={handleRemoveProductCart}>Remover</button>
      </div>
    </CardContainer>
  );
};

export default CartProductCard;
