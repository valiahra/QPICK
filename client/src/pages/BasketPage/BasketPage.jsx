import { useState } from "react";
import BasketCard from "../../../components/BasketCard/BasketCard";
import styles from "./BasketPage.module.css";
import { Card, CardBody, Text, Box } from "@chakra-ui/react";
import ModalForm from "../../../components/Modal/ModalForm";

export default function BasketPage({ items, setItems }) {
  
  let result = items.reduce((acc, elem) => acc + elem.price, 0);
  const [total, setTotal] = useState(result);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items?.length ? (
          items.map((el) => (
            <BasketCard
              key={el.id}
              item={el}
              setItems={setItems}
              setTotal={setTotal}
            />
          ))
        ) : (
          <p>КОРЗИНА ПУСТА </p>
        )}
      </div>
      <div>
        <Card width="350px" height="90px" borderRadius="15px">
          <CardBody padding="0px">
            <Box
              display="flex"
              justifyContent="space-between"
              padding="10px 10px 10px 10px"
            >
              <Text fontWeight="bold">ИТОГО</Text>
              <Text fontWeight="bold">₽ {total}</Text>
            </Box>

            <ModalForm total={total} items={items}/>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
