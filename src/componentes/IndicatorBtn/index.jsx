import React, {useState, useEffect} from "react";
import './style.css';

function IndicatorBtn({key, icon, propText}) {
    const [text, setText] = useState('');

    useEffect(() => {
        setText(propText);
    }, [propText])

    return (
        <div id={`indicator-${key}`} className="IndicatorBtn">
            <img src={icon} alt="icon"/>
            <div>{text}</div>
        </div>
    );
}

export default IndicatorBtn;