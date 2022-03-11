import { CardContainer } from "./style";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <CardContainer>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name}</p>
      <p>R${price}</p>
    </CardContainer>
  );
};

export default ProductCard;
