import { Component } from "react";
import { Form } from "react-bootstrap";
import {
  Button

} from "@material-ui/core"
import "./Style.css";

export default class Peoject2 extends Component {
  constructor() {
    super();
    this.state = {
      taskarr: [],
      completed: [],
      taskInput: [],
      count: 60*60,
     
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      let { count } = this.state;
      this.setState({
        count: count - 1
      })
    }, 1000)
  }
  fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

  componentDidUpdate(prevprops, pervstate, snapshot) {
    if (prevprops.count !== this.state.count && this.state.count === 0) {
      clearInterval(this.timer);
      if (this.props.onTimesup) {
        this.props.onTimesup();
      }
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    const data = event.target,
      newTodo = {
        taskTitle: data.taskTitle.value,
        date: data.date.value,
        time: data.time.value
      }

    this.state.taskarr.push(newTodo);
    
    this.setState({
      taskarr: this.state.taskarr,
      

    })
  }

  addTodo1


  handleCompleted = (single, index, event) => {

    var temp = this.state.completed
    temp.push(single)

    var temp1 = this.state.taskarr
    temp1.splice(index, 1)

    this.setState({

      taskarr: temp1,
      completed: temp,
     
    })


  }
  render() {
    let { count } = this.state;
    console.log(this.state.taskarr)
    return (

      <div class="col-md-3 container">
   
        <div style={{
          backgroundColor: 'green',
          margin: 10,
          padding: 10,
          textAlign: 'center',
          borderRadius: 20


        }}
        >
          <Form class="secondary" onSubmit={this.addTodo}>
            <Form.Group controlId="formBasicTaskTitle">
              <Form.Label class="controlId">Task Title:</Form.Label>
              <Form.Control class="primary" type="text" placeholder="Enter A Task" name="taskTitle" />
            </Form.Group>

            <br />
            <Form.Group controlId="formBasicDate">
              <Form.Label class="controlId">Task date:</Form.Label>
              <Form.Control class="primary" type="date" placeholder="mm/dd/yyyy" name="date" />
            </Form.Group>

            <br />
            <Form.Group controlId="formBasicTime">
              <Form.Label class="controlId">Task Time:</Form.Label>
              <Form.Control class="primary" type="time" placeholder="Enter the Time" name="time" />
            </Form.Group>

            <br />
            <Button type="Submit" variant="contained" color="secondary">
              Add+
            </Button>
          </Form>



        </div>

        <ol>

          {this.state.taskarr.map((single, index) => {


            return (


              <li>
                {single.taskTitle} at:{single.time} Date:{single.date}
                <br />
                {this.fmtMSS(count)}
                <Form.Group controlId="formBasicTime">
                  <Form.Label class="controlId">Task Time:</Form.Label>
                  <Form.Control class="primary" type="time" placeholder="Enter the Time" name="time" />
                </Form.Group>

                <Button variant="contained" color="secondary"
                  onClick={(e) => {
                    this.handleCompleted(single, index)
                    this.addTodo1(single,index)
                  }}
                >
                  Completed
                </Button>


              </li>

            )

          }

          )}


        </ol>
        <ol>
          <li>
            {this.state.completed.map((single, index) => {
              return (
                <div class="completed">
                  {single.taskTitle} at:{single.time} Date:{single.date}

                  <Button>
                    This Task is completed
                  </Button>

                </div>


              )
            })}
          </li>
        </ol>
      </div>



    )
  }
}

