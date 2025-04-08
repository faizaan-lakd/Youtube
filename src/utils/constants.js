const GOOGLE_API_KEY = "AIzaSyBUKH-L5LHBURS8T3nOWsV5PSatIJbmg-o";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?https://youtube-search-suggestion.onrender.com/?q=";
