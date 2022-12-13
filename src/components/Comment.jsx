import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, OnDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    const handleLikeCount = () => {
        setLikeCount(likeCount + 1)
    }

    const handleDeleteComment = () => {
        OnDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />
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
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Cheer <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}