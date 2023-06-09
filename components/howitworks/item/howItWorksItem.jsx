import { useRef } from 'react';
import useClickOutside from '@/hooks/useClickOutSide';
import styles from './howitWorksItem.module.scss';


export default function HowItWorksItem(props) {

    const wrapperRef = useRef(null);
    const { type, toggleVisible } = props;
    const [isFocused, setIsFocused] = useClickOutside(wrapperRef);

    return <div ref={wrapperRef}  className={isFocused ? `bg-white rounded-[16px] p-[16px] pt-[8px] pl-[0px] shadow-shadow-08 transition-all ` : `${styles['how-it-works-item']} transition-all`}>
                <button className={isFocused ? `flex items-center py-[8px] px-[16px] bg-transparent ${styles['trigger']} rounded-[100px] cursor-pointer` : 
                    `flex items-center bg-light-blue-10 ${styles['trigger']} py-[8px] px-[16px] rounded-[100px] cursor-pointer ${styles['closed']}`}>
                    <div className={isFocused ? "" : styles['open-trigger']}>
                        {isFocused ? <svg onClick={() => {setIsFocused(false);toggleVisible(type, false);}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px] text-blue-ocean">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                </svg> : 
                                <svg onClick={() => {setIsFocused(true);toggleVisible(type, true);}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px] text-blue-ocean">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                                </svg>
                        }
                    </div>
                    <span className={`${styles['item-title']} ml-[10px] text-[16px] font-bold shrink-0 ${isFocused ? "" : styles['closed']}`}>{props.title}</span>
                </button>
            <div className={isFocused ? `${styles['item-content']} ${styles['how-it-works-content']} overflow-hidden w-[200px] opacity-1 pl-[16px] max-h-none` : `${styles['item-content']} overflow-hidden w-[200px] mt-[8px] opacity-0 max-h-0`}>
                <p className={`${styles['item-description']} text-[14px] text-grey-light-dark`}>{props.description}</p>
            </div>
        </div>
}