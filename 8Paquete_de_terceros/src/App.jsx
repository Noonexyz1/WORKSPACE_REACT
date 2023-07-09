//React-icons
import { FaWhatsapp, FaFacebookMessenger, FaGithub } from "react-icons/fa";

//Material-UI
import Button from '@mui/material/Button';


import Avatar from '@mui/material/Avatar';

import FolderCopy from '@mui/icons-material/FolderCopy';

import PagesOutlined from '@mui/icons-material/PagesOutlined';
import AssignmentLateRounded from '@mui/icons-material/AssignmentLateRounded';

export function UsandoReactIcons() {

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <h1> <FaWhatsapp color="red" /> WhatsApp</h1>
      <h1> <FaFacebookMessenger /> Messenger</h1>
      <h1> <FaGithub /> Github</h1>

      <br/>

      <div>
        <Button variant="contained" onClick={() =>{alert('Boton Clickeado')}}>Botton de Material UI</Button>
      </div>

      <div>
        <Avatar>
          <FolderCopy />
        </Avatar>
        <Avatar>
          <PagesOutlined />
        </Avatar>
        <Avatar sx={{ height: '70px', width: '70px', bgcolor: "green"}}>
          <AssignmentLateRounded />
        </Avatar>
       
        
       
      </div>

    </div>
  );
}



export function App() {
  return (
    <div>
      asdf
    </div>
  )
}
