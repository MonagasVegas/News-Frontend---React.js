import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { styles } from "./constants";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import img1 from "./img/1.png";
import img2 from "./img/2.png";
import { AiOutlineClockCircle } from "react-icons/ai";

class NewsLetters extends Component {
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
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp; 3 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Yes, React is taking over front-end development. The
                    question is why
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.rectangle}>
                <div>
                  <img src={img2} alt="" className={classes.imag} />
                </div>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                  <AiOutlineClockCircle />
                    &nbsp;&nbsp; 3 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Yes, React is taking over front-end development. The
                    question is why
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <div>
                  <img src={img1} alt="" className={classes.imag} />
                </div>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} />
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp; 2 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Event-driven state management in React using Storeon
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.rectangle}>
                <div>
                  <img src={img1} alt="" className={classes.imag} />
                </div>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp; 4 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Progressive Web Apps with React.js: Part I—Introduction
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.rectangle}>
                <div>
                  <img src={img2} alt="" className={classes.imag} />
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} />
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div>
                <CardContent>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp; 2 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    From chaos to free will
                  </Typography>
                </CardContent>
              </div>
              <div className={classes.rectangle1}>
                <div>
                  <img src={img1} alt="" className={classes.imag} />
                </div>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.contentOpasi}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp;  4 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Realize for React for Visualizing State flow and component
                    hierarchy
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle2}>
                <div>
                  <img src={img2} alt="" className={classes.imagenOpa} />
                </div>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} />
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={1} md={1} lg={1} />
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp;  3 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    All the fundamental React.js concepts, jammed into this
                    single Medium article (updated August 2019)
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <div>
                  <img src={img2} alt="" className={classes.imag} />
                </div>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography variant="subtitle1" color="textSecondary">
                    <AiOutlineClockCircle />
                    &nbsp;&nbsp;  4 hours ago by author
                  </Typography>
                  <Typography component="h6" variant="h6">
                    Realize for React for Visualizing State flow and component
                    hierarchy
                  </Typography>
                </CardContent>
              </div>
              <CardMedia className={classes.rectangle}>
                <div>
                  <img src={img2} alt="" className={classes.imag} />
                </div>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={1} md={1} lg={1} />
        </Grid>
      </div>
    );
  }
}

const newsLetters = withStyles(styles, { withTheme: true })(NewsLetters);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(newsLetters);
