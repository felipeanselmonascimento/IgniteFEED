import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import { useState } from 'react'

export function Post({ author, content, publishedAt }) {

    const [comments, setComments] = useState(['Post muito bacana em ?'])

    const [newCommentText, SetNewCommentText] = useState('')

    const publishedDateFormmatted = format(publishedAt, "d 'of' LLLL HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true
    })

    const handleCreateNewComment = () => {
        event.preventDefault()

        setComments([...comments, newCommentText])
        SetNewCommentText('')
    }

    const handleNewCommentChange = () => {
        //event.target pega o textarea pq foi add no textarea e nao no formulario
        const newComment = event.target.value

        SetNewCommentText(newComment)
    }

    const deleteComment = (commentIWantRemove) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentIWantRemove       
        })
        //no react a gente sempre vai trabalhar com imutabilidade a gente vai sempre criair um valor novo e depois salvar no estado

        setComments(commentsWithoutDeletedOne)
    }

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
                        return <p key={line.content}>{line.content}</p>
                    }
                    if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
                <p><a href="#">#novoprojeto#rockseat</a></p>
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback!</strong>
                <textarea 
                    placeholder="leave a comment..."
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                <footer>
                    <button type="submit" disabled={newCommentText.length === 0}>Post</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment OnDeleteComment={deleteComment} key={comment} content={comment}/>
                })}
            </div>
        </article>
    )
}