import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import imagen from "../img/2.png";

class MyFaves extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={1} md={1} lg={1} />
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <Card className={classes.roote}>
                <div className={classes.detailes}>
                  <CardContent className={classes.conte}>
                    <Typography variant="subtitle1" color="textSecondary">
                      2 hours ago by author
                    </Typography>
                    <Typography component="h6" variant="h6">
                      Event-driven state management in React using Storeon
                    </Typography>
                  </CardContent>
                </div>
                <div className={classes.rectan}>
                  <div>
                    <img src={imagen} alt="" className={classes.image} />
                  </div>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={5} md={5} lg={5}>
              <Card className={classes.roote}>
                <div className={classes.detailes}>
                  <CardContent className={classes.conte}>
                    <Typography variant="subtitle1" color="textSecondary">
                      4 hours ago by author
                    </Typography>
                    <Typography component="h6" variant="h6">
                      Progressive Web Apps with React.js: Part I—Introduction
                    </Typography>
                  </CardContent>
                </div>
                <div className={classes.rectan}>
                  <div>
                    <img src={imagen} alt="" className={classes.image} />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={1} md={1} lg={1} />
          </Grid>

          <Grid container spacing={3}>
            
          <Grid item xs={12} sm={1} md={1} lg={1} />
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Card className={classes.roote2}>
                <div className={classes.detailes}>
                  <CardContent className={classes.conte}>
                    <Typography variant="subtitle1" color="textSecondary">
                      2 hours ago by author
                    </Typography>
                    <Typography component="h6" variant="h6">
                      Event-driven state management in React using Storeon
                    </Typography>
                  </CardContent>
                </div>
                <div className={classes.rectan}>
                  <div>
                    <img src={imagen} alt="" className={classes.image} />
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} />


            <Grid item xs={12} sm={1} md={1} lg={1} />
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Card className={classes.roote2}>
                <div className={classes.detailes}>
                  <CardContent className={classes.conte}>
                    <Typography variant="subtitle1" color="textSecondary">
                      4 hours ago by author
                    </Typography>
                    <Typography component="h6" variant="h6">
                      Progressive Web Apps with React.js: Part I—Introduction
                    </Typography>
                  </CardContent>
                </div>
                <div className={classes.rectan}>
                  <div>
                    <img src={imagen} alt="" className={classes.image} />
                  </div>
                </div>
              </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} />



              <Grid item xs={12} sm={1} md={1} lg={1} />
              <Grid item xs={12} sm={7} md={7} lg={7}>
                <Card className={classes.roote2}>
                  <div className={classes.detailes}>
                    <CardContent className={classes.conte}>
                      <Typography variant="subtitle1" color="textSecondary">
                        4 hours ago by author
                      </Typography>
                      <Typography component="h6" variant="h6">
                        Progressive Web Apps with React.js: Part I—Introduction
                      </Typography>
                    </CardContent>
                  </div>
                  <div className={classes.rectan}>
                    <div>
                      <img src={imagen} alt="" className={classes.image} />
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} />

              
           
          </Grid>
      </div>
    );
  }
}

const myFaves = withStyles(styles, { withTheme: true })(MyFaves);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(myFaves);
