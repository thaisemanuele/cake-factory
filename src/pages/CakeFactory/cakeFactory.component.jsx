import React, { Fragment, useState } from 'react';
import Cake from '../../components/cake/cake.component';
import CakeControllers from '../../components/cakeControllers/cakeController.component';

const CakeFactory = () => {
    
    const [layers, setLayers] = useState(2);
    const [flavour, setFlavour] = useState('basic');
    const [filling, setFilling] = useState('strawberry');
    const [topping, setTopping] = useState('strawberry');

    const addDisabled = layers === 5;
    const removeDisabled = layers === 2;
  
    const addLayer = () => {
        if (!addDisabled) {
            setLayers(layers + 1);
        }
    };
    const removeLayer = () => {
        if (!removeDisabled) {
            setLayers (layers - 1);
        }
    };
        
    const addFlavour = (flav) => {
        setFlavour(flav);  
    }
    const addFilling = (filling) => {
        setFilling(filling);  
    }
    const addTopping = (top) => {
        setTopping(top);  
    }

    return (
        <Fragment>
            <Cake
                layers={layers} 
                flavour={flavour}
                filling={filling}
                topping={topping}
            />
            <CakeControllers
                addAction={() => addLayer()} 
                subtractAction={() => removeLayer()} 
                addFlavour={(flavour)=> addFlavour(flavour)}
                addFilling={(filling)=> addFilling(filling)}
                addTopping={(topping)=> addTopping(topping)}
                addDisabled={addDisabled}
                removeDisabled={removeDisabled}
            />
        </Fragment>
    );
}

export default CakeFactory;