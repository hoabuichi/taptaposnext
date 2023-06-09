import styles from "./footer.module.scss";
import { useTranslation, Trans } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {

    const { t } = useTranslation('common');

    return <div className={`${styles['footer-container']} bg-blue-dark pb-[20px] mt-[150px]`}>
        <div className="container mx-auto">
            <div className={`${styles['top-box']} rounded-lg bg-blue-ocean w-[930px] mx-auto p-[60px] relative top-[-50px] flex flex-col items-center`}>
                <p className={`${styles['description-item']} ${styles['first-item']} text-center text-white text-[48px] font-bold flex items-center justify-center`}><Trans i18nKey="footer-title-1" components={{innerText: <span />}} /></p>
                <p className={`${styles['description-item']} text-center text-white text-[48px] font-bold`}>{t("footer-title-2")}</p>
                <p className={`${styles['description-item']} text-center text-white text-[48px] font-bold`}>{t("footer-title-3")}</p>
                <Link href='/contact-us'>
                    <button className="contact-us-btn bg-blue-primary py-[14px] px-[28px] mt-[30px] rounded-large text-white text-[18px] font-semibold">{t("contact-us")}</button>
                </Link>
            </div>
            <div className={`${styles['links-container']} grid gap-4 grid-cols-5 mt-[50px]`}>
                <div className={`${styles['logo-grid']} grid-item`}>
                    <Image src="/images/logo.svg" alt="logo" width="70" height="43" />
                </div>
                <div className="grid-item">
                    <h5 className="item-title mb-[11px] text-blue-medium text-[16px] font-bold">{t("features")}</h5>
                    <ul>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link1")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link2")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link3")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link4")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link5")}</li>
                    </ul>
                </div>
                <div className="grid-item">
                    <h5 className="item-title mb-[11px] text-blue-medium text-[16px] font-bold">{t("business-type")}</h5>
                    <ul>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link6")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link7")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link8")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link9")}</li>
                    </ul>
                </div>
                <div className="grid-item">
                    <h5 className="item-title mb-[11px] text-blue-medium text-[16px] font-bold">{t("resource")}</h5>
                    <ul>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link10")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link11")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link12")}</li>
                    </ul>
                </div>
                <div className="grid-item">
                    <h5 className="item-title mb-[11px] text-blue-medium text-[16px] font-bold">{t("contact")}</h5>
                    <ul>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link13")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link14")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link15")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link16")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link17")}</li>
                        <li className="item-link mb-[9px] text-[14px] text-grey-light">{t("footer-links.link18")}</li>
                    </ul>
                </div>
            </div>
            <div className={`${styles['copyright']} flex justify-between py-[15px] border-t border-grey-light mt-[50px]`}>
                <p className="company-name text-[14px] text-grey-light">{t("company-name")}</p>
                <p className="text-[14px] text-grey-light">{t("copyright")}</p>
            </div>
        </div>
    </div>
}