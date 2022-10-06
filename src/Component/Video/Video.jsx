import React from 'react'
import './Viedostyle.scss'

const Video = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="530"
        height="300"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

export default Video