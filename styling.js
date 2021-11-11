import React from "react";


export default class styling extends React.Component{

    constructor (props){
        super(props)
        this.state ={
            loggedIn:true

        }
    }
    render() {
        return(
          //  <div>
         // <div style={{backgroundColor: "yellow", width:600,textAlign:"center"}}>


           //   NextStacks
         // </div>

        //  <div className="div2">
        //     Tanishq Pandey
         // </div>
         // </div>
         <div>
             
             {this.state.loggedIn===true?"you are loggedIn":"you are loggedOut"}
             <br />
             {this.state.loggedIn===false &&"you r loggedIn"}
         </div>
          
        
        )
    }
}
