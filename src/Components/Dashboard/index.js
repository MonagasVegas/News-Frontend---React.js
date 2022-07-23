import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";

import Header from "../Header";
import Home from "../Home";
import CustomizedSelects from "../CustomizedSelects";
import PaginationNews from "../PaginationNews";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container>
          <Header />
          <Home />
          <br /><br /><br /><br />
          <CustomizedSelects />
        <Grid item xs={12}>
          <PaginationNews />
        </Grid>
      </Grid>
    );
  }
}

const dashboard = withStyles(styles, { withTheme: true })(Dashboard);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(dashboard);
