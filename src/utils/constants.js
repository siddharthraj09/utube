export const YOUTUBE_POPULAR_VIDEOS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
