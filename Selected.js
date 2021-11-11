import React from "react";
//import "./ToDoListCSS.css"
export default class Selected extends React.Component {
    constructor() {
        super();
        this.state = {
            taskInput: [
                {
                    input_text: "",
                    input_date: "",
                    input_time: ""
                }
            ],
            taskArr: [],
            completedTask: []
        }
    }
    handleInputTask = (e) => {
        this.setState({
            taskInput: { ...this.state.taskInput, input_text: e.target.value }
        })
    }
    handleInputDate = (e) => {
        this.setState({
            // taskInput:{...this.state.taskInput, input_datetime:Date().tolocaleString()}
            taskInput: { ...this.state.taskInput, input_date: e.target.value }
        })
    }
    handleInputTime = (e) => {
        this.setState({
            // taskInput:{...this.state.taskInput, input_datetime:Date().tolocaleString()}
            taskInput: { ...this.state.taskInput, input_time: e.target.value }
        })
    }
    handlePush = () => {
        var temp = this.state.taskArr;
        temp.push(this.state.taskInput)
        this.setState({
            taskArr: temp
        })
    }
    handleComplete = (elem, index) => {
        var temp = this.state.completedTask;
        temp.push(elem)
        var temp1 = this.state.taskArr;
        temp1.splice(index, 1);
        this.setState({
            taskArr: temp1,
            completedTask: temp
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.taskInput.input_text} placeholder="Enter Task To Do" onChange={this.handleInputTask}></input>
                {/* <button disabled={this.state.taskInput === "" ? true : false} onClick={this.handlePush}>Addtask</button> */}
                <input type="date" value={this.state.taskInput.input_date} onChange={this.handleInputDate}></input>
                <input type="time" value={this.state.taskInput.input_time} onChange={this.handleInputTime}></input>
                <button onClick={this.handlePush}>Addtask</button>

                <div className="ToDo_class">
                    <h1 align="center"><u>To Do List</u></h1>
                    <table className="ToDo_table" align="center">
                        <tr>
                            <th>Task_Name </th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        {this.state.taskArr.map((item, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{item.input_text}</td>
                                        <td>{item.input_date}</td>
                                        <td>{item.input_time}</td>
                                        <td><button className="Botton_class" onClick={() => {
                                            this.handleComplete(item, index)
                                        }}>Completed</button></td>

                                    </tr>
                                </>
                            )
                        })}

                    </table>
                </div>
                <div className="Completed_class">
                    <h1 align="center"><u>Completed Task</u></h1>
                    <ol>
                        {this.state.completedTask.map((elem, index) => {
                            return (
                                <li>
                                    {elem.input_text}
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}