import { Button, Select, Form, Input } from 'antd';
import './contactUs.scss';
import circleArrow from '../../assets/images/arrowcircleright.svg';
import { useContact, useContactUpdate } from '../../contexts/AppContext';
import { useEffect, useCallback, useState } from 'react';
import HomeService from '../../services/homeService';
import { MERCHANT_TYPE } from '../../utils/constants';
import { toast } from 'react-toastify';
import { checkValidPhoneNumber } from '../../utils/utils';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerF } from '@react-google-maps/api';
import { useTranslation } from "react-i18next";


const containerStyle = {
    width: '356px',
    height: '212px',
    borderRadius: "10px"
};
  
const center = {
    lat: 21.026926491790846,
    lng: 105.81679437971194
};

const position = {
    lat: 21.026926491790846,
    lng: 105.81679437971194
}

const { Option } = Select;

export default function ContactUs() {

    const [currencies, setCurrencies] = useState([]);
    const [form] = Form.useForm();
    const [, setMap] = useState(null);
    const { t } = useTranslation();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
      })

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="+84">+84</Option>
            <Option value="+87">+87</Option>
          </Select>
        </Form.Item>
    );

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        map.setZoom(18)
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const getCurrencyList = useCallback(async () => {
        try {
          let response = await HomeService.getCurrencyList();
          setCurrencies(response.data);
        } catch (error) {
          console.log(error);
        } finally {
        }
    }, []);
    
    useEffect(() => {
        getCurrencyList();
    }, [getCurrencyList]);

    const showContact = useContact();
    const toggleContact = useContactUpdate();

    const onFinish = async (values) => {
        try {
            await HomeService.registerContract({...values});
            toast.success("Register successfully! We'll contact you soon!")
            form.resetFields();
            toggleContact(false);
          } catch (error) {
            console.log(error);
          }
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return showContact ? <div className="contact-us-modal">
        <div className="modal-backdrop fixed top-0 left-0 w-full h-full bg-black-50 z-30 cursor-pointer" onClick={() => toggleContact(false)}></div>
        <div className="modal-content fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 rounded-[64px] bg-white w-[1116px] h-[760px] py-[50px] px-[90px] grid grid-cols-2 gap-x-6">
            <div className="contact-info">
                <h3 className="text-blue-dark text-[40px] font-bold">{t("contact-modal.get-in-touch")}</h3>
                <p className="get-in-touch-description text-dark-text mb-[40px]">{t("contact-modal.get-in-touch-des")}</p>
                <p className="phone-contact flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-basic">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[16px] text-blue-dark font-bold ml-[10px]">+84 98 123 4567</span>
                </p>
                <p className="email-contact flex items-center mt-[12px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-cyan-basic">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span className="text-[16px] text-blue-dark font-bold ml-[10px]">contact@taptapos.com</span>
                </p>
                <div className="dividen h-[2px] bg-dividen mt-[40px] mb-[35px]"></div>
                <h4 className="location-title text-[24px] font-bold text-blue-dark">{t("contact-modal.find-us")}</h4>
                <p className="localtion-description text-[16px] text-dark-text mt-[3px] mb-[20px]">{t("contact-modal.our-location")}</p>
                <div className="google-map-code">
                    {
                        isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                 <MarkerF
                                 onClick={() => {
                                    window.open("https://www.google.com/maps/place/3+Ng.+84+P.+Ng%E1%BB%8Dc+Kh%C3%A1nh,+Gi%E1%BA%A3ng+V%C3%B5,+Ba+%C4%90%C3%ACnh,+H%C3%A0+N%E1%BB%99i,+Vietnam/@21.0268109,105.8143004,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab6e18fb08df:0x77b8c89f8205b8a1!8m2!3d21.0268109!4d105.8168753!16s%2Fg%2F11hp_fxfcy?entry=ttu");
                                 }}
                                    position={position}
                                    />
                            </GoogleMap>
                        ) : <></>
                    }
                
                </div>
            </div>
            <div className="contact-form">
                <h3 className="text-blue-dark text-[40px] font-bold">{t("contact-modal.connect-with-us")}</h3>
                <p className="get-in-touch-description text-dark-text mb-[20px]">{t("contact-modal.tell-us")}</p>
                <div className="contact-form bg-grey-30 rounded-[10px] p-[24px]">
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    initialValues={{ prefix: '+84' }}
                    preserve={false}
                >
                    <Form.Item
                    name="register_first_name"
                    rules={[{ required: true, message: t("contact-modal.firstname-empty") }]}
                    >
                        <Input className='text-[16px] text-dark-text' placeholder={t("contact-modal.firstname")} />
                    </Form.Item>

                    <Form.Item
                    name="register_last_name"
                    rules={[{ required: true, message: t("contact-modal.lastname-empty") }]}
                    >
                        <Input className='text-[16px] text-dark-text' placeholder={t("contact-modal.lastname")} />
                    </Form.Item>

                    <Form.Item
                    name="phone"
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (value && checkValidPhoneNumber(getFieldValue('prefix') + value)) {
                                return Promise.resolve();
                              }
                              return Promise.reject(new Error(t("contact-modal.phone-invalid")));
                            },
                        }),
                    ]}
                    >
                        <Input addonBefore={prefixSelector} className='text-[16px] text-dark-text' placeholder={t("contact-modal.phone")}  />
                    </Form.Item>

                    <Form.Item
                    name="address"
                    rules={[{ required: true, message: t("contact-modal.address-invalid") }]}
                    >
                        <Input className='text-[16px] text-dark-text' placeholder={t("contact-modal.address")} />
                    </Form.Item>

                    <Form.Item name="industry_type" rules={[{ required: true, message: t("contact-modal.industry-type-invalid") }]}>
                        <Select className='text-dark-text'
                            placeholder={t("contact-modal.industry-type")}
                            size='medium' allowClear={true}>
                            {Object.keys(MERCHANT_TYPE).map(key => <Select.Option key={key} value={MERCHANT_TYPE[key].value}>{MERCHANT_TYPE[key].label}</Select.Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item
                    name="currency_code"
                    rules={[{ required: true, message: t("contact-modal.currency-invalid") }]}
                    >
                        <Select 
                            placeholder={t("contact-modal.currency")} className='text-dark-text'
                            size='medium' allowClear={true}>
                        {currencies.map(currency => {
                            return <Select.Option key={currency.id} value={currency.short_name}>{currency.name}</Select.Option>
                        })}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="contract_note"
                        rules={[{ required: true, message: t("contact-modal.note-invalid") }]}
                    >
                        <Input.TextArea rows={2} className='h-[120px] text-[16px] text-dark-text' placeholder={t("contact-modal.note")} />
                    </Form.Item>

                    <Form.Item>
                        <Button className='gradient flex items-center justify-center text-[16px] font-bold' type="primary" htmlType="submit">
                            {t("contact-modal.send")}
                            <img className='ml-[10px] sale-icon' src={circleArrow} alt="sale-icon" />
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </div>
        </div>
    </div> : null
}