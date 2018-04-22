import React from "react";
import {
    translate
} from "react-i18next";
import "./AudioPlayer.css";

import ReactAudioPlayer from 'react-audio-player';

class AudioPlayer extends React.Component {
    render() {
        const {
            url
        } = this.props;
        return (
            <div><i className="material-icons">volume_up</i>
            <ReactAudioPlayer
            src="/audio/background.ogg"
            />
            </div>
        )
    }
}

export default translate()(AudioPlayer);
