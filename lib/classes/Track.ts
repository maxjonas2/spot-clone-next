import { Dispatch, SetStateAction } from "react";
import type { CurrentTrackInfo } from "../../app/contexts/AppContext";

type TrackStateSetter = Dispatch<SetStateAction<CurrentTrackInfo>>;

export default class Track {
  private canPlayThrough: boolean = false;
  private trackSrc: string | undefined;
  private audio: HTMLAudioElement | undefined;
  public stateSetter: TrackStateSetter;

  constructor(
    stateSetter: TrackStateSetter,
    trackSrc: string | undefined = undefined
  ) {
    this.trackSrc = trackSrc;
    this.audio = new Audio();
    this.stateSetter = stateSetter;
    this.attachListeners();
    if (trackSrc) {
      this.setTrack(trackSrc);
    }
  }

  private attachListeners() {
    addListeners(this.audio!, [
      {
        name: "canplaythrough",
        handler: () => {
          console.log("Can play through");
          this.canPlayThrough = true;
        },
      },
      {
        name: "play",
        handler: () => {
          this.stateSetter((item) => {
            return { ...item, status: true };
          });
        },
      },
      {
        name: "pause",
        handler: () => {
          this.stateSetter((item) => {
            return { ...item, status: false };
          });
        },
      },
    ]);
  }

  public setTrack(trackSrc: string, playOnChange: boolean = true) {
    this.pause();
    this.stateSetter((item) => {
      return {
        ...item,
        track: {
          id: item.track!.id,
          album: item.track!.album,
          duration: item.track!.duration,
          src: trackSrc,
          title: item.track!.title,
          image: item.track!.image,
        },
      };
    });
    this.trackSrc = trackSrc;
    this.audio!.src = this.trackSrc;
    this.audio!.currentTime = 0;
    if (playOnChange) this.play();
  }

  play() {
    if (this.canPlayThrough) {
      console.log("PLAY PRESSED");
      this.audio!.play();
    }
  }

  pause() {
    this.audio!.pause();
  }
}

function addListeners(
  element: HTMLElement,
  events: {
    name: keyof HTMLElementEventMap;
    handler: (this: HTMLElement, ev: Event) => void;
  }[]
) {
  events.forEach((event) => {
    element.addEventListener(event.name, event.handler);
  });
}
