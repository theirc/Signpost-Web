import React from "react";
import {
    translate
} from "react-i18next";
import "./AudioPlayer.css";

import ReactAudioPlayer from 'react-audio-player';

const MIN_CYCLES = 2;

class AudioPlayer extends React.Component {
    state = {
        run: 0,
        cycle: 0,
        playing: false,
        maxCycles: MIN_CYCLES,

    }
    _refs = {};

    componentDidMount() {
        setTimeout(() => {
            this.animateVolume();
        }, 500)
    }

    animateVolume() {
        const {
            run,
            cycle,
            maxCycles
        } = this.state;
        if (cycle < maxCycles) {
            this.setState({
                cycle: run == 2 ? cycle + 1 : cycle,
                run: run == 2 ? 0 : run + 1
            });

            setTimeout(() => {
                this.animateVolume();
            }, 500)
        }
    }

    playMe() {
        const {
            playing,
        } = this.state;
        if (!playing) {
            this._refs.audioPlayer.audioEl.currentTime = 0;
            this._refs.audioPlayer.audioEl.play();

            this.setState({
                playing: true,
                cycle: 0,
                run: 0,
                maxCycles: 1e10
            });

            setTimeout(() => {
                this.animateVolume();
            }, 500)
        } else {
            this._refs.audioPlayer.audioEl.pause();
        }
    }

    endPlay() {
        this.setState({
            playing: false,
            cycle: 6,
            run: 0,
            maxCycles: MIN_CYCLES
        });
    }

    render() {
        const {
            src
        } = this.props;

        const {
            run,
        } = this.state;
        const volumes = [
            "fa-volume-up",
            "fa-volume-down",
            "fa-volume-off",
        ]

        return (
            <div className="AudioPlayer"><i className={`fa ${volumes[run]}`} style={{ fontSize: 24, cursor: 'pointer'}} onClick={() => this.playMe() }></i>
            <ReactAudioPlayer
            ref={(r) => { this._refs.audioPlayer = r; }}
            src={src}
            style={{display: 'none'}}
            onPlay={()=> { }}
            onEnded={()=>{this.endPlay()}}
            onAborted={()=>{this.endPlay()}}
            onPause={()=>{this.endPlay()}}
            />
            </div>
        )
    }
}

export default translate()(AudioPlayer);
