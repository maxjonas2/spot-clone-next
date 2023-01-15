export type ITrack = {
  id: number;
  title: string;
  album: string;
  duration: number;
  image: string;
};

export type Tracks = {
  [x: string]: {
    recent: ITrack[];
  };
};

const tracks: Tracks = {
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
        id: 5,
        title: "Work",
        album: "ANTI",
        duration: 167,
        image: "work.jpg",
      },
      {
        id: 4,
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
        id: 1,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 2,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 3,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 5,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 4,
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
        id: 1,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 2,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 3,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 5,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 4,
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
        id: 1,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 2,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 3,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 5,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 4,
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
        id: 1,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 2,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 3,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 5,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 4,
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
        id: 1,
        title: "All Black",
        album: "All Black",
        duration: 163,
        image: "all-black.jpg",
      },
      {
        id: 2,
        title: "Suicide",
        album: "Suicide",
        duration: 140,
        image: "suicide.jpg",
      },
      {
        id: 3,
        title: "Jaani",
        album: "Jaani Tera Naa",
        duration: 155,
        image: "jaani.jpg",
      },
      {
        id: 5,
        title: "I Need Ya",
        album: "I Need Ya",
        duration: 167,
        image: "needya.jpg",
      },
      {
        id: 4,
        title: "Gallan Terian",
        album: "Qismat",
        duration: 171,
        image: "gallan.jpg",
      },
    ],
  },
};

export default tracks;
