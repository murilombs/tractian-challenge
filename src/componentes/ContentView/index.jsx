import React, { useEffect, useState } from "react";
import './style.css';
import { useSelector } from "react-redux";
// import FilterBtn from "../FilterBtn";
// import criticoIcon from '../../icons/critico_icon.svg'
// import energyIcon from '../../icons/energy_icon.svg'
import { bringSelectCompany } from "../../slice";

function ContentView() {
    const company = useSelector((state) => bringSelectCompany(state))
    const [companyName, setCompanyName] = useState('')

    useEffect(() => {
        setCompanyName(company.name);
    }, [company])

    return (
        <div className="contentContainer">
            <div className="contentHeader">
                <div className="ativosCompany">
                    <div className="indicador">ATIVOS</div>
                    <div className="companyName"> / {companyName}</div>
                </div>

                <div className="filterContainer">
                    {/* <FilterBtn icon={energyIcon} propText={"Sensor de Energia"}/>
                    <FilterBtn icon={criticoIcon} propText={"Crítico"}/> */}
                </div>
            </div>
        </div>
    );
}

export default ContentView;
