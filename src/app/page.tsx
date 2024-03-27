"use client";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";

const Home = () => {
  const { onOpen, onClose, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>Hi</ModalContent>
      </Modal>
    </>
  );
};

export default Home;
