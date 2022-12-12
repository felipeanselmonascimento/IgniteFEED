import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, deleteComment }) {

    const handleDeleteComment = () => {
        deleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/felipe.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlao</strong>
                            <time title="10 of december 20:55h" dateTime="2022-12-10 20:55:00">Cerca de 1 hora atras</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Delete Comment">
                            <Trash size={24}/>
                        </button>    
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Cheer <span>10</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}