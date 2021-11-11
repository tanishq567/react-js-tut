import  React from 'react';
import { Redirect } from 'react-router-dom';
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography
}from "@material-ui/core"
export default class Comp3 extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            loggedIn:false
        }
    }
    handleEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    handlePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
   handleLogin=() => {
     if(this.state.email=="tanishq@gmail.com" && this.state.password=="abcd")
      this.setState({
          loggedIn:true
      })
    }

    render(){
        if(this.state.loggedIn === true)
        return<Redirect to="/two" />
        return(
            <div>
                <Card style={{width:300,margin:"auto" ,marignTop:200}}>
                    <Typography>
                        Login
                        </Typography>

                    <CardContent>
                        <TextField
                            variant="outlined"
                            margin="danse"
                            label="email"
                            fullWidth
                            value={this.state.email}
                           onChange={this.handleEmail} >
                        </TextField>
                        <TextField
                            variant="outlined"
                            margin="danse"
                            label="password"
                            fullWidth
                            value={this.state.password}
                           onChange={this.handlePassword} >
                        </TextField>
                        <Button 
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={this.handleLogin}>
                            Login</Button>
                    </CardContent>
                </Card>
            </div>

            
        )
    }
}