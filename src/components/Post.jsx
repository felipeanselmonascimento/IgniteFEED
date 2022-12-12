import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'

export function Post({ author, content, publishedAt }) {

    const publishedDateFormmatted = format(publishedAt, "d 'of' LLLL HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormmatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    }
                    if (line.type === 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
                <p><a href="#">#novoprojeto#rockseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Leave your feedback!</strong>
                <textarea placeholder="leave a comment..." />
                <footer>
                    <button type="submit">Post</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}