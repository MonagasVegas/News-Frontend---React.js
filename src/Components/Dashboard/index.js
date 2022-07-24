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
import  { setNewsLetters } from '../../Redux/Actions/_actionNews';
import { openMyFaves } from '../../Redux/Actions/_actionNews';



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componenteDidMount() {

    this.props.openMyFaves(false);
    this.props.setNewsLetters(false);
    alert(this.props.openFavesNews)
    
  }

  render() {
    return (
      <Grid container>
          <Header />
          <Home />
          <CustomizedSelects />
          {this.props.openNewsLetters && <NewsLetters /> }
          <br/><br/>
          {this.props.openFavesNews &&  <MyFaves />}
        <Grid item xs={12}>
          <PaginationNews />
        </Grid>
      </Grid>
    );
  }
}

const dashboard = withStyles(styles, { withTheme: true })(Dashboard);
function mapStateToProps(state) {
  return {

    openNewsLetters: state.newsReducer.openNewsLetters,
    openFavesNews: state.newsReducer.openFavesNews,

  };
}

export default connect(mapStateToProps, {

  openMyFaves,
  setNewsLetters

})(dashboard);
