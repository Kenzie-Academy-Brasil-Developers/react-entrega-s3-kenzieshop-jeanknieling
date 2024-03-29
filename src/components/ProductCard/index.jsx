import { useDispatch } from "react-redux";
import { addProductsThunk } from "../../store/modules/cartProducts/thunk";
import formatValue from "../../utils/formatValue";
import { CardContainer } from "./style";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image } = product;

  const handleAddCart = () => {
    dispatch(addProductsThunk(product));
  };

  return (
    <CardContainer>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div>
        <p>{name}</p>
        <p>{formatValue(price)}</p>
        <button onClick={handleAddCart}>Adicionar ao carrinho</button>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
