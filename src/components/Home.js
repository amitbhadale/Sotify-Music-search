import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Header from "./Header";

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;
  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login">
      <Header />
      <Button varient="info" type="submit" onClick={handleLogin}>
        Login to Spotify
      </Button>
    </div>
  );
};

//  http://localhost:3000/redirect#access_token=BQBQoyE5Qa2PWrGxz1jPnrIAlOtxKrIcmRgJhfRgJao121BMRbnue9Bf0rtW8nx5DwkimfH0ioz6hpEg_bBrvn9fO1AOtL1UiHuv0ZvWpEyreojJlknwk4VXZBOEG46SupqEX8Nlwz2lOVlwmLfFzDo1ll9KvczhJ71i6kePLM3XriM_mZYpF-4JJiaK3z2wcBAgSI4&token_type=Bearer&expires_in=3600

export default connect()(Home);
