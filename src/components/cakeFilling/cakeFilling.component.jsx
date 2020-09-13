import React from 'react';

import './cake-filling.styles.scss';

const CakeFilling = ({filling}) => (
    <div className={`filling ${filling}`} />
);

export default CakeFilling;