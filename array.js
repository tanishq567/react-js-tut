import React from "react";

export default class Array extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    name: "Tanishq",
                    address: "Kanpur",


                },


                {
                    name: "Manu",
                    address: "lucknow"
                }
            ]
        }
    }

    handlePush = () => {
        var temp = this.state.arr;
        temp.push({
            name: "Akash",
            address: "Uttarakhand"
        });
        this.setState({
            arr:temp
        })
    }

    handlePop =() => {
        var temp=this.state.arr;
        temp.pop();
        this.setState({
            arr:temp
        })
    }
        
    handleSplice = () => {
        var temp=this.stat
        this.setState({
            arr:temp
        })
    }

   





    render() {
        return (
            <div>

                Hello Tanishq
                {this.state.arr.map((double, index) => {
                    return (
                        <div>
                            {double.name} - {double.address}
                        </div>
                    )

                })}

                <button
                    onClick={this.handlePush}
                > Push
                </button>

                <button
                    onClick={this.handlePop}
                > pop
                </button>

                <button 
                onClick={this.handleSplice}
               
                > splice
                     </button>
                 
            </div>

        )
    }
}