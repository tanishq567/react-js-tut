import React from 'react';

import {
   TextField,
    Button

} from "@material-ui/core"

export default class Material extends React.Component {

    render() {
        return (
            <div>

                <TextField 
                 variant="outlined"
                 color="secondary"
                margin="dense"
                />
                <Button variant="contained" color="secondary">
                    Hello Tanishq Pandey
                </Button>

            </div>
        )
    }
}