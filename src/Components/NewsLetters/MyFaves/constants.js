export const styles = (theme) => ({
  roote: {
    display: "flex",
    width: "90%",
  },
  roote2: {
    display: "flex",
    width: "90%",
    [theme.breakpoints.up("lg")]: {
      width: "63%",
    },
  },
  detailes: {
    display: "flex",
    flexDirection: "column",
  },
  conte: {
    flex: "1 0 auto",
  },
  box: {
    width: "500%",
  },
  rectan: {
    width: "68px",
    height: "90px",
    padding: "35px 22px 33px",
    borderRadius: "0 6px 6px 0",
    backgroundColor: "rgb(96, 96, 96, 10%)",
  },
  rectang: {
    width: "68px",
    height: "90px",
    padding: "30px 22px 33px",
    borderRadius: "0 6px 6px 0",
    backgroundColor: "rgb(96, 96, 96, 10%)",
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 0, 0, 45),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 0, 0, 11),
    },
  },
  image: {
    width: "24px",
    height: "22px",
    margin: "22px",
    objectFit: "contain",
  },
  opasi: {
    opacity: "0.5",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    fontStyle: "normal",
    flex: "1 0 auto",
    color: "#606060",
  },
});
