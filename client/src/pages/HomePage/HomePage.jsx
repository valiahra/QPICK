import styles from "./HomePage.module.css";
import ListOfCards from "../../../components/ListOfCards/ListOfCards";

export default function HomePage({ items, products, setItems }) {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.name}>Наушники</p>
        {products && (
          <ListOfCards
            items={items}
            products={products.filter((el) => !el.wire)}
            setItems={setItems}
          />
        )}
      </div>
      <div className={styles.wrapper}>
        <p className={styles.name}>Беспроводные наушники</p>
        {products && (
          <ListOfCards
            products={products.filter((el) => el.wire)}
            setItems={setItems}
            items={items}
          />
        )}
      </div>
    </>
  );
}
