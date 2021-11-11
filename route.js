import  React from 'react';

import{
BrowserRouter,
Link,
Route
} from "react-router-dom"
import Comp1 from'./comp1';
import Comp2 from'./comp2';
import Comp3 from'./comp3';
import Comp4 from './comp4';
export default class MyRouter extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                 <Link to="/one">comp1</Link>
                <br />
           <Link to="/two">comp2</Link>
                <br />
        <Link to="/three">Home</Link>
        <Link to='/four'>Comp4</Link>


                <Route  path="/one" component={Comp1}/>
                
                <Route exact path="/two" component={Comp2}/>
                <Route path="/three" component={Comp3}/>
                <Route path="/four" component={Comp4}/>

             { /* <div style={{background:"grey",padding: 20}}>
                  this is a footer
                </div> */}
                
                </BrowserRouter>
            </div>

        )
    }
}
//exact=> jo page hme sbse phle chie ho uske lie 

//Que=> Link is  a static routing or dynamic routing
//Ans=> Static routing