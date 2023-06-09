import SectionTitle from "../sectionTitle/sectionTitle";
import './howitworks.scss';
import howItWorksImage from "../../assets/images/how-it-works.svg";
import howItWorksImageMobile from "../../assets/images/how-it-works-mobile.svg";
import HowItWorksItem from "./item/howItWorksItem";
import BackgroundBlur from "../backgroundBlur/backgroundBlur";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

const items = [{
    id: "payment-link",
    title: "how-it-works-item.payment-link.title",
    description: "how-it-works-item.payment-link.des"
},
{
    id: "drive-sale",
    title: "how-it-works-item.drive-sale.title",
    description: "how-it-works-item.drive-sale.des"
},
{
    id: "sale-online",
    title: "how-it-works-item.sale-online.title",
    description: "how-it-works-item.sale-online.des"
},
{
    id: "advance-report",
    title: "how-it-works-item.advance-report.title",
    description: "how-it-works-item.advance-report.des"
},
{
    id: "payout-service",
    title: "how-it-works-item.payment-service.title",
    description: "how-it-works-item.payment-service.des"
},
{
    id: "web-generic",
    title: "how-it-works-item.web-generic.title",
    description: "how-it-works-item.web-generic.des"
},{
    id: "cash-flow",
    title: "how-it-works-item.cash-flow.title",
    description: "how-it-works-item.cash-flow.des"
}]

export default function HowItWorks() {

    const [activeItem, setActiveItem] = useState("");

    const { t } = useTranslation();

    const toggleVisible = (id, isFocused) => {
        if (isFocused) {
            setActiveItem(id);
        } else {
            setActiveItem("");
        }
    };


    return <section id="how-it-works">
        <div className="how-it-works-container py-[140px] relative bg-white-70">
            <div className="blur-bgs">           
                <BackgroundBlur position="top-[-50px] right-[-200px] w-[400px] h-[400px]" />
                <BackgroundBlur position="bottom-[-50px] left-[-200px] w-[400px] h-[400px]" />
            </div>
            <div className="container mx-auto">
                <SectionTitle title={`03 . ${t("how-it-works")}`} borderColor="blue-light-separator" />
                <div className="section-header grid grid-cols-2 mt-[20px]">
                    <h2 className="main-title text-black-light-dark text-[48px] font-bold mb-[16px]"><Trans i18nKey="how-it-works-title" components={{newLine: <br />, innerText: <span />}} /></h2>
                    <p className="text-grey-light-dark text-[18px] flex items-center">{t("how-it-works-des")}</p>
                </div>
                <div className="section-content mt-[60px] relative">
                    <img className="w-full desktop" src={howItWorksImage} alt="how it works" />
                    <img className="w-full mobile" src={howItWorksImageMobile} alt="how it works" />
                    {
                        items.map(item => <div key={item.id} id={item.id} className={`absolute ${activeItem === item.id ? "z-10" : "z-0"}`}>
                            <HowItWorksItem type={item.id} toggleVisible={toggleVisible} title={t(item.title)} description={t(item.description)} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    </section>
}