import React from 'react';

import './select-button.styles.scss';

const SelectButton = ({children, action, content}) => {
    return (
        <div 
            className="select-button" 
            onClick={()=> action(content)}>
            <div className={`select-box ${content} linear`}/>
            <p className="contentName">{children}</p>
        </div>
    );
};

export default SelectButton;