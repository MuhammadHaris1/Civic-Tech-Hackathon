import React, { Component } from 'react';
import { FormControl, TextField, Button } from '@material-ui/core'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <FormControl>
            <TextField
                id="outlined-full-width1"
                // id="outlined-name"
                label="Full Name"
                required
                fullWidth
                // className={classes.textField}
                // value={this.state.name}
                onChange={this.nickName}
                margin="normal"
                variant="outlined"
            />
            <TextField
                required
                id="outlined-full-width2"
                fullWidth
                style={{width:400}}
                type="email"
                // id="outlined-name"
                label="Email-Adress"
                // className={classes.textField}
                // value={this.state.name}
                onChange={this.phoneNumber}
                margin="normal"
                variant="outlined"
            />
             <TextField
                required
                id="outlined-full-width3"
                fullWidth
                style={{width:400}}
                type="Password"
                // id="outlined-name"
                label="Password"
                // className={classes.textField}
                // value={this.state.name}
                onChange={this.phoneNumber}
                margin="normal"
                variant="outlined"
            />
            <Button>Sign Up</Button>
        </FormControl>

      </div>
    );
  }
}

export default SignUp;
