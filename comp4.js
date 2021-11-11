import React from 'react';


import {
   Redirect,
    Link,

} from "react-router-dom";

import {
    TextField,
    Card,
    CardContent,
    Button,
}from "@material-ui/core"




export default class Comp4 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            loggedin: false
        }
        
    }

    handleEmail=(e)=>{
          this.setState({
             email: e.target.value
          })
    }

    handlePassword=(e)=>{
        this.setState({
           password: e.target.value
        })
  }

handleLogin =()=>{
    if(this.state.email== "tanishqpandey456@gmail.com" && this.state.password== "abcd")
    this.setState({
        loggedin: true
    })
}




    render() {
        if(this.state.loggedin=== true){
            return <Redirect to="/three" />
        }
        return (
            <div>
                <Card style={{width:300,marginTop:100,margin:'auto',heigth:50}}>
                    <CardContent>
                        <TextField
                        variant="outlined"
                   
                        value={this.state.email}
                        label="email"
                        onChange={this.handleEmail}
                        fullWidth
                        
                        />
                        < br />

                          <TextField
                        variant="outlined"
                   
                        value={this.state.password}
                        label="password"
                        type='password'
                        onChange={this.handlePassword}
                        fullWidth
                        
                        />   

                        <Button variant="contained" color="secondary"
                            fullWidth
                        onClick={this.handleLogin}
                        
                        >Login</Button>            
                    </CardContent>

                </Card>

















            </div>

        )
    }
}