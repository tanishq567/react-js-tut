import React from "react";
import "./Style.css";
import {
    Button

} from "@material-ui/core"
export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskarr: [],
            taskInput: [],

            completed: [],


        }


    }
    handleInput = (e) => {
        this.setState({
            taskInput: e.target.value
        })

    }
    pushTask = () => {
        var temp = this.state.taskarr

        temp.push(this.state.taskInput)

        this.setState({
            taskarr: temp,
            taskInput: ""
        })
    }

    handleCompleted = (single, index, time) => {

        var temp = this.state.completed
        temp.push(single)

       

        var temp1 = this.state.taskarr
        temp1.splice(index, 1)

        this.setState({

            taskarr: temp1,
            completed: temp,
            input_time: temp2
        })


    }
    handleTime = (e) => {
        this.setState({
            arr: { ...this.state.arr, input_time: e.target.value }
        })
    }



    render() {


        return (

            <div>


                <input
                    value={this.state.taskInput}
                    onChange={this.handleInput}
                />
                <input
                    value={this.state.taskInput.input_time}
                    onChange={this.handleTime}
                />

                <Button variant="contained" color="secondary"
                    disabled={this.state.taskInput === "" ? true : false}
                    onClick={this.pushTask}
                >
                    Add Task

                </Button>

                {this.state.completed.map((double, index) => {


                    return (

                        <div className="div2">


                            {double}


                            <Button


                            >

                                This Task is completed

                            </Button>
                        </div>
                    )

                })}



                {this.state.arr.input_time.map((double, time) => {


                    return (

                        <div className="div2">


                            {double.currtime}



                        </div>
                    )

                })}



                <p className="secondary">Date ={this.currDate} </p>
                <p className="secondary">Time ={this.currTime} </p>



                {this.state.taskarr.length === 0 ?
                    <h1>you have no item</h1> :
                    <h1>Item added</h1>}

                <div style={{
                    backgroundColor: 'green',
                    margin: 12,
                    textAlign: 'center',
                    borderRadius: 12


                }}
                >


                    <h1>LIST ITEM</h1>
                    <div>

                        <ol>

                            {this.state.taskarr.map((single, index) => {


                                return (


                                    <li>
                                        {single}
                                        <Button variant="contained" color="secondary"
                                            onClick={(e) => {
                                                this.handleCompleted(single, index)

                                            }}
                                        >
                                            Completed
                                        </Button>


                                    </li>

                                )

                            }

                            )}
                        </ol>






                    </div>
                </div>
            </div>
        )
    }

}

