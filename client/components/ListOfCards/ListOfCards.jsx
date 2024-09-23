import ProductCard from "../ProductCard/ProductCard";
import styles from "./ListOfCards.module.css";

export default function ListOfCards({ items, products, setItems }) {
  return (
    <div className={styles.list}>
      {products?.length
        ? products.map((el) => (
            <ProductCard
              key={el.id}
              product={el}
              items={items}
              setItems={setItems}
            />
          ))
        : null}
    </div>
  );
}
