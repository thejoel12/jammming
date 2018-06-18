var userAccessToken;
const clientID = 'd60c5ab4ce4744808d2f6e525886e5d0';
const redirectURL = "http://localhost:3000/";
var accessToken = window.location.href.match('/access_token=([^&]*)/');
var expiresIn = window.location.href.match('/expires_in=([^&]*)/');

const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    } else if ((accessToken) && (expiresIn)) {
      accessToken = userAccessToken;
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
    }
  },

  search(track) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${track}`, {
      headers: {
        method: 'GET',
        Authorization: `Bearer ${userAccessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.track) {
        return jsonResponse.track.map(track => {
          return ({
            id: track.id,
            name: track.name,
            artist: track.artits[0].name,
            album: track.album.name,
            uri: track.uri
          })
        });
      } else {
        return [];
      }
    });
  },

  savePlaylist(nameOfPlaylist, trackURIs) {
    if ((nameOfPlaylist == null) && (trackURIs == null)) {
      return;
    } else {
      var userAccessToken = accessToken;
      var userID;
      var playlistID;
      return fetch('https://api.spotify.com/v1/me', {
        Authorization: `Bearer ${userAccessToken}`
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.id) {
          return jsonResponse.id = userID;
        }
      })
      .then(() => {
          fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${userAccessToken}`
              },
              body: JSON.stringify({
                name:
              })
            })
          })
            .then(response => response.json())
            .then(jsonResponse => playlistID = jsonResponse.id)
            .then(() => {
                fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                  method: 'POST',
                  headers: {
                    Authorization: `Bearer ${userAccessToken}`
                  },
                  body: JSON.stringify({
                    uris: trackUris
                  })
                });
            )
  } //end of else
}

};
export default Spotify;
