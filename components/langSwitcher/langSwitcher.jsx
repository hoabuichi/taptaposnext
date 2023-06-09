import { useRef, useState } from "react";
import useClickOutside from "@/hooks/useClickOutSide";
import { LANGUAGES } from "@/utils/constants";
import Link from 'next/link';
import Image from 'next/image';
import styles from './langSwitcher.module.scss';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';


export default function LangSwitcher() {

    const router = useRouter()
    const { locale } = router;
    const { i18n } = useTranslation();

    const [activelang, setActivelang] = useState(() => {
        return locale || 'en'
    });

    const wrapperRef = useRef(null);
    const [isLangOpen, setIsLangOpen] = useClickOutside(wrapperRef);

    const onToggleLanguageClick = (newLocale) => {
        setIsLangOpen(false); 
        setActivelang(newLocale);
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
      }

    return <div ref={wrapperRef} className={`${styles["languages"]} mr-[20px] relative h-[48px] flex items-center relative z-10`}>
    <div className='trigger flex items-center cursor-pointer' onClick={() => setIsLangOpen(prevValue => !prevValue)}>
        <Image className='w-[24px] h-[24px] rounded-full mr-[3px]' src={locale === 'en' ? LANGUAGES[0].flag : LANGUAGES[1].flag} alt="language-flag" width="24" height="24" />
        <Image src="/images/chrevDown.svg" alt="me" width="12" height="12" />
    </div>
    {isLangOpen ? <div className={`${styles["language-content"]} ]overflow-hidden shadow-light w-[180px] rounded-md mt-[10px] absolute z-10 top-[35px] right-0 bg-white`}>
        {LANGUAGES.map(language => {
            return <button onClick={() => onToggleLanguageClick(language.code)} key={language.code} className={`flex items-center py-[10px] px-[15px] cursor-pointer w-full hover:bg-light-blue ${activelang === language.code ? styles.active : ""}`}>
                    <Image className='mr-[10px] w-[24px] h-[24px] rounded-full' src={language.flag} alt="language-flag" width="24" height="24" />
                    <span className='truncate'>{language.label}</span>
                </button>
        })}
    </div> : null}
</div>
}