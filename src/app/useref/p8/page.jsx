"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

function VideoPlayer() {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const timelineRef = useRef(null);
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
    setinitiateInterval((x) => !x); //for preformance
  };

  const timelineCLick = (e) => {
    let timelinePercent =
      ((e.clientX - timelineRef.current.getBoundingClientRect().x) /
        timelineRef.current.getBoundingClientRect().width) *
      100;
    let seekTime = (timelinePercent / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setinitiateInterval((x) => !x);
  };

  const resetTimeline = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
    setIsPlaying(false);
  };
  useEffect(() => {
    intervalRef.current = setInterval(updateProgress, 200);
    console.log("timelime updated");
    return () => clearInterval(intervalRef.current); // Cleanup
  }, [initiateInterval]);

  return (
    <div style={{ width: "600px" }} className="m-auto">
      <video
        className="m-auto"
        ref={videoRef}
        width="600"
        src="/sample-video.mp4"
      />
      <div
        ref={timelineRef}
        className="mt-4 rounded-md"
        onClick={(e) => timelineCLick(e)}
        style={{ height: "8px", background: "#ddd", cursor: "pointer" }}
      >
        <div
            className="rounded-md"
          ref={progressRef}
          style={{ height: "100%", background: "#2196F3", width: "0%" }}
        />
      </div>
      <Button onClick={togglePlay} className="mt-4 ml-4">
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Button onClick={resetTimeline} className="mt-4 ml-4">
        Reset
      </Button>
    </div>
  );
}

export default VideoPlayer;
