import styles from './Header.module.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import Image from 'next/image';
import { useState } from 'react';
import LangSwitcher from '../langSwitcher/langSwitcher';

export default function Header(props) {

    const { t } = useTranslation('common');

    const [showMobileNav, setShowMobileNav] = useState(false);

    return  <div className={`${styles["header-container"]} bg-white shadow-header fixed top-0 left-0 w-full z-20`}>
                <div className='container mx-auto py-[15px]'>
                    <div className={`${styles["main-content"]} flex items-center justify-between`}>
                        <div className={`${styles["left-side"]} flex items-center`}>
                            <Link href='/'><Image src="/images/logo.svg" alt="logo" width="70" height="43" className={`${styles.logo} mr-[88px]`} /></Link>
                            <ul className='navigation-container flex'>
                                { props.isAbout ? <>
                                    <Link href='/'>
                                        <li className='mr-[32px] text-base font-semibold'>{t("home")}</li>
                                    </Link>
                                    <Link href='/contact-us'>
                                        <li className='mr-[32px] text-base font-semibold'>{t('contact-sale')}</li>
                                    </Link>
                                </> : <>
                                    <li className='mr-[32px] text-base font-semibold'><Link href="#features">{t('features')}</Link></li>
                                    <li className='mr-[32px] text-base font-semibold'><Link href="#business-type">{t("business-type")}</Link></li>
                                    <li className='mr-[32px] text-base font-semibold'><Link href="#how-it-works">{t("how-it-works")}</Link></li>
                                    <li className='mr-[32px] text-base font-semibold'><Link href="#partners-container">{t("our-partners")}</Link></li>
                                </>
                                 
                                }
                                
                            </ul>
                        </div>
                        <div className={`${styles["right-side"]} flex items-center`}>
                            <LangSwitcher />
                            <a className='mr-[20px] text-blue-ocean text-base font-bold relative z-10' href='#download'>{t("download-app")}</a>
                            <Link href='/contact-us'>                            
                                <button className={`${styles["contact-sale-btn"]} flex items-center text-white text-base font-bold relative z-10`}>{t("contact-sale")} <Image src="/images/arrowcircleright.svg" alt="sale-icon" className={`${styles["sale-icon"]} ml-[5px]`} width="20" height="20" /></button>
                            </Link>
                        </div>
                    </div>
                    <div className={`${styles["main-content-mobile"]} flex items-center justify-between`}>
                        <button className={`nav-bar-icon ${showMobileNav ? "border rounded-[4px] border-black-light-dark" : ""}`} onClick={() => setShowMobileNav(prevValue => !prevValue)}>
                            { showMobileNav ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }

                        </button>
                        <Link href='/'><Image src="/images/logo-mobile.svg" alt="logo" width="147" height="35" /></Link>
                        <LangSwitcher />
                        {showMobileNav ? <div className={`${styles["nav-bar-content"]} fixed top-[78px] left-0`}>
                            <div className='flex flex-col pl-[33px] items-start justify-between h-full'>
                                <ul className='navigation-container'>
                                { props.isAbout ? <>
                                    <Link href='/'>
                                        <li onClick={() => setShowMobileNav(prevValue => !prevValue)} className='mr-[32px] mt-[32px] text-base font-semibold'>{t("home")}</li>
                                    </Link>
                                    <Link onClick={() => setShowMobileNav(prevValue => !prevValue)} href='/contact-us'>
                                        <li className='mr-[32px] mt-[32px] text-base font-semibold'>{t("contact-sale")}</li>
                                    </Link>
                                </> : <>
                                    <li className='mr-[32px] mt-[32px] text-base font-semibold'><Link onClick={() => setShowMobileNav(prevValue => !prevValue)} href="#features">{t("features")}</Link></li>
                                    <li className='mr-[32px] mt-[32px] text-base font-semibold'><Link onClick={() => setShowMobileNav(prevValue => !prevValue)} href="#business-type">{t("business-type")}</Link></li>
                                    <li className='mr-[32px] mt-[32px] text-base font-semibold'><Link onClick={() => setShowMobileNav(prevValue => !prevValue)} href="#how-it-works">{t("how-it-works")}</Link></li>
                                    <li className='mr-[32px] mt-[32px] text-base font-semibold'><Link onClick={() => setShowMobileNav(prevValue => !prevValue)} href="#partners-container">{t("our-partners")}</Link></li></> }
                                </ul>
                                <div className={`${styles["button-containers"]} mt-[60px]`}>
                                    <Link href='/contact-us'>
                                        <button onClick={() => setShowMobileNav(prevValue => !prevValue)} className={`${styles["contact-sale-btn"]} flex justify-center flex items-center text-white text-base font-bold relative z-10 w-[300px]`}>{t("contact-sale")} <Image src="/images/arrowcircleright.svg" alt="sale-icon" className={`${styles["sale-icon"]} ml-[5px]`} width="20" height="20" /></button>
                                    </Link>
                                    <button onClick={() => setShowMobileNav(prevValue => !prevValue)} className='flex justify-center border border-blue-ocean inline-block text-blue-ocean px-[20px] rounded-[50px] py-[12px] flex items-center text-base font-bold mt-[20px] w-[300px]'>{t("download-app")}</button>
                                </div>
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>
}