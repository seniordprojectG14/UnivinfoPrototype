import React, { useState, useEffect } from 'react';
import classes from './NewPost.module.css';



import{ useSelector } from 'react-redux';

import axios from 'axios';




    



const PostForm = ({ currentId, setCurrentId, user, setUser}) => {
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));
    const [postData, setPostData] = useState({address: '', photos: '', description: '', username: ''});
    const [image, setImage] = React.useState(null);

    
      useEffect(() => {
        if (post) setPostData(post);
      }, [post]);

   
    const clear = () => {
      setCurrentId(0);
      setPostData({address: '', photos: '', description: '', username: ''});
    };
  
 
    const fileSelected = event => {
      const file = event.target.files
      setImage(file)
    }

      
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
      };
      console.log("submitting");

      
         const formdata = new FormData();
        console.log(JSON.stringify(postData.address) + "postData.address");
        console.log(JSON.stringify(postData.description) + "postData.description");
        console.log(JSON.stringify(user?.username) + "user?.username");
        formdata.append("address", postData?.address)
        formdata.append("description", postData?.description)
        formdata.append("username", user?.username)
         const {data} = await axios.post("/posts", formdata, { headers: {
					'accept': 'application/json',
					'Content-Type': 'multipart/form-data'
				}})
        console.log(JSON.stringify(data) + "data")
        
      if (currentId === 0) {
        
        clear();
      } else {
        
        clear();
      }
    };
    

    
      
     
  

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
  <div className={classes.control}>
    <label htmlFor='title'>address</label>
    <input type='text' id='address' value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value})}/>
  </div>
  
 
  
  <div className={classes.control}>
    <label htmlFor='description'>any other things to add</label>
    <textarea id='description'  rows='5' value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}></textarea>
  </div>
  <div >
    <button>Add post</button>
  </div>
</form>
    );
}
export default PostForm;