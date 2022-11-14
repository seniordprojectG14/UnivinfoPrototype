import React,{useEffect, useState} from 'react';
import Card from '../ui/Card';
import { CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classes from './PostItem.module.css';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import useStyles from './styles.js';
import Geocode from "react-geocode";



const PostItem = ({ post, setCurrentId, user, setUser,proplist }) => {
  const classstyles = useStyles();
  const [lat, setLat] = React.useState('');
  const [lng, setLng] = React.useState('');
  useEffect(() => {

    Geocode.setLanguage("en");
  Geocode.setApiKey("AIzaSyBBoDTa2K0ql0d3ssnlMEYXdBvQLI6_LqA");
  Geocode.fromAddress(post.address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLat(lat);
      setLng(lng);
    },
    (error) => {
      console.error(error);
    }
  );
  }, []);


  Geocode.fromLatLng("48.8583701", "2.2922926").then(
    (response) => {
      const address = response.results[0].formatted_address;
      console.log(address);
    },
    (error) => {
      console.error(error);
    }
  );


  
    return(
      <li className={classes.item}>
      <Card>
      
        <div className={classes.content}>


          
        <h3>address:{post.address}</h3>
          <div className={classstyles.details}>
        {/* <div style={{textalign: 'center',
            paddingLeft: '480px'}}>
        <img src={post.photos[0]}  height={'200px'} width={'300px'} alt="BigCo Inc. logo"/>
        </div> */}
    
    
        <Typography variant="body2" color="textSecondary" component="h2">username:{post.username}</Typography>
            </div>
          <p>description: {post.description}</p>
        </div>
        <div className={classes.actions}>
        
        <p variant="body2">{moment(post.createdAt).fromNow()}</p>
       
        </div>
      </Card>
    </li>

    );
    }
    

export default PostItem;