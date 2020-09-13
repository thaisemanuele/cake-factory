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
                    <SelectButton action={addFlavour} content="layer-pineapple">Pineapple</SelectButton>
                    <SelectButton action={addFlavour} content="layer-grape">Grape</SelectButton>
                </div>
            </CakeControllerPanel>
            <CakeControllerPanel value={value} index={1}>
                <div className="fillings-container">
                    <SelectButton action={addFilling} content="cherry">Cherry</SelectButton>
                    <SelectButton action={addFilling} content="chocolate">Chocolate</SelectButton>
                    <SelectButton action={addFilling} content="grape">Grape</SelectButton>
                    <SelectButton action={addFilling} content="lime">Lime</SelectButton>
                    <SelectButton action={addFilling} content="pineapple">Pineapple</SelectButton>
                    <SelectButton action={addFilling} content="strawberry">Strawberry</SelectButton>
                </div>
            </CakeControllerPanel>
            <CakeControllerPanel value={value} index={2}>
                <div className="toppings-container">
                    <SelectButton action={addTopping} content="cherry">Cherry</SelectButton>
                    <SelectButton action={addTopping} content="chocolate">Chocolate</SelectButton>
                    <SelectButton action={addTopping} content="grape">Grape</SelectButton>
                    <SelectButton action={addTopping} content="lime">Lime</SelectButton>
                    <SelectButton action={addTopping} content="macaroon">Macaroon</SelectButton>
                    <SelectButton action={addTopping} content="pineapple">Pineapple</SelectButton>
                    <SelectButton action={addTopping} content="strawberry">Strawberry</SelectButton>
                </div>
            </CakeControllerPanel>
        </Fragment>
    );
};

export default CakeControllers;