var userAccessToken;
const clientID = 'd60c5ab4ce4744808d2f6e525886e5d0';
const redirectURL = "http://localhost:3000/";


const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    var accessToken = window.location.href.match(/access_token=([^&]*)/);
    var expiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if ((accessToken) && (expiresIn)) {
      userAccessToken = accessToken[1];
      const expirationInt = Number(expiresIn[1]);
      window.setTimeout(() => accessToken = '', expirationInt * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
    }
  },

  search(track) {
    Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${track}`, {
      headers: {
        // method: 'GET',
        Authorization: `Bearer ${userAccessToken}`,

      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(track => {
          return ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
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
    Spotify.getAccessToken();
    if ((nameOfPlaylist == null) && (trackURIs == null)) {
      return;
    } else {
      // var userAccessToken = accessToken;
      var userID;
      var playlistID;
      return fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.id) {
          return jsonResponse.id = userID;
        }
      })
      .then(() => {
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: nameOfPlaylist
              })
            })
          })
            .then(response => {
             return response.json();
           })
            .then(jsonResponse => playlistID = jsonResponse.id)
            .then(() => {
                return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                  method: 'POST',
                  headers: {
                    Authorization: `Bearer ${userAccessToken}`,
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    uris: trackURIs
                  })
                })
            })
  } //end of else
}

};
export default Spotify;
