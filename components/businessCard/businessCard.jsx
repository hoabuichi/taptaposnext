import arrowCircle from "../../assets/images/arrowcircleright.svg";
import './businessCard.scss';

export default function BusinessCard(props) {

    return <div id={`card-${props.id}`} onClick={props.onClickItem} className={`card-container cursor-pointer p-[17px] bg-grey-light-40 rounded-[8px] border border-black-light-dark mb-[8px] transition-all ${props.isActive ? "bg-grey-light-80" : ''}`}>
        <div className="card-header flex items-center justify-between">
            <div className="flex items-center">
                <div className="card-icon px-[5px] py-[5px] bg-black-light-dark rounded-[4px]">
                    <img alt="arrow circle icon" src={props.icon} />
                </div>
                <h5 className="text-[16px] font-bold ml-[8px] text-white">{props.name}</h5>
            </div>
            <button>
                <img className={`transition-all duration-300 ${props.isActive ? "rotate-90-reverse" : ""}`} alt="arrow circle icon" src={arrowCircle} />
            </button>
        </div>
        <div className="card-details">
            <p className={`text-[16px] text-grey-text pl-[38px] card-description ${props.isActive ? "mt-[8px] max-h-48 opacity-1" : "mt-0 max-h-0 opacity-0"}`}>{props.description}</p>
        </div>
    </div>
}