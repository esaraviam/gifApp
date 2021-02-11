import React from 'react'
import PropTypes from 'prop-types'

import {Card , CardContent , CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      maxWidth: 300,
      margin: 10,
    },
    animate__animated:{},
    animate__fadeInLeft:{}
  });

const GifGridItem = ({title , url}) => {
    const classes = useStyles();

    return (
        <Card className={ classes.root} >
            <CardMedia 
            component="img"
            image={url}
            title={title}
            height="140"
            /> 
            <CardContent>
                <p>{title}</p>
            </CardContent>
        </Card>
        // <div className="card animate__animated animate__fadeInLeft ">
        //     <img src={url} alt={title} />  
        //     <p>{title}</p>
        // </div>
    )
}

GifGridItem.propTypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}

export default GifGridItem
