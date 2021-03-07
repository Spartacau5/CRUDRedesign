let axios = require("axios");
let express = require("express");
let cors = require("cors")
// let env = require("../env.json"); // don't change this
const { response } = require("express");

let app = express();
let port = 8888;
let hostname = "localhost";

app.use(express.static("public_html"));
app.use(express.json());
app.use(cors())




let items= [
    {
        id: 123,
        userType: "userType",
        fullName: "",
        userName: "differentsyntax",
        email:"email@email.com",
        useSystem: "useSystem",
        password: "password$$",
        confirmPassword: "password$$",
        userGroup: "userGroup1",
        inviteUser: "inviteUser2",
    },
]

function arrayRemove(arr, value) { 
    return arr.filter(function(geeks){ 
        return geeks != value; 
    }); 
   } 

app.get("/getData", (req,res)=>{
    // console.log(items)
    res.send(items)
})

app.post("/postData", (req,res)=>{
    items.push(req.body)
    console.log(items)
    res.json('Done')
})

app.get("/singleUser/:id", (req,res)=>{
    for(let i = 0; i<items.length;i++){
        if (req.body.id == items[i].id){
            console.log(items[i])
            res.json(items[i])
        //   break;
        }
      }
})


app.delete("/deleteData", (req,res)=>{
    console.log(req.body)
    for(let i = 0; i<items.length;i++){
        if (req.body.id == items[i].id){
            console.log(items)
          items.splice(i, 1)
          console.log("deleted")

          // console.log(initialState.items)
        //   arrayRemove(initialState.items, items[i])
          console.log(items)
          break;
        }
      }
    res.json("deleted")
})

/* END SOLUTION */

app.listen(port, hostname, () => {
  console.log(`Listening at: http://${hostname}:${port}`);
});