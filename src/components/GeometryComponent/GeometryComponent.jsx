import React, { useState } from 'react';
import './styles/GeometryStyles.css';

const GeometryComponent = () => {

    const [colorR1, setColorR1] = useState(0)
    const [colorR2, setColorR2] = useState(0)
    const [colorR3, setColorR3] = useState(0)
    const [colorTime, setColorTime] = useState(0)

    const handleChangeColor = () => {
        setColorTime(setInterval(() => {
            setColorR1(Math.random(255) * 256)
            setColorR2(Math.random(255) * 256)
            setColorR3(Math.random(255) * 256)
            console.log(colorR1)
            console.log(colorR2)
            console.log(colorR3)
        }, 1200))
        return colorTime
    }

    const handlePauseColor = () => {
        clearInterval(colorTime)
    }

    const handleClickColor = () => {
        clearInterval(colorTime)
    }
    return (
        <div className={'square'} onDoubleClick={handleClickColor} onMouseOver={handleChangeColor} onMouseOut={handlePauseColor} style={{ backgroundColor: `rgb(${colorR1}, ${colorR2}, ${colorR3})` }}>
        </div>
    );
}

export default GeometryComponent;
