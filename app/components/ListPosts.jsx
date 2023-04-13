"use client";

import Link from "next/link"
import {
  Table,
  Button, Container, Flex,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import EditModalForm from "./FormEditModal";


export default function ListPosts({ posts }) {

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleEdit = (el) => {
    setOpen(true)
    setSelected(el)
  }

  const modalClose = () => {
    setSelected(null);
    setOpen(false);
  }
  return (
    <section>
      <Container maxW={"6xl"} mt={"9"}>
        <Table variant="striped" size={"sm"}  border='1px' borderColor='gray.200' p='3' borderRadius={'xl'}>
          <TableCaption>Home Project</TableCaption>
          <Thead>
            <Tr>
              <Th >#</Th>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts ? posts.map((e, i) => (
              <Tr key={i}>
                <Td >{e.id}</Td>
                <Td>{e.title}</Td>
                <Td>{e.body}</Td>
                <Td>
                  <Flex gap='3'>
                    <Button colorScheme="teal" onClick={() => handleEdit(e)}>
                      Edit
                    </Button>
                    <Button>
                      <Link href={`/${e.id}`}>Detail</Link>
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            )) : (null)}
          </Tbody>
        </Table>
      </Container>
      <Modal isOpen={open} size='xl' onClose={modalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={'2'}>
            {selected && (
                <EditModalForm el={selected} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
}
