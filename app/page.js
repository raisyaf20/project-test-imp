import axios from "axios";
import AddPosts from "./components/Addpost";
import ListPosts from "./components/ListPosts";

const getDatas = async () => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return posts.data;
};

export default async function Home() {
  const datas = await getDatas();
  return (
    <>
      <AddPosts />
      <ListPosts posts={datas} />

    </>
  );
}
