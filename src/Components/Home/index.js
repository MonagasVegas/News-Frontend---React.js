import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={5} sm={5} md={5} lg={5}   />

        <Grid item xs={7}  sm={7} md={7} lg={7}  >
          <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
            <Button color="primary"> &nbsp;&nbsp; All &nbsp;&nbsp;&nbsp;</Button>
            <Button>My Faves</Button>
          </ButtonGroup>
        </Grid>
   
      </Grid>
    );
  }
}

const home = withStyles(styles, { withTheme: true })(Home);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(home);
