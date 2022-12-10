import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react' //importando os icones

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60v"/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/felipeanselmonascimento.png" />
                <strong>Felipe Anselmo</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={24}/>
                    Edit Profile!
                </a>
            </footer>
        </aside>
    )
}