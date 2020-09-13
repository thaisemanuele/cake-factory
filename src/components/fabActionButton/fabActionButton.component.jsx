import React from 'react';

import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  
  const FabActionButton = ({children, color, label, action, ...other}) => {
      
    const classes = useStyles();
    
    return (
        <Fab 
            size="small" 
            color={color} 
            aria-label={label} 
            className={classes.margin}
            onClick={()=> action()}
            {...other}
        >
            {children}
        </Fab>
    )

};

export default FabActionButton;