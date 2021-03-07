import React from 'react'
import "../styles/summaryHead.css"
// import "../../public/assests/search.png"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormComponent from './FormComponent'
import EditUser from './EditUser';
import {connect} from 'react-redux'
import {fetchPosts} from '../utils/actions/PostActions'
import { initialState } from '../utils/reducers/PostReducer';

const useStyles = makeStyles((theme) => ({
    edit_modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    edit_paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3, 14, 5),
      width: "760px",
      margin: "0 auto",
    },
  }));

function SummaryHead(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    React.useEffect(()=>{
        props.fetchPosts();
      },[initialState])
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="user_list">
        
            <div className="summary_heading">
                <h5 className="user head">
                    User Summary
                </h5>
                <span className="edit">
                    <img  className="icon" onClick={handleOpen} src={process.env.PUBLIC_URL + '/assests/edit.png'} />
                    
                </span>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.edit_modal}
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
                                <h5 className="modal_heading">Edit User</h5>
                                <img  className="close" onClick={handleClose} src={process.env.PUBLIC_URL + '/assests/close.png'} />
                        </div>
                        </div>
                        <div className={classes.edit_paper}>
                            <EditUser item={initialState.items} id={props.id}/>
                        </div>
                    </div>
                
                </Fade>
            </Modal>
        </div>
    )
}


export default connect(null, {fetchPosts})(SummaryHead)

