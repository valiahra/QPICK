import { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import styles from "./BasketCard.module.css";
import {
  Heading,
  Image,
  Text,
  ButtonGroup,
  Button,
  Icon,
} from "@chakra-ui/react";

export default function BasketCard({ item, setItems, setTotal }) {
  const [count, setCount] = useState(1);
  // const [price, setPrice] = useState(item.price);

  const deleteHandler = (id) => {
    setItems((prev) => prev.filter((el) => el.id !== id));
    setTotal((prev) => prev - item.price * count);
  };

  const changeCountPlus = () => {
    setCount((prev) => prev + 1);
    setTotal((prev) => prev + item.price);
  };

  const changeCountMinus = () => {
    setCount((prev) => prev - 1);
    setTotal((prev) => prev - item.price);
  };

  return (
    <div className={styles.card}>
      <div>
        <div>
          <Image
            objectFit="cover"
            src={item.image}
            alt="img"
            width="180px"
            height="160px"
            padding="12px"
          />
        </div>
        <div>
          {" "}
          <ButtonGroup alignItems="center" ml="24%" mt="1%">
            {count === 1 ? (
              <Button
                size="sm"
                borderRadius="50%"
                backgroundColor="yellow.400"
                color="white"
                onClick={changeCountMinus}
                mr="10%"
                isDisabled
              >
                -
              </Button>
            ) : (
              <Button
                size="sm"
                borderRadius="50%"
                backgroundColor="yellow.400"
                color="white"
                onClick={changeCountMinus}
                mr="7%"
              >
                -
              </Button>
            )}
            {count}
            <Button
              size="sm"
              borderRadius="50%"
              backgroundColor="yellow.400"
              color="white"
              onClick={changeCountPlus}
            >
              +
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className={styles.elem1}>
        <Heading size="sm"> {item.name}</Heading>
        <Text size="sm" color="grey" opacity="50%">
          {item.price} ₽
        </Text>
      </div>

      <div className={styles.elem2}>
        <Icon
          as={DeleteIcon}
          color="red.400"
          onClick={() => deleteHandler(item.id)}
          mt="15px"
        />
        <Heading size="sm" marginTop="140px" color="yellow.400">
          {item.price * count}
        </Heading>
      </div>
    </div>
  );
}
