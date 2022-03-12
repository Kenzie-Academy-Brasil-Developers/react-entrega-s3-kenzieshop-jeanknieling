import { useSelector } from "react-redux";
import { VitrineContainer } from "./style";
import ProductCard from "../ProductCard";

const Vitrine = () => {
  const { products } = useSelector((store) => store);

  return (
    <VitrineContainer>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </VitrineContainer>
  );
};

export default Vitrine;
