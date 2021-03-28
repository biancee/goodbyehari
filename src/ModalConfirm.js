import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function ModalConfirm({ message, form }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} isDisabled={!message ? true : false}>
        Valider
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Votre message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{message}</ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3} onClick={onClose}>
              Publier
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Annuler
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalConfirm;
