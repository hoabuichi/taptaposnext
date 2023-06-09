import SectionTitle from "../sectionTitle/sectionTitle";
import shoppingCartIcon from "../../assets/images/shopping-cart.svg";
import starIcon from "../../assets/images/star.svg";
import fastFoodIcon from "../../assets/images/fast-food.svg";
import businessTypeIcon from "../../assets/images/businessTypeIcon.svg";
import retailImg from "../../assets/images/business-type-retail.png";
import './businessType.scss';
import BusinessCard from "../businessCard/businessCard";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useTranslation, Trans } from "react-i18next";


const businessTypeInit = [{
    id: 1,
    icon: shoppingCartIcon,
    name: "retails.title",
    description: "retails.description",
    isActive: true
},
{
    id: 2,
    icon: fastFoodIcon,
    name: "f&b.title",
    description: "f&b.description",
    isActive: false
},
{
    id: 3,
    icon: starIcon,
    name: "other.title",
    description: "other.description",
    isActive: false
}]

export default function BusinessTypes() {

    const [businessType, setBusinessType] = useState(businessTypeInit);
    const { t } = useTranslation();

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
        <div className="business-type-container">
            <div className="container mx-auto">
                <div className="main-content py-[100px] px-[90px] bg-blue-dark rounded-[32px]">
                    <SectionTitle title={`02 . ${t("business-type")}`} borderColor="border-black-light-dark" />
                    <div className="business-heading mt-[20px] flex">
                        <div className="shrink-0 icon w-[36px] h-[36px] rounded-full border border-white flex items-center justify-center bg-cyan-dark mt-[15px] mr-[30px]">
                            <img alt="arrow circle icon" src={businessTypeIcon} />
                        </div>
                        <div className="info">
                            <h2 className="main-title text-white text-[48px] font-bold mb-[16px]"><Trans i18nKey="business-type-title" components={{newLine: <br />, innerText: <span />}} /></h2>
                            <p className="text-white text-[18px] w-[620px]">{t("business-type-description")}</p>
                        </div>
                    </div>
                    <div className="business-list mt-[53px] flex justify-between">
                        <div className={`business-types w-[604px] shrink-0 ${businessTypes.inView ? "on-view" : "off-view"}`} ref={businessTypes.ref}>
                            {businessType.map(item => <BusinessCard onClickItem={() => setActiveType(item.id)} key={item.id} icon={item.icon} name={t(item.name)} description={t(item.description)} isActive={item.isActive} id={item.id} />)}
                        </div>
                        <div className="business-img relative top-[-40px]">
                            <img alt="business type img" src={retailImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}