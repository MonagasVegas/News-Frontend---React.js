import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";



import imagen from '../img/2.png';

class MyFaves extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    3 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Yes, React is taking over front-end development. The
                    question is why
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <Grid item xs={12} className={classes.imag1}>
                  <img src={imagen} alt="" />
                </Grid>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    3 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Yes, React is taking over front-end development. The
                    question is why
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <Grid item xs={12} className={classes.imag1}>
                  <img src={imagen} alt="" />
                </Grid>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} />

          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    2 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Event-driven state management in React using Storeon
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <Grid item xs={12} className={classes.imag1}>
                  <img src={imagen} alt="" />
                </Grid>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.contentOpasi}>
                  <Typography variant="subtitle1" color="textSecondary">
                    4 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Realize for React for Visualizing State flow and component
                    hierarchy
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <Grid item xs={12} className={classes.imag1}>
                  <img src={imagen} alt="" />
                </Grid>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} />

          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    2 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    From chaos to free will
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <Grid item xs={12} className={classes.imag1}>
                  <img src={imagen} alt="" />
                </Grid>
              </CardMedia>
            </Card>
          </Grid>

          
          </Grid>
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
