"use client";

import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Heading,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const createDatas = async (title, body, id) => {
  const create = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: title,
    body: body,
    userId: id,
  }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  return create
}

export default function AddPosts() {
  const schema = yup.object({
    title: yup.string().required("Title Is Required").min(5),
    body: yup.string().required("Body Is Required").min(5),
  });
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const title = data.title;
    const bd = data.body;
    const id = 1;

    createDatas(title, bd, id + 1).then((respon) => {
      toast({
        title: 'Posts created.',
          description: `posts ${respon.data.title} has been created`,
          status: 'success',
          duration: 9000,
          isClosable: true,
      })
     reset()
    });
  };
  return (
    <Box maxW="md" mx={"auto"}>
      <Heading as="h2" size="2xl" color={"teal.500"} textAlign={"center"}>
        Form Add Posts
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.title}>
          <FormLabel>Title</FormLabel>
          <Input type="text" name="title" {...register("title")} />

          <FormErrorMessage>
            {errors.title && errors.title?.message}{" "}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.body}>
          <FormLabel>Body</FormLabel>
          <Input type="text" name="body" {...register("body")} />

          <FormErrorMessage>
            {errors.body && errors.body?.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          w={"60%"}
          borderRadius='full'
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          display={'block'}
          mx='auto'
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
