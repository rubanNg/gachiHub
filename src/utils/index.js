const key = 'AIzaSyBYbGOfPbUcj5nKYGfP6CV7iMwugNdvtSk';

export const urls = {

  channelVideos: function (id) {
    return `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=1000&channelId=${id}&key=${key}`;
  },

  channelsInfo: function (ids) {

    // id=UCDF2z2dZ7k9rOye1S137INA&id=UCVDjkas0YzPfGhiCCPDbKDA
    concatIds = ids[0];

    for (let i = 1; i < ids.length; i++) {
      concatIds += `&id=${ids[i]}`;
    }
    return `https://www.googleapis.com/youtube/v3/channels?id=${concatIds}&part=snippet%2CcontentDetails%2Cstatistics&key=${key}`;
  },

  channeslListIds: function() {
    return 'https://ytdl-list.herokuapp.com/list';
  }
}