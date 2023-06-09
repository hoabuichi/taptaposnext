import styles from './partners.module.scss';
import { useInView } from 'react-intersection-observer';
import { useTranslation, Trans } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

export default function Partners() {

    const { t } = useTranslation('common');

    const partners = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
    });

    return <section id="partners-container">
        <div className={`${styles['partners-container']} pb-[0px] pt-[30px] bg-white-70`} >
            <div className="container mx-auto">
                <h3 className={`${styles['main-title']} text-[48px] font-bold text-center`}><Trans i18nKey="partners-title" components={{newLine: <br />, innerText: <span />}} /></h3>
                <p className={`${styles['partners-description']} text-center mt-[16px] mx-[400px] text-[18px] mb-[50px] text-grey-light-dark`}>{t("partners-des")}</p>
                <div className={`${styles['desktop']} ${styles['partners-list']} flex-wrap flex justify-between px-[100px] ${partners.inView ? styles['on-view'] : ""}`} ref={partners.ref}>
                    <Image className='mb-[40px] mx-[30px]' src="/images/mastercard.svg" alt="partner logo" width="150" height="48" />
                    <Image className='mb-[40px] mx-[30px]' src="/images/adyen.svg" alt="partner logo" width="150" height="48" />
                    <Image className='mb-[40px] mx-[30px]' src="/images/napas.svg" alt="partner logo" width="150" height="48" />
                    <Image className='mb-[40px] mx-[30px]' src="/images/visa.svg" alt="partner logo" width="150" height="48" />
                    <Image className='mb-[40px] mx-[30px]' src="/images/paypal.svg" alt="partner logo" width="150" height="48" />
                </div>
                <div className={`${styles['partner-mobile']}`}>
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    >
                        <SwiperSlide><Image src="/images/mastercard.svg" alt="partner logo" width="150" height="48" /></SwiperSlide>
                        <SwiperSlide><Image src="/images/adyen.svg" alt="partner logo" width="150" height="48" /></SwiperSlide>
                        <SwiperSlide><Image src="/images/napas.svg" alt="partner logo" width="150" height="48" /></SwiperSlide>
                        <SwiperSlide><Image src="/images/visa.svg" alt="partner logo" width="150" height="48" /></SwiperSlide>
                        <SwiperSlide><Image src="/images/paypal.svg" alt="partner logo" width="150" height="48" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    </section>
}