import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setcompanyInFocus, bringSelectCompany } from "../../slice";
import './style.css';

function CompanyBtn({icon, companyProp, idx}) {
    const [company, setCompany] = useState({});
    const storeCompany = useSelector((state) => bringSelectCompany(state))
    const dispatchSetCompany = useDispatch();
    const isActive = company.id ===  storeCompany.id;

    useEffect(() => {
        setCompany(companyProp);
    }, [companyProp])

    const clickEvent = () => {
        dispatchSetCompany(setcompanyInFocus(idx));
    }

    return (
        <div 
        id={`indicator-${idx}`} 
        className={ isActive ? "IndicatorBtn" : "IndicatorBtn inactive"} 
        onClick={() => {
            !isActive && clickEvent();
        }}>
            <img src={icon} alt="icon"/>
            <div>{company.name}</div>
        </div>
    );
}

export default CompanyBtn;