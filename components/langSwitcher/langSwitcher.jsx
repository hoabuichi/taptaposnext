import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
import { LANGUAGES } from "@/utils/constants";
import Link from 'next/link';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import styles from './langSwitcher.module.scss';
import { useRouter } from 'next/router'


export default function LangSwitcher() {

    const router = useRouter()

    const [activelang, setActivelang] = useState(() => {
        return router.locale || 'en'
    });

    const wrapperRef = useRef(null);
    const [isLangOpen, setIsLangOpen] = useClickOutside(wrapperRef);

    const getActiveFlag = () => {
        let lang = LANGUAGES.find(lang => lang.code === activelang);
        return lang.flag
    }

    return <div ref={wrapperRef} className={`${styles["languages"]} mr-[20px] relative h-[48px] flex items-center relative z-10`}>
    <div className='trigger flex items-center cursor-pointer' onClick={() => setIsLangOpen(prevValue => !prevValue)}>
        <img className='w-[24px] h-[24px] rounded-full mr-[3px]' alt="language-flag" src={getActiveFlag()} />
        <Image src="/images/chrevDown.svg" alt="me" width="12" height="12" />
    </div>
    {isLangOpen ? <div className={`${styles["language-content"]} ]overflow-hidden shadow-light w-[180px] rounded-md mt-[10px] absolute z-10 top-[35px] right-0 bg-white`}>
        {LANGUAGES.map(language => {
            return <Link href="/" locale={language.code} key={language.code}>
                <button onClick={() => {setIsLangOpen(false); setActivelang(language.code)}} className={`flex items-center py-[10px] px-[15px] cursor-pointer w-full hover:bg-light-blue ${activelang === language.code ? styles.active : ""}`}>
                    <img className='mr-[10px] w-[24px] h-[24px] rounded-full' alt="language-flag"  src={language.flag} />
                    <span className='truncate'>{language.label}</span>
                </button>
          </Link>
        })}
    </div> : null}
</div>
}