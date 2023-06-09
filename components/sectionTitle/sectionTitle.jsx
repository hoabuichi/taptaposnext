import styles from './sectionTitle.module.scss';

export default function SectionTitle(props) {
    return <div className={`${styles['section-separator']} flex items-center w-[500px]`}>
                <p className="shrink-0 text-grey-light-dark text-[16px] mr-[8px]">{props.title}</p>
                <div className={`border-t w-full ${props.borderColor}`}></div>
            </div>
}