import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormComponent from './FormComponent'
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import "../styles/edit_user.css"
import {connect} from 'react-redux'
import {fetchPosts,createPost} from '../utils/actions/PostActions'
import { initialState } from '../utils/reducers/PostReducer';
import { Link } from 'react-router-dom';
import axios from 'axios'

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: 'Select a User Group',
    },
    {
        value: 'EUR2',
        label: 'Select Plan (Optional)',
      },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      width: '30ch',
    },
    form_control:{
      // marginLeft: "0px",
    },
    radio_root:{
        "&:hover": {
            backgroundColor: "transparent"
          }
    },
    icon: {
        borderRadius: "50%",
        width: 16,
        height: 16,
        boxShadow:
          "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
        backgroundColor: "#f5f8fa",
        backgroundImage:
          "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
        "$root.Mui-focusVisible &": {
          outline: "2px auto rgba(19,124,189,.6)",
          outlineOffset: 2
        },
        "input:hover ~ &": {
          backgroundColor: "#ebf1f5"
        },
        "input:disabled ~ &": {
          boxShadow: "none",
          background: "rgba(206,217,224,.5)"
        }
      },
      checkedIcon: {
        backgroundColor: "#137cbd",
        backgroundImage:
          "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
        "&:before": {
          display: "block",
          width: 16,
          height: 16,
          backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
          content: '""'
        },
        "input:hover ~ &": {
          backgroundColor: "#106ba3"
        }
      }
  },
}));

// Inspired by blueprintjs
function StyledRadio(props) {
    const classes = useStyles();
  
    return (
      <Radio
        className={classes.radio_root}
        disableRipple
        color="default"
        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
  

function EditUser(props) {
    const classes = useStyles();

    console.log(props)
  
    const [currency, setCurrency] = React.useState('EUR');
    const [plan, setPlan] = React.useState('EUR2');
    const [dense, setDense] = React.useState(false);
    const [user, setUser] = React.useState({})
    const [fullName, setFullName] = React.useState(initialState.items.fullName)
    const [userName, setUserName] = React.useState(initialState.items.userName)
    const [email, setEmail] = React.useState(initialState.items.email)
    const [userGroup, setUserGroup] = React.useState(initialState.items.userGroup)
    const [id, setId] = React.useState(props.id)

    React.useEffect(()=>{
      props.fetchPosts();
      
      if(initialState.items){
        for(let i = 0; i<initialState.items;i++){
          if (props.id === initialState.items.id){
            setUser(initialState.items[i])
          }
        }
        setFullName(user.fullName)
        setEmail(user.email)
        setId(user.id)
        setUserName(user.userName)
        setUserGroup(initialState.userGroup)
      }
    },[initialState, props])
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    function arrayRemove(arr, value) { 
      return arr.filter(function(geeks){ 
          return geeks != value; 
      }); 
     } 

    const deleteItem = () =>{
      // console.log("deleting item")
      // console.log(initialState.items)
      // for(let i = 0; i<initialState.items.length;i++){
      //   console.log(props.id)
      //   console.log(initialState.items[i].id)
      //   if (props.id == initialState.items[i].id){
      //     // initialState.items.splice(i, 1)
      //     // console.log(initialState.items)
      //     arrayRemove(initialState.items, initialState.items[i])
      //     break;
      //     // console.log(initialState.items)
      //   }
      // }
      // initialState.items.splice(id,1)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({"id":props.id});

      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:8888/deleteData", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      // arrayRemove(props.initialState.items, user)

    }

    function refreshPage(){
      window.location.reload(false);
    }

    const confirmEdit = () =>{
      console.log(props.id);
      refreshPage()
    }


    return (
        <div className="edit_user">
            <form className={classes.root} noValidate autoComplete="off">
      <div>
            <div className="field">
                <div className="optional"> 
                <label  className="heading">Full Name</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
                <TextField className="input" id="outlined-search" label="Full Name" value={fullName} type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <div className="optional"> 
                <label  className="heading">User Name</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
            <TextField className="input" id="outlined-search" label="User Name" value={userName} type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <label  className="heading">Email</label>
                <TextField  className="input" id="outlined-search" label="Email" type="search" value={email} variant="outlined" />
            </div>
            <div className="field"> 
                <label  className="heading">Password</label>
                <TextField className="input" id="outlined-search" label="Leave blank to keep the same password" type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <div className="optional"> 
                <label className="heading">User Group</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
                <TextField
                id="outlined-select-currency-native"
                select
                value={userGroup}
                label="User Group"
                value={currency}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
            </div>
            <div className="field"> 
                <div className="optional"> 
                <label className="heading">Plan</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
                <TextField
                id="outlined-select-currency-native"
                select
                label="Select Plan"
                value={plan}
                onChange={handleChange}
                SelectProps={{
                    native: true,
                }}
                variant="outlined"
                >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                    {option.label}
                    </option>
                ))}
                </TextField>
            </div>
            <div className="anchor">
                    <a href="www.google.com">Equivalent API</a>
            </div>
            <div className="buttons">
                <button type="button" className="add" onClick={confirmEdit}>Confirm</button>
                <button type="button" onClick={refreshPage} className="cancel" >Cancel</button>
                {/* <button type="button" className="cancel" onClick={deleteItem}>Delete</button> */}

                <Link to="/">
                  <button type="button" className="delete" onClick={deleteItem}>Delete</button>
                </Link>
            </div>
      </div>
    </form>
        </div>
    )
}

export default connect(null, {fetchPosts, createPost})(EditUser)
