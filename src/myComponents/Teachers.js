import React, { useState } from 'react'
import { Grid, Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Button } from '@mui/material';
import DC from './Teachers components/DC';
import MainUddin from './Teachers components/MainUddin'
import "./styles/Teachers.css"
function Teachers() {


  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  return (
<div className='TeachersList'>
    <Grid container spacing={2} >  
      <Grid item={5}>
        <div className='Teachers-list '>
          
           <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper',}}>
               <ListItem className='group block  mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg  hover:bg-sky-500 hover:ring-sky-500z' >
                   <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                   </ListItemAvatar>
                    <ListItemText className='group-hover:text-white ' primary="কামরুল হাসান" secondary="প্রতিষ্ঠাতা" />
                    <Button className='group-hover:text-white'  onClick={()=>setShow(!show)} >View profile</Button>       
               </ListItem>
           </List>
  

           <List sx={{width: '100%',maxWidth: 360,bgcolor: 'background.paper',}}>
                 <ListItem className='group block  mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5  shadow-lg         hover:bg-sky-500 hover:ring-sky-500z' >
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                     <ListItemText className='group-hover:text-white ' primary="Main Uddin Khan" secondary="Designer" />
                     <Button className='group-hover:text-white'  onClick={()=>setShow1(!show1)} >View profile</Button>
                </ListItem>
           </List>
        </div>
      </Grid>

       <Grid item={4}>
            <Container>
              {
                show && <DC/>
              }
              {
                show1 && <MainUddin/>
              }
            </Container>
       </Grid>

    </Grid>
</div>
  )
}

export default Teachers