import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { setNewsLetters } from '../../Redux/Actions/_actionNews';
import {openMyFaves } from '../../Redux/Actions/_actionNews';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleNews = () => {
    this.props.setNewsLetters(true);
    this.props.openMyFaves(false);
  };

  handleClick = () => {
   this.props.openMyFaves(true);
   this.props.setNewsLetters(false);
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={2} sm={5} md={5} lg={5} />

        <Grid item xs={10} sm={7} md={7} lg={7}>
          <ButtonGroup
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button 
             color="primary"
             onClick={this.handleNews}  
            >
              {" "}
              &nbsp;&nbsp; All &nbsp;&nbsp;&nbsp;
            </Button>
            <Button
             onClick={this.handleClick}
            >My Faves</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <br />
        </Grid>
      </Grid>
    );
  }
}

const home = withStyles(styles, { withTheme: true })(Home);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {
  openMyFaves,
  setNewsLetters,

})(home);
