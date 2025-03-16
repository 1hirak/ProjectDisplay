"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function VideoPlayer() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef();
  const [initiateInterval, setinitiateInterval] = useState(false);

  const updateProgress = () => {
    if (!videoRef.current || !progressRef.current) return;
    const widthBar =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressRef.current.style.width = `${widthBar}%`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    !isPlaying ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying((x) => !x);
    setinitiateInterval(true); //for preformance
  };

  useEffect(() => {
    intervalRef.current = setInterval(updateProgress, 1000);
    console.log("timelime updated");
    return () => clearInterval(intervalRef.current); // Cleanup
  }, [initiateInterval]);

  return (
    <div>
      <video
        className="m-auto"
        ref={videoRef}
        width="600"
        src="/sample-video.mp4" 
        controls
      />
      <div style={{ height: "4px", background: "#ddd" }}>
        <div
          ref={progressRef}
          style={{ height: "100%", background: "#2196F3", width: "" }}
        />
      </div>
      <Button onClick={togglePlay} className="mt-4 ml-4">
        {isPlaying ? "Pause" : "Play"}
      </Button>
    </div>
  );
}

export default VideoPlayer;
