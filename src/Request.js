import axios from "axios";

// const Key1 = "AIzaSyBzkMPBVjjhtrL2F0ke51VHtmrVQQzrofQ"
// const Key3 = "AIzaSyCbpLQ7gwnxOGTsBLdS8z_V17pMjRTr1gQ"
// const Key2 = "AIzaSyAVNtjb_dypuMWq7lBFQT34Z2-Vr4b1JqU"
// const Key4 = "AIzaSyAfPBpC9xgiXvw9X5_AqnypZ7UTMu-LzJk"

// export default axios.create({
//     baseURL: "https://www.googleapis.com/youtube/v3/search",
//     params: {
//         type: 'video',
//         part: 'snippet',
//         myRating: 'like',
//         key: Key1,
//         order: 'viewCount',
//         safeSearch: 'strict',
//         maxResults: 48,
//         chart: 'mostPopular'
//     }
// })

export const url = 'https://youtube-v31.p.rapidapi.com/search'

export default axios.create({
    method: 'GET',
    url: url,
    params: {
      q: 'music',
      part: 'snippet,id',
      regionCode: 'IN',
      maxResults: '48',
      order: 'rating',
      safeSearch: 'strict',
      type: 'video',
      videoDuration: "long"
    },
    headers: {
      'X-RapidAPI-Key': 'ec8b683c04msh103c228f5ccfaf7p1bdcd5jsn73195b24e0e5',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
})