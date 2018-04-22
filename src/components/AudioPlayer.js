import React from "react";
import { translate } from "react-i18next";
import "./AudioPlayer.css";

import ReactAudioPlayer from 'react-audio-player';


class AudioPlayer extends React.Component {   
    render() {
        const {  url } =this.props;
        return (
            <ReactAudioPlayer
            src="my_audio_file.ogg"
            autoPlay
            controls
          />
        )
    }
}

export default translate()(AudioPlayer);