import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/modal.css"
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import {connect} from 'react-redux'
import {createPost} from '../utils/actions/PostActions'
import axios from 'axios'


const currencies = [

    {
      value: 'EUR',
      label: 'Select a User Group',
    },
    {
      value: 'maters, edge usera',
      label: 'masters, edge users',
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
  

function FormPropsTextFields(props) {
  const classes = useStyles();

  const [userType, setUserType] = React.useState("")
  const [fullName, setFullName] = React.useState("")
  const [userName, setUserName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [useSystem, setUseSystem] = React.useState("")
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [userGroup, setUserGroup] = React.useState('masters, edge users')
  const [inviteUser, setInviteUser] = React.useState(false)


  // const [formData, setFormData] = React.useState(filledFormData)



  const [currency, setCurrency] = React.useState('EUR');
  const [dense, setDense] = React.useState(false);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const fullNameChange = (event) => {
    setFullName(event.target.value)
  }

  const handleUserType = (event) => {
    setUserType(event.target.value)
  }

  const userNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleUserGroup = (event) => {
    setUserGroup(event.target.value)
  }


  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleInviteUser = (event) =>{
    setInviteUser(event.target.checked);
  }

  function onSubmit(e) {
    e.preventDefault();

    let filledFormData = {
      id: Math.floor(Math.random() * Math.floor(10000)),
      userType: userType,
      fullName: fullName,
      userName: userName,
      email:email,
      useSystem: useSystem,
      password: password,
      confirmPassword: confirmPassword,
      userGroup: userGroup,
      inviteUser: inviteUser,
    }

    props.createPost(filledFormData)

    axios.post('http://localhost:8888/postData', filledFormData)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

    window.location.reload(false);
  }

  function refreshPage(){
    window.location.reload(false);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
            <div className="field">
                <label className="heading">User Type</label>
                <FormControl className={classes.form_control} component="fieldset" className="radio">
                    <RadioGroup onChange={handleUserType} row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel value="local user" control={<Radio color="primary" />} label="Local User" />
                        <FormControlLabel value="external user" control={<Radio color="primary" />} label="External User" />
                    </RadioGroup>
                </FormControl>

            </div>
            <div className="field">
                <div className="optional"> 
                <label  className="heading">Full Name</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
                <TextField onChange={fullNameChange} className="input" id="outlined-search" label="Full Name" type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <div className="optional"> 
                <label  className="heading">User Name</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
            <TextField onChange={userNameChange} className="input" id="outlined-search" label="User Name" type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <label  className="heading">Email</label>
                <TextField  className="input" id="outlined-search" label="Email" type="search" variant="outlined" />
            </div>
            <div className="field-1"> 
                <label className="heading">Use System <br/> Generated Password</label>
                <FormControlLabel className="switch"
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label=""
                />
            </div>
            <div className="field"> 
                <label  className="heading">Password</label>
                <TextField className="input" id="outlined-search" label="Password" type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <label  className="heading">Confirm Password</label>
                <TextField className="input" id="outlined-search" label="Confirm Password" type="search" variant="outlined" />
            </div>
            <div className="field"> 
                <div className="optional"> 
                <label className="heading">User Group</label> <br/> <label className="altheading"> (Optional) </label>
                </div>
                <TextField
                id="outlined-select-currency-native"
                select
                label="User Group"
                value={userGroup}
                onChange={handleUserGroup}
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
            <div className="field-1">
                <label className="heading-1">Invite User</label>
                <FormControlLabel className="switch"
                    control={<Switch checked={inviteUser} onChange={handleInviteUser} />}
                    label=""
                />
            </div>
            <div className="anchor">
                    <a href="www.google.com">Equivalent API</a>
            </div>
            <div className="center">
            <div className="buttons">
                <button type="button" onClick={onSubmit} className="add_alt">Add User</button>
                <button type="button" onClick={refreshPage} className="cancel">Cancel</button>
            </div>
            </div>
      </div>
    </form>
  );
}

export default connect(null, {createPost})(FormPropsTextFields);
