import React, { Component } from "react";
import { connect } from "react-redux";
import { styles } from "./constants";
import { Grid, withStyles } from "@material-ui/core";
import imag1 from "./img/hacker.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container >
          <Grid item xs={2} sm={4} md={4} lg={4}></Grid>
          <Grid item xs={6} sm={4} md={4} lg={4}>
            <img src={imag1} alt=""  className={classes.img}  />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} />
        </Grid>
      </div>
    );
  }
}

const header = withStyles(styles, { withTheme: true })(Header);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(header);
