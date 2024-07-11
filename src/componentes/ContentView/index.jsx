import React from "react";
import './style.css';
import IndicatorBtn from "../IndicatorBtn";

import criticoIcon from '../../icons/critico_icon.svg'
import energyIcon from '../../icons/energy_icon.svg'

function ContentView() {
    const companyName = "TESTE";

    return (
        <div className="contentContainer">
            <div className="contentHeader">
                <div className="ativosCompany">
                    <div className="indicador">ATIVOS</div>
                    <div className="companyName"> / {companyName}</div>
                </div>

                <div className="filterContainer">
                    <IndicatorBtn icon={energyIcon} propText={"Sensor de Energia"}/>
                    <IndicatorBtn icon={criticoIcon} propText={"Crítico"}/>
                </div>
            </div>
        </div>
    );
}

export default ContentView;
