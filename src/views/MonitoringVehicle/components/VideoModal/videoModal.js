import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import ReactPlayer from 'react-player'
import "react-modal-video/scss/modal-video.scss";


const videoModal = props => {

    return (
        <div className="">
          <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=nmGVE-quATk'
                width='1000px'
                height='1020px'
        />
        </div>
      );
    }
  
export default videoModal;