import axios from "axios"
import DetailPosts from "../components/DetailPosts"

const detail = async (id) => {
    const det = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return det.data
}
export default async function PageDetail({ params }) {
    const data = await detail(params.id)
    return (
        <DetailPosts detail={data} />
    )
}