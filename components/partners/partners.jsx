import './partners.scss';
import adyen from '../../assets/images/adyen.svg';
import mastercard from '../../assets/images/mastercard.svg';
import napas from '../../assets/images/napas.svg';
import visa from '../../assets/images/visa.svg';
import paypal from '../../assets/images/paypal.svg';
import { useInView } from 'react-intersection-observer';
import { useTranslation, Trans } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Partners() {

    const { t } = useTranslation();

    const partners = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true
    });

    return <section id="partners-container">
        <div className={`partners-container pb-[0px] pt-[30px] bg-white-70`} >
            <div className="container mx-auto">
                <h3 className="main-title text-[48px] font-bold text-center"><Trans i18nKey="partners-title" components={{newLine: <br />, innerText: <span />}} /></h3>
                <p className='partners-description text-center mt-[16px] mx-[400px] text-[18px] mb-[50px] text-grey-light-dark'>{t("partners-des")}</p>
                <div className={`desktop partners-list flex-wrap flex justify-between px-[100px] ${partners.inView ? "on-view" : ""}`} ref={partners.ref}>
                    <img alt="partner logo" className='mb-[40px] mx-[30px]' src={mastercard} />
                    <img alt="partner logo" className='mb-[40px] mx-[30px]' src={adyen} />
                    <img alt="partner logo" className='mb-[40px] mx-[30px]' src={napas} />
                    <img alt="partner logo" className='mb-[40px] mx-[30px]' src={visa} />
                    <img alt="partner logo" className='mb-[40px] mx-[30px]' src={paypal} />
                </div>
                <div className='partner-mobile'>
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    >
                        <SwiperSlide><img alt="partner logo" src={mastercard} /></SwiperSlide>
                        <SwiperSlide><img alt="partner logo" src={adyen} /></SwiperSlide>
                        <SwiperSlide><img alt="partner logo" src={napas} /></SwiperSlide>
                        <SwiperSlide><img alt="partner logo" src={visa} /></SwiperSlide>
                        <SwiperSlide><img alt="partner logo" src={paypal} /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    </section>
}