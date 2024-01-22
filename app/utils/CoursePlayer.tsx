import axios from "axios";
import React, { FC, useEffect, useState } from "react";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({ otp: "", playbackInfo: "" });
  // ${process.env.NEXT_PUBLIC_API_URL}
  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/v1/getVdoCipherOTP`, {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div style={{ paddingTop: "56.25%", position: "relative", overflow: "hidden" }}>
      <iframe
        src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=u7TFQGRELXjXQM6o`}
        style={{
          border: 0,
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "95%",
          borderRadius: "10px"
        }}
        allowFullScreen={true}
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default CoursePlayer;
