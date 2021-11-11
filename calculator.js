import React from 'react';

import {
    Button,

} from "@material-ui/core"

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,

        }
    }

    handleNum1 = (e) => {
        this.setState({
            num1: e.target.value,

        })
    }
    handleNum2 = (e) => {
        this.setState({
            num2: e.target.value,



        })
    }


    handleSum = () => {
        this.setState({
            sum: parseInt(this.state.num1) + parseInt(this.state.num2),
           
        })
    }
    
    handleSum1 = () => {
        this.setState({
            sub: parseInt(this.state.num1) - parseInt(this.state.num2),
           
        })
    }
    handleSum2 = () => {
        this.setState({
            multiply: parseInt(this.state.num1) * parseInt(this.state.num2),
           
        })
    }

    handleSum3 = () => {
        this.setState({
            divide: parseInt(this.state.num1) / parseInt(this.state.num2),
           
        })
    }

    

    render() {
        return (

            <div>
                <input placeholder="enter  a number"

                    onChange={this.handleNum1}
                />
                <br />

                <input placeholder="enter a second number"

                    onChange={this.handleNum2}
                />
                <br />


                <Button variant="contained" color="secondary"

                    onClick={this.handleSum}

                >
                    

                    Add
                    <br />
                </Button>
                Add:{this.state.sum}
                <br />
                <Button variant="contained" color="primary"



                    onClick={this.handleSum1}

                >
                    Sub

                </Button>
                Sub:{this.state.sub}
                <br />
               

                <Button variant="contained" color="secondary"



                    onClick={this.handleSum2}

                >
                    Multi

                </Button>
                multiply:{this.state.multiply}
                <br />

                <Button variant="contained" color="primary"



                    onClick={this.handleSum3}

                >
                    Divide

                </Button>
                divide:{this.state.divide}
                <br />
               
               



            </div>
        )
    }
}