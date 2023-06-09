import styles from './intro.module.scss';
import { useInView } from 'react-intersection-observer';
import BackgroundBlur from '../backgroundBlur/backgroundBlur';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';


export default function Intro() {

    const { t } = useTranslation('common');

    const introInfo = useInView({
        /* Optional options */
        threshold: 0,
    });

    const introImg = useInView({
        /* Optional options */
        threshold: 0,
    });

    return <section id="intro">
        <div className={`${styles['intro-container']} pt-[200px] pb-[130px] bg-white-70 relative overflow-hidden`}>
            <BackgroundBlur position="top-[-100px] right-[-100px] w-[400px] h-[400px]" />
            <div className="container mx-auto">
                <div className={`${styles['main-content']} flex justify-between`}>
                    <div className={`${styles['intro-info']} ${styles['on-view']}`} ref={introInfo.ref}>
                        <span className="text-cyan-basic py-[4px] px-[8px] bg-cyan-light rounded-[5px] mb-[30px] inline-block">{t("app-name")}</span>
                        <h1 className={`${styles['main-title']} text-[64px] font-extrabold text-black-light-dark`}>{t("app-banner-text-1")},</h1>
                        <h1 className={`${styles['main-title']} main-title text-[64px] font-extrabold ${styles['gradient']} inline-block`}>{t("app-banner-text-2")}</h1>
                        <p className='text-grey-light-dark text-[18px] mt-[32px] mb-[40px]'>{t("app-banner-des")}</p>
                        <div className='call-to-actions flex'>
                            <Link href='/contact-us'>
                                <button className='whitespace-nowrap bg-blue-ocean px-[20px] rounded-[50px] py-[12px] mr-[22px] flex items-center text-white text-base font-bold'>
                                    {t("contact-sale")} <Image src="/images/arrowcircleright.svg" className='ml-[5px] sale-icon' alt="sale icon" width="20" height="20" />
                                </button>
                            </Link>
                            <button className='whitespace-nowrap border border-blue-ocean text-blue-ocean px-[20px] rounded-[50px] py-[12px] flex items-center text-base font-bold'>{t("download-app")}</button>
                        </div>
                    </div>
                    <div className={`${styles['intro-banner']} relative -top-[50px] ${introImg.inView ? styles['on-view'] : ""}`} ref={introImg.ref}>
                        <Image src="/images/intro-banner.png" alt="Intro Banner" width="575" height="477" />
                    </div>
                </div>
            </div>
            <BackgroundBlur position="bottom-[250px] left-[-200px] w-[300px] h-[300px]" />
        </div>
    </section>
}