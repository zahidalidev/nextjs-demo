
import { useRouter } from 'next/router'

export default function Home({ posts }) {
  const router = useRouter()
  return (
    <div className='flex f-full items-center'>
      {posts.map((item) => (
        <div onClick={() => router.push(`/posts/${item.id}`)} key={item.id.toString()} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
           <h3>id: {item.id}</h3>
           <p style={{marginLeft: 10}} >{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await fetch('http://localhost:5000/posts').then((res) => res.json())
  return {
    props: {
      posts: posts,
    },
  }
}
