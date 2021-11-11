import React from "react"


export default class FinalProj extends React.Component {
  constructor() {
    super();
    var date=Date().toLocaleString()
    this.state = {
      task_arr: [],
      arr: {
        input_task: "",
        input_date: date,
        // input_time: ""
      },
      completed_arr: [],
      start: date
    }
  }
  componentDidMount(){
     setInterval(()=> {
      this.setState({
        start: Date().toLocaleString()
      });
    }, 1000);
  }
  handleChange = (e) => {
    this.setState({
      arr:{...this.state.arr,input_task: e.target.value} //input value will be saved here 1st
    })
  }
  handleClick = () => {
    var temp = this.state.task_arr
    temp.push(this.state.arr)
    this.setState({
      task_arr: temp,
      // input_task: "",
    })
  }

  handleComplete = (m, index) => {
    var temp1 = this.state.completed_arr
    temp1.push(m)
    var temp2 = this.state.task_arr
    temp2.splice(index, 1)
    this.setState({
      task_arr: temp2,
      completed_arr: temp1
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.arr.input_task} onChange={this.handleChange} />
        <button disabled={this.state.arr.input_task === "" ? true : false} onClick={this.handleClick}>Add Task</button>
        <h1>Todo list</h1>
        <ol>
          {this.state.task_arr.map((m, i) => {
            console.log(m)
            return (
              <li>
                {m.input_task}-{m.input_date}-{m.input_time}
                <button
                  onClick={(e) => { this.handleComplete(m, i) }}
                >
                  completed
                </button>
              </li>
            )

          })}
        </ol>
        <h1>Completed task</h1>
        <ol>
          {this.state.completed_arr.map((s, i) => {
            return (
              <li>
                {s.input_task}---- 
                {this.state.start}
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

