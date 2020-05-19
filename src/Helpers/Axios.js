import axios from "axios";

const apiKey = "AIzaSyD-D2vMKhVbNJM00Z6c1rPKnJKhT7IpHrA";
const clientId =
  "882580634180-mrfoenml3fhr4fo034av8ic00urbf721.apps.googleusercontent.com";

export async function getVideoData(url) {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=${url}&type=video&videoDefinition=high&videoEmbeddable=true&key=${apiKey}`,
      {
        Authorization: `Bearer ${clientId}`,
        Accept: "application/json"
      }
    );

    const { snippet } = data.items[0];
    const result = {
      url,
      id: Math.ceil(Math.random() * 100),
      imageThumbnail: snippet.thumbnails.default.url,
      title: snippet.title
    };

    return result;
  } catch (error) {
    return {
      url: "https://www.youtube.com/watch?v=jI4K7L-LI58"
    };
  }
}
