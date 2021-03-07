import React from 'react'
import "../styles/userList.css"
// import "../../public/assests/search.png"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormComponent from './FormComponent'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0, 14, 3),
      width: "760px",
      margin: "0 auto"
    },
  }));

function UserList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="user_list">
        
            <div className="list_heading">
                <div className="left">    
                <h5 className="user_span">
                    User
                </h5>
                <span><button className="view_button"><div className="view_text">View</div> All Users </button></span>
                <span><button className="view_button"><div className="view_text">Company</div> All </button></span>
                </div>
                <div className="right">
                <span><button type="button" className="add_button" onClick={handleOpen}>Add User</button></span>
                <span className="button">
                    <img  className="icon" src={process.env.PUBLIC_URL + '/assests/search.png'} />
                </span>
                <span className="button">
                    <img  className="filter_icon" src={process.env.PUBLIC_URL + '/assests/filter.png'} />
                </span>
                <span className="button" >
                    <img className="refresh_icon" src={process.env.PUBLIC_URL + '/assests/refresh.png'} />
                </span>
                <span className="button" >
                    <img className="settings_icon" src={process.env.PUBLIC_URL + '/assests/settings.png'} />
                </span>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div>
                        <div className="center">
                        <div className="title"> 
                                <h5 className="modal_heading">Add Single User</h5>
                                <img  className="close_icon" onClick={handleClose} src={process.env.PUBLIC_URL + '/assests/close.png'} />
                        </div>
                        </div>
                        <div className={classes.paper}>
                            <FormComponent />
                        </div>
                    </div>
                
                </Fade>
            </Modal>
        </div>
    )
}

export default UserList
