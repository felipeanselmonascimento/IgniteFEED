import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="10 of december 20:55h" dateTime="2022-12-10 20:55:00">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraaaa</p>
                <p>Acabei de subi mais um projeto do meu portifa.</p>
                <p><a href="#">diego.design</a></p>
                <p><a href="#">#novoprojeto#rockseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Leave your feedback!</strong>
                <textarea placeholder="leave a comment..." />
                <footer>
                    <button type="submit">Post</button>
                </footer>
            </form>
        </article>
    )
}