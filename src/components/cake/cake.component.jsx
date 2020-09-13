import React, { Fragment } from 'react';

import './cake.styles.scss';
import CakeLayer from '../cakeLayer/cakeLayer.component';
import CakeFilling from '../cakeFilling/cakeFilling.component';
import CakeTop from '../cakeTop/cakeTop.components';


const Cake = ({layers, flavour, filling, topping}) => {
    let cakeLayers = [];
    for(let index=0; index < layers; index++) {
        const isTop = index === 0; 
        const isBottom = index === layers -1;
        const addFilling = !isBottom;
        const cakeFilling = addFilling ? <CakeFilling filling={filling} /> : null;
        const cakeTop = isTop ? <CakeTop topping={topping}/> : null;

        cakeLayers.push(
            <Fragment>
                {cakeTop}
                <CakeLayer 
                    type={isTop ? 'top'
                    : isBottom ? 'bottom' : 'middle'
                }
                key={index}
                flavour = {flavour}
                />
                {cakeFilling}
            </Fragment>
        )
    }
    return (
        <div className="cake">
            {cakeLayers}
        </div>
    );
};

export default Cake;
