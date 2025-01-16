// API KEY
// const GOOGLE_API_KEY = "AIzaSyAyOS-_vNJdwLTqVW-9M1mTZHLV-Nv9q-M";
const GOOGLE_API_KEY = "AIzaSyCERZDyfPzmGEjhw2XtAYoTxzgYBw4zfy4";
// APIS
export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_VIDEO_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" + GOOGLE_API_KEY + "&q=";

// Images
export const USER_ICON = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2kBgDZJMJmO9DYHyzsaFeDJ_GCvuMGwiog&s";
export const YOUTUBE_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClbbfGiEBp1F8m8_6-mUdtdyb537zznVT7A&s";

export const LIVE_CHAT_COUNT = 100;