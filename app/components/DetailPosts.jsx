"use client"

import { ArrowBackIcon} from "@chakra-ui/icons"
import { Box, Card, CardBody, Container, Heading, Button } from "@chakra-ui/react"
import Link from "next/link"

export default function DetailPosts({ detail }) {

    return (
        <Container maxW='6xl' mt='7'>
            <Heading as='h2' size='2xl' mb='4'>
                Detail Post
            </Heading>
            <Card>
                <CardBody>
                    <Box mb={5}>
                        <p>Detail :</p>
                        <h1>{detail.title}</h1>
                    </Box>
                    <p>{detail.body}</p>
                    <Button rightIcon={<ArrowBackIcon />} mt='3' colorScheme='teal' variant='outline'>
                        <Link href='/'>Back</Link>
                    </Button>
                </CardBody>
            </Card>
        </Container>
    )
}