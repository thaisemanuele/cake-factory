import React from 'react';

import { ReactComponent as Chocolate } from "../../assets/candy.svg";
import { ReactComponent as Cherries } from "../../assets/cherry.svg";
import { ReactComponent as Grape } from "../../assets/grape.svg";
import { ReactComponent as Lemon } from "../../assets/lemon.svg";
import { ReactComponent as Macaroon } from "../../assets/macaroon.svg";
import { ReactComponent as Pineapple } from "../../assets/pineapple.svg";
import { ReactComponent as Strawberry } from "../../assets/strawberry.svg";

import './cake-top.styles.scss';


const CakeTop = ({topping}) => {
    const isChocolate = topping === 'chocolate' ? <Chocolate /> : null;
    const isCherries = topping === 'cherries' ? <Cherries /> : null;
    const isGrape = topping === 'grape' ? <Grape /> : null;
    const isLemon = topping === 'lemon' ? <Lemon /> : null;
    const isMacaroon = topping === 'macaroon' ? <Macaroon /> : null;
    const isPineapple = topping === 'pineapple' ? <Pineapple /> : null;
    const isStrawberry = topping === 'strawberry' ? <Strawberry /> : null;
    return (
        <div className="cake-top">
            {isChocolate}
            {isCherries}
            {isGrape}
            {isLemon}
            {isMacaroon}
            {isPineapple}
            {isStrawberry}
        </div>
    );

};

export default CakeTop;