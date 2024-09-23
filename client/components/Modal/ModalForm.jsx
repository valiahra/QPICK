import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

export default function ModalForm({ total, items }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen} bg="black" color="white"  width="350px" height='50px' borderRadius="15px">
        Перейти к оформлению
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Оформить заказ</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Имя</FormLabel>
              <Input ref={initialRef} placeholder="введите имя" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Фамилия</FormLabel>
              <Input placeholder="введите фамилию" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Адрес доставки</FormLabel>
              <Input placeholder="введите адрес" />
            </FormControl>
          </ModalBody>
          {items?.length
        ? items.map((el) => (
            <Text textAlign='center'
              key={el.id}
             
            >{el.name}</Text>
          ))
        : null}
          <Text textAlign='center'>Сумма заказа: {total} ₽</Text>
          <ModalFooter>
            <Button color="black" mr={3}  _hover={{  background: "teal",
    color: "white", }}>
              Оплатить
            </Button>
            <Button onClick={onClose}>Назад</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
