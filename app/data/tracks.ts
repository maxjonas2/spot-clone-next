export type ITrack = {
  id: number;
  title: string;
  album: string;
  duration: number;
  image: string;
  src?: string;
};

export type Tracks = {
  [x: string]: {
    recent: ITrack[];
  };
};

const rawTracks: Tracks = {
  "1": {
    recent: [
      {
        id: 1,
        title: "Only Girl",
        album: "Loud",
        duration: 163,
        image: "only.jpg",
      },
      {
        id: 2,
        title: "You Da One",
        album: "Talk That Talk",
        duration: 140,
        image: "you-da-one.jpg",
      },
      {
        id: 3,
        title: "Diamonds",
        album: "Diamonds",
        duration: 155,
        image: "diamonds.jpg",
      },
      {
        id: 4,
        title: "Work",
        album: "ANTI",
        duration: 167,
        image: "work.jpg",
      },
      {
        id: 5,
        title: "Rehab",
        album: "Good Girl Gone Bad",
        duration: 171,
        image: "rehab.jpg",
      },
    ],
  },
  "2": {
    recent: [
      {
        id: 6,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 7,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 8,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 9,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 10,
        title: "Gallan Terian",
        album: "Qismat",
        duration: 171,
        image: "gallan.jpg",
      },
    ],
  },
  "3": {
    recent: [
      {
        id: 11,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 12,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 13,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 15,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 14,
        title: "Gallan Terian",
        album: "Qismat",
        duration: 171,
        image: "gallan.jpg",
      },
    ],
  },
  "4": {
    recent: [
      {
        id: 16,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 17,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 18,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 20,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 19,
        title: "Gallan Terian",
        album: "Qismat",
        duration: 171,
        image: "gallan.jpg",
      },
    ],
  },
  "5": {
    recent: [
      {
        id: 21,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 22,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 23,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 25,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 26,
        title: "Gallan Terian",
        album: "Qismat",
        duration: 171,
        image: "gallan.jpg",
      },
    ],
  },
  "6": {
    recent: [
      {
        id: 27,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 28,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 29,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 30,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 31,
        title: "Gallan Terian",
        album: "Qismat",
        duration: 171,
        image: "gallan.jpg",
      },
    ],
  },
};

// console.log(
//   Object.entries(rawTracks)
//     .map((item) => item[1].recent)
//     .flat()
//     .map((track, index) => ({
//       ...track,
//       src: index % 2 === 0 ? "generic-song.mp3" : "generic-song.mp3",
//     }))
// );

const tracks: { [x: string]: { recent: ITrack[] } } = {};

Object.entries(rawTracks).forEach((track) => {
  tracks[track[0]] = {
    recent: track[1].recent.map((t) => ({
      ...t,
      src: t.id % 2 === 0 ? "generic-song.mp3" : "generic-song.mp3",
    })),
  };
});

export default tracks;
