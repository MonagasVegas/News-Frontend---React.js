import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";

const fontStyles1 = { color: "red", fontSize: "20px" };
const fontStyles2 = { color: "#4ad5ff", fontSize: "20px" };
const fontStyles3 = { color: "#00c180", fontSize: "20px" };

class CustomizedSelects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
    };
  }

  handleChange = (event) => {
    this.setState({ age: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={1} sm={2} md={2} lg={2} />
          <Grid item xs={10} sm={4} md={4} lg={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Select your news
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.age}
                onChange={this.handleChange}
                label="Age"
              >
                <MenuItem value={30}>
                  <FaAngular style={fontStyles1} />
                  &nbsp;&nbsp; Angular
                </MenuItem>
                <MenuItem value={10}>
                  <FaReact style={fontStyles2} />
                  &nbsp;&nbsp; Reacts
                </MenuItem>
                <MenuItem value={20}>
                  <FaVuejs style={fontStyles3} />
                  &nbsp;&nbsp; Vuejs
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1} sm={6} md={6} lg={6} />
          <Grid item xs={12}>
            <br /><br />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const customizedSelects = withStyles(styles, { withTheme: true })(
  CustomizedSelects
);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(customizedSelects);
