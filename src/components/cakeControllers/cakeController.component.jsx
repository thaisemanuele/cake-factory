import React, { Fragment, useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import CakeControllerPanel from '../cakeControlerPanel/cakeControllerPanel.component';
import FabActionButton from '../fabActionButton/fabActionButton.component';
import SelectButton from '../select-button/selectButton.component';

import './cake-controller.styles.scss';

const CakeControllers = ({addAction, subtractAction, addFlavour, addFilling, addTopping, addDisabled, removeDisabled}) => {
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Basic" />
                <Tab label="Filling" />
                <Tab label="Top" />
            </Tabs>
            <CakeControllerPanel value={value} index={0}>
                <FabActionButton color="" label="remove-layer"
                    action={subtractAction}
                    disabled={removeDisabled}
                >
                    <RemoveIcon />
                </FabActionButton>
                <FabActionButton color="secondary" label="add-layer"
                    action={addAction}
                    disabled={addDisabled}
                >
                    <AddIcon />
                </FabActionButton>
            
                <div className="flavours-container">
                    <SelectButton action={addFlavour} content="basic">Basic</SelectButton>
                    <SelectButton action={addFlavour} content="chocolate-dark">Dark Chocolate</SelectButton>
                    <SelectButton action={addFlavour} content="chocolate-brown">Brown Chocolate</SelectButton>
                    <SelectButton action={addFlavour} content="chocolate-white">White Chocolate</SelectButton>
                    <SelectButton action={addFlavour} content="pineapple">Pineapple</SelectButton>
                    <SelectButton action={addFlavour} content="grape">Grape</SelectButton>
                </div>
            </CakeControllerPanel>
            <CakeControllerPanel value={value} index={1}>
                <div className="fillings-container">
                    <button className="filling-button" onClick={()=> addFilling('cherry')}>Cherry</button>
                    <button className="filling-button" onClick={()=> addFilling('chocolate')}>Chocolate</button>
                    <button className="filling-button" onClick={()=> addFilling('grape')}>Grape</button>
                    <button className="filling-button" onClick={()=> addFilling('lime')}>Lime</button>
                    <button className="filling-button" onClick={()=> addFilling('pineapple')}>Pineapple</button>
                    <button className="filling-button" onClick={()=> addFilling('strawberry')}>Strawberry</button>
                    <hr/>
                </div>
            </CakeControllerPanel>
            <CakeControllerPanel value={value} index={2}>
                <div className="toppings-container">
                    <button className="topping-button" onClick={()=> addTopping('cherries')}>Cherry</button>
                    <button className="topping-button" onClick={()=> addTopping('chocolate')}>Chocolate</button>
                    <button className="topping-button" onClick={()=> addTopping('grape')}>Grape</button>
                    <button className="topping-button" onClick={()=> addTopping('lemon')}>Lime</button>
                    <button className="topping-button" onClick={()=> addTopping('macaroon')}>Macaroon</button>
                    <button className="topping-button" onClick={()=> addTopping('pineapple')}>Pineapple</button>
                    <button className="topping-button" onClick={()=> addTopping('strawberry')}>Strawberry</button>
                    <hr/>
                </div>
            </CakeControllerPanel>
        </Fragment>
    );
};

export default CakeControllers;