import { useRouter } from "next/router"

const Post = ({post}) => {
  const router = useRouter()

  if(router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{post.id} </h2>
      <p>{post.title}</p>
    </div>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: true
  }
}

export const getStaticProps = async (context) => {
  const { params } = context
  const post = await fetch(`http://localhost:5000/posts/${params.postId}`).then((res) => res.json())
  return {
    props: {
      post,
    },
  }
}

export default Post
