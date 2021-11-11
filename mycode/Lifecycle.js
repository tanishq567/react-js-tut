import React from 'react'
import Second from './second'
export default class lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <div>

        {this.state.show &&
          <Second />
        }
        <button
          onClick={() => {
            this.setState({
              show: false,
            })
          }}
        >
          Hide


        </button>



      </div>
    )
  }
}