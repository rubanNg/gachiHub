const key = '';

export const urls = {
  channelVideos: function (id) {
    return `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=1000&channelId=${id}&key=${key}`;
  }
}