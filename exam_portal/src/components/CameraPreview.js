import React, { useEffect } from 'react';

const CameraPreview = ({ isVisible, videoRef }) => {

  useEffect(() => {
    const startCamera = async () => {
      if (isVisible) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.onloadedmetadata = () => {
              videoRef.current.play().catch(error => {
                console.error('Error trying to play video:', error);
              });
            };
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      }
    };

    startCamera();

    return () => {
      // Stop camera only when component unmounts or visibility changes
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isVisible, videoRef]);

  return isVisible ? (
    <div className="camera-preview">
      <video ref={videoRef} autoPlay playsInline muted></video>
    </div>
  ) : null;
};

export default CameraPreview;
