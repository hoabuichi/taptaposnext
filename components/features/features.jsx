import styles from './features.module.scss';
import Scrollspy from 'react-scrollspy';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../sectionTitle/sectionTitle';
import { useTranslation, Trans } from 'next-i18next';
import Image from 'next/image';


export default function Features() {

    const { t } = useTranslation('common');
    const feat1 = useInView({
        /* Optional options */
        threshold: 0,
    });

    const feat2 = useInView({
        /* Optional options */
        threshold: 0,
    });

    const feat3 = useInView({
        /* Optional options */
        threshold: 0,
    });

    const feat4 = useInView({
        /* Optional options */
        threshold: 0,
    });


    return <section id="features">
        <div className={`${styles['feature-container']}`}>
            <div className="container mx-auto">
                <SectionTitle title={`01 . ${t("our-features")}`} borderColor="blue-light-separator" />
                <div className="section-content">
                    <p className={`${styles['main-title']} text-black-light-dark text-[48px] font-bold mt-[30px]`}>
                        <Trans i18nKey="our-features-title" components={{newLine: <br />, innerText: <span />}} />
                    </p>
                    <div className={`${styles['main-content']} flex`}>
                        <div className={`${styles['spy-container']} sticky top-0`}>
                            <div className={`mr-[70px] w-[220px] shrink-0 relative ${styles['scroll-py-sections']}`}>
                                <Scrollspy offset={-200} className={`transition-all duration-700`} items={ ['feature-1', 'feature-2', 'feature-3', 'feature-4'] } currentClassName={`${styles['section-active']}`}>
                                    <li className={`${styles['feature-title']} relative`}><span className={`${styles['mobile-title']}  ${styles['one']} text-black-light-dark text-[16px] py-[9px] inline-block`}>{t("our-features-nfc")}</span><a className='text-black-light-dark text-[16px] py-[9px] inline-block' href="#feature-1">{t("our-features-nfc")}</a></li>
                                    <li className={`${styles['feature-title']} relative`}><span className={`${styles['mobile-title']}  ${styles['two']} text-black-light-dark text-[16px] py-[9px] inline-block`}>{t("our-features-fast-transfer")}</span><a className='text-black-light-dark text-[16px] py-[9px] inline-block' href="#feature-2">{t("our-features-fast-transfer")}</a></li>
                                    <li className={`${styles['feature-title']} relative`}><span className={`${styles['mobile-title']}  ${styles['three']} text-black-light-dark text-[16px] py-[9px] inline-block`}>{t("our-features-multi-currency")}</span><a className='text-black-light-dark text-[16px] py-[9px] inline-block' href="#feature-3">{t("our-features-multi-currency")}</a></li>
                                    <li className={`${styles['feature-title']} relative`}><span className={`${styles['mobile-title']}  ${styles['four']} text-black-light-dark text-[16px] py-[9px] inline-block`}>{t("our-features-dashboard")}</span><a className='text-black-light-dark text-[16px] py-[9px] inline-block' href="#feature-4">{t("our-features-dashboard")}</a></li>
                                </Scrollspy>
                            </div>
                        </div>
                        <div className='grow'>
                            <section id="feature-1" ref={feat1.ref}>
                                <div className={`${feat1.inView ? styles['is-feature-active'] : ''} ${styles['feature-content']} pb-[50px] pt-[100px] flex justify-between`}>
                                    <div className={`w-[357px] ${styles['feature-info']}`}>
                                        <h2 className='font-bold text-[32px] text-black-light-dark pb-[16px]'>{t("our-features-nfc")}</h2>
                                        <p className='text-[16px] text-grey-light-dark'>{t("our-features-nfc-des")}</p>
                                    </div>
                                    <div className='img-container flex justify-center'>
                                        <Image src="/images/features-nfc.png" alt="features" width="470" height="542" />
                                    </div>
                                </div>
                            </section>
                            <section id="feature-2" ref={feat2.ref}>
                                <div className={`${feat2.inView ? styles['is-feature-active'] : ''} ${styles['feature-content']} pb-[50px] pt-[100px] flex justify-between`}>
                                    <div className={`w-[357px] ${styles['feature-info']}`}>
                                        <h2 className='font-bold text-[32px] text-black-light-dark mb-[16px]'>{t("our-features-fast-transfer")}</h2>
                                        <p className='text-[16px] text-grey-light-dark'>{t("our-features-fast-transfer-des")}</p>
                                    </div>
                                    <div className='img-container flex justify-center'>
                                        <Image src="/images/features-nfc.png" alt="features" width="470" height="542" />
                                    </div>
                                </div>
                            </section>
                            <section id="feature-3" ref={feat3.ref}>
                                <div className={`${feat3.inView ? styles['is-feature-active'] : ''} ${styles['feature-content']} pb-[50px] pt-[100px] flex justify-between`}>
                                    <div className={`w-[357px] ${styles['feature-info']}`}>
                                        <h2 className='font-bold text-[32px] text-black-light-dark mb-[16px]'>{t("our-features-multi-currency")}</h2>
                                        <p className='text-[16px] text-grey-light-dark'>{t("our-features-multi-currency-des")}</p>
                                    </div>
                                    <div className='img-container flex justify-center'>
                                        <Image src="/images/features-nfc.png" alt="features" width="470" height="542" />
                                    </div>
                                </div>
                            </section>
                            <section id="feature-4" ref={feat4.ref}>
                                <div className={`${feat4.inView ? styles['is-feature-active'] : ''} ${styles['feature-content']} pb-[130px] pt-[100px] flex justify-between`}>
                                    <div className={`w-[357px] ${styles['feature-info']}`}>
                                        <h2 className='font-bold text-[32px] text-black-light-dark mb-[16px]'>{t("our-features-dashboard")}</h2>
                                        <p className='text-[16px] text-grey-light-dark'>{t("our-features-dashboard-des")}</p>
                                    </div>
                                    <div className='img-container flex justify-center'>
                                        <Image src="/images/features-nfc.png" alt="features" width="470" height="542" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}