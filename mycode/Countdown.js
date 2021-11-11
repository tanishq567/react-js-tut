
import React, { Component } from 'react'
 import moment, {duration } from 'moment'

export default class Countdown extends Component {



    state={
        days: 0,
        hours: 0,
        minutes:0,
        seconds:0,

    };
    setCountdown = ()=>{
        const futureDate =moment (this.props.futureDate);

       const today =moment();

       const clockDuration =duration(futureDate.diff(today));
        const days = Math.floor(clockDuration.asDays());
        const hours = clockDuration.hours();
        const mins = clockDuration.minutes();
        const secs = clockDuration.seconds();

        this.setState({
            days,hours,mins,secs
        });
     } 

     componentDidMount(){
         this.setCountdown();
         this.interval = setInterval(() => {
             this.setCountdown();
         },1000);
     }  

     componentWillUnmount() {
         clearInterval(this.interval);
     }



    render() {
        return (
            <div className ='countdown'>
                {Object.keys(this.state).map((key,i)=>(
                    <div className="coundown-segment">
                        <span className ='contdown-segment-number'>
                            {this.state[key]}
                        </span>
                        <span className='countdown-segment-caption'>
                            {key.toUpperCase()}
                            </span>
                        </div>

                 ) )}
                
            </div>
        )
    }
}
