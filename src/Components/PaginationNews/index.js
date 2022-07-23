import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";

import Pagination from "@material-ui/lab/Pagination";

class PaginationNews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.pagi}>
        <Grid container>
          <Grid item xs={1} sm={5} md={5} lg={5}>
          </Grid>
          <Grid item xs={10} sm={4} md={4} lg={4}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Grid>
          <Grid item xs={1} sm={3} md={3} lg={3} />
        </Grid>
      </div>
    );
  }
}

const paginationNews = withStyles(styles, { withTheme: true })(PaginationNews);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(paginationNews);
