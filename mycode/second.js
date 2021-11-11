import React from 'react'

export default class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state=({

      a: 0,
    })
  }
  componentDidMount() {
    console.log("HI THIS IS TANISHQ PANDEY")
    //API CALL TO GET ALL THE STUDENT DATA
  }

  componentDidUpdate() {
    console.log("hii u r update now")
  }


render(){
  return (
    <div>
      Hii FROM second COMP
      <input
        onChange={(e) => {
          this.setState({
            a: e.target.value
          })
        }}


      />
    </div>
  )
}
  }
