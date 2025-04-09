const GOOGLE_API_KEY = "AIzaSyBUKH-L5LHBURS8T3nOWsV5PSatIJbmg-o";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?https://youtube-search-suggestion.onrender.com/?q=";

export const commentsData = [
  {
    id: 1,
    name: "Roy",
    text: "loremm what is this.",
    replies: [
      { id: 2, name: "Dwayne", text: "loremm what is this.", replies: [] },
      { id: 3, name: "Rock", text: "loremm what is this.", replies: [] },
      { id: 4, name: "Bruce", text: "loremm what is this.", replies: [] },
    ],
  },
  {
    id: 5,
    name: "Maxx",
    text: "loremm what is this.",
    replies: [
      { id: 6, name: "Kate", text: "loremm what is this.", replies: [] },
      {
        id: 7,
        name: "Sam",
        text: "loremm what is this.",
        replies: [
          { id: 8, name: "Dexter", text: "loremm what is this.", replies: [] },
          { id: 9, name: "Sheldon", text: "loremm what is this.", replies: [] },
          { id: 10, name: "Joe", text: "loremm what is this.", replies: [] },
        ],
      },
      { id: 11, name: "Chris", text: "loremm what is this.", replies: [] },
    ],
  },
  { id: 12, name: "Max", text: "loremm what is this.", replies: [] },
  { id: 13, name: "Evans", text: "loremm what is this.", replies: [] },
  {
    id: 14,
    name: "Sojin",
    text: "loremm what is this.",
    replies: [
      { id: 15, name: "Brad", text: "loremm what is this.", replies: [] },
      { id: 16, name: "Leonardo", text: "loremm what is this.", replies: [] },
      { id: 17, name: "Lorem", text: "loremm what is this.", replies: [] },
    ],
  },
];
