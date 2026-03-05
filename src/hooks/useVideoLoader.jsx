import { CircularProgress } from "@mui/material";
import { useState } from "react";

const loaderStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "24px",
};

const useVideoLoader = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoaded = () => {
    setIsLoading(false); // Hide loader once the video can play
  };

  const Loader = isLoading && (
    <CircularProgress style={loaderStyle} size={60} thickness={5} />
  );

  return { handleVideoLoaded, Loader };
};

useVideoLoader.propTypes = {};

export default useVideoLoader;
