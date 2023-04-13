import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Button,
    Textarea
} from '@chakra-ui/react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const updatedPosts = async (title, body, id, userId) => {
    const put = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        id: 1,
        title: title,
        body: body,
        userId: userId,
    }, {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return put
}

export default function EditModalForm({ el }) {
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = (data) => {
        const title = data.title
        const body = data.body
        updatedPosts(title, body, el.id, el.userId).then(() => {
            alert('posts updated !!');
            location.reload()
        }).catch(() => alert('Sorry somethink wrong!'))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={3}>
                <FormLabel>Title</FormLabel>
                <Input type='text' defaultValue={el.title} {...register('title')} />
            </FormControl>
            <FormControl mb={3}>
                <FormLabel>Body</FormLabel>
                <Textarea size={'md'} defaultValue={el.body} {...register('body')} />
            </FormControl>
            <Button colorScheme={'teal'} type='submit' w='60%' display={'block'} mx={'auto'} mb={3}>Edit</Button>
        </form>
    )
}