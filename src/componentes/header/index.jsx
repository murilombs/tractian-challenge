import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import logo from '../../icons/LOGO TRACTIAN.svg';
import company_icon from '../../icons/companies_icon.svg';
import CompanyBtn from "../CompanyBtn";
import { bringAllCompanies } from "../../slice";
import './style.css';

function Header() {
    const companiesStore = useSelector((state) => bringAllCompanies(state));
    const [companiesList, setCompanies] = useState([]);
    
    useEffect(()=> {
        setCompanies(companiesStore)
    }, [companiesStore]);

    return (
        <div className="header">
            <div className="logoContainer">
                <img src={logo} alt="logo" />
            </div>
            <div className="btnContainer">
                {
                companiesList.length > 0 
                ? companiesList.map((company, idx) => 
                    <CompanyBtn key={idx} icon={company_icon} companyProp={company} idx={idx}/>)
                : <div>loading</div>
                }
            </div>
        </div>
    );
}

export default Header;