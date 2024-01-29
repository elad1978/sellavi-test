{
  /*it is impotent to remember that if we use that video component 
we need to change the color of the light mode h1 in the theme.js file  from black to another color ,
because that in black color it cant be seen */
}

import React, { useRef, useEffect } from "react";

const videoSrc = "path_to_your_video.mp4"; // Define video source here

const YourComponent = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1; // Adjust the playback rate as needed
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        // width: "100%",
        // height: "100%",
        zIndex: -1,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        style={
          {
            // width: "100%",
            // height: "100%",
            // objectFit: "cover",
          }
        }
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default YourComponent;

// import React from "react";
// //import spinningWorldVideo from "../../assets/spinningWorldVideo.mp4";

// const VideoComponent = ({ videoSrc }) => {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         // width: "100%",
//         // height: "100%",
//         zIndex: -1,
//       }}
//     >
//       <video
//         autoPlay
//         loop
//         muted
//         style={{
//           // width: "100%",
//           // height: "100%",
//           objectFit: "cover",
//         }}
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default VideoComponent;
