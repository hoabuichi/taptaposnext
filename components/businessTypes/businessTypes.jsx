import SectionTitle from "../sectionTitle/sectionTitle";
import styles from './businessType.module.scss';
import BusinessCard from "../businessCard/businessCard";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation, Trans } from 'next-i18next';
import Image from 'next/image';


const businessTypeInit = [{
    id: 1,
    icon: "/images/shopping-cart.svg",
    name: "retails.title",
    description: "retails.description",
    isActive: true
},
{
    id: 2,
    icon: "/images/fast-food.svg",
    name: "f&b.title",
    description: "f&b.description",
    isActive: false
},
{
    id: 3,
    icon: "/images/star.svg",
    name: "other.title",
    description: "other.description",
    isActive: false
}]

export default function BusinessTypes() {

    const [businessType, setBusinessType] = useState(businessTypeInit);
    const { t } = useTranslation('common');

    const businessTypes = useInView({
        /* Optional options */
        threshold: 0,
    });

    const setActiveType = (id) => {
        const tempTypes = businessType.map(item => {
            return {
                ...item,
                isActive: item.id === id
            }
        });
        setBusinessType(tempTypes);
    }

    return <section id="business-type">
        <div className={`${styles['business-type-container']}`}>
            <div className={`${styles['container']} mx-auto container`}>
                <div className={`${styles['main-content']} py-[100px] px-[90px] bg-blue-dark rounded-[32px]`}>
                    <SectionTitle title={`02 . ${t("business-type")}`} borderColor="border-black-light-dark" />
                    <div className="business-heading mt-[20px] flex">
                        <div className="shrink-0 icon w-[36px] h-[36px] rounded-full border border-white flex items-center justify-center bg-cyan-dark mt-[15px] mr-[30px]">
                            <Image src="/images/businessTypeIcon.svg" alt="business type icon" width="20" height="20" />
                        </div>
                        <div className={`${styles['info']}`}>
                            <h2 className={`${styles['main-title']} text-white text-[48px] font-bold mb-[16px]`}><Trans i18nKey="business-type-title" components={{newLine: <br />, innerText: <span />}} /></h2>
                            <p className="text-white text-[18px] w-[620px]">{t("business-type-description")}</p>
                        </div>
                    </div>
                    <div className={`${styles['business-list']} mt-[53px] flex justify-between`}>
                        <div className={`${styles['business-types']} w-[604px] shrink-0`} ref={businessTypes.ref}>
                            {businessType.map(item => <BusinessCard onView={businessTypes.inView} onClickItem={() => setActiveType(item.id)} key={item.id} icon={item.icon} name={t(item.name)} description={t(item.description)} isActive={item.isActive} id={item.id} />)}
                        </div>
                        <div className={`${styles['business-img']} relative top-[-40px]`}>
                            <Image src="/images/business-type-retail.png" alt="business type img" width="480" height="357" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}