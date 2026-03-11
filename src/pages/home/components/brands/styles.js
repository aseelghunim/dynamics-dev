export const textStyle = {
  position: "relative",
  zIndex: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  color: "#fff",
};

export const buttonStyle = {
  color: "white",
  borderColor: "white",
  height: { xs: "35px", sm: "46px" },
  fontSize:"18px",
  width: { xs: "213px",sm:"250px" },
  borderRadius:"8px!important",
  backgroundColor: "rgba(255,255,255,0.2)",
  marginTop:{xs:"24px",sm:"48px"},
  "&:hover": {
    borderColor: "white",
    color: "#ab92e1",
    backgroundColor: "white",
  },
};

export const videoStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  opacity: 0.4,
};
