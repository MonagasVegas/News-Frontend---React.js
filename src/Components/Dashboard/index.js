import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";

import Header from "../Header";
import Home from "../Home";
import CustomizedSelects from "../CustomizedSelects";
import PaginationNews from "../PaginationNews";
import NewsLetters from '../NewsLetters';
import MyFaves from '../NewsLetters/MyFaves';

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
          <CustomizedSelects />
          <NewsLetters />
          <br/><br/>
          <MyFaves />
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
