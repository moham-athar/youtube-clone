
export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENT_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=" + process.env.REACT_APP_YOUTUBE_API_KEY + "&videoId="

export const LIVE_CHAT_API = "https://api.gameofthronesquotes.xyz/v1/random/5";

export const SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + process.env.REACT_APP_YOUTUBE_API_KEY + "&q=";