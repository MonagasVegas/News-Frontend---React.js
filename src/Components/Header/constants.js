export const styles = (theme) => ({
  root: {
    width: "285px",
    height: "114px",
    margin: "0 0 70px",
    padding: "44px 1082px 42px 150px",
    boxShadow: "0 1px 4px 0 rgba(0, 21, 41, 0.12)",
    backgroundImage: "linear-gradient(to bottom, #ececec -32%, #fff 124%)",
  },
  img: {
    width: "300px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(5, 0, 0, -15),
      width: "200px",
    },
  },
});
