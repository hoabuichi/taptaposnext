import styles from './backgroundBlur.module.scss';


export default function BackgroundBlur(props) {
    return <div className={`${props.position} ${styles['blur-background']} absolute`}></div>
}