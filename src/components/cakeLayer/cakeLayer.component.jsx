import React from 'react';

import './cake-layer.styles.scss';

const CakeLayer = ({type, flavour}) => {

    let classes = `base-layer ${type}-layer ${flavour}`;
    return(
        <div className={classes}>
        </div>
    );
}

export default CakeLayer;