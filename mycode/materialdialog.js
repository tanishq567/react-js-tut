import React from 'react';

import { Button,Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core"

export default class materialdialog extends React.Component {
    constructor(props){
        super(props);
        this.state={
            dialogOpen: false
        }
    }

    render() {
        return (
            <div>
                <Button 
                onClick={() => {
                    this.setState({
                        dialogOpen:true
                    })
                }}
                
                >
                    Open Dialog
                </Button>

              < Dialog
              open={this.state.dialogOpen}
              
              >
              <DialogTitle>
                   My Component

              </DialogTitle>
              <DialogContent>

                  Do u agree with this component
              </DialogContent>

              <DialogActions>
                  <Button>

                      Agree
                      
                  </Button>


              </DialogActions>

              
              </Dialog>
              
            </div>
        )
    }
}