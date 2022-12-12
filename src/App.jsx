import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraaaa" },
      { type: "paragraph", content: "Acabei de subi mais um projeto do meu portifa." },
      { type: "link", content: "diego.design" }
    ],
    publishedAt: new Date('2022-12-11 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/felipe.png",
      name: "Felipe",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraaaa" },
      { type: "paragraph", content: "Acabei de subi mais um projeto do meu portifa." },
      { type: "link", content: "felipe.design" }
    ],
    publishedAt: new Date('2022-12-11 10:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}


