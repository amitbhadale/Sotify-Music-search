import React from "react";
import _ from "lodash";
import { getParamValues } from "../utils/functions";
// import

// const RedirectPage = () => {
//   return <div>RedirectPage</div>;
// };

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return hostory.push("/dashboard");
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date.getTime() + access_token.expires_is * 1000;
      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", expiryTime);
      history.push("/dashboard");
    } catch (e) {
      history.push("/");
    }
  }
  render() {
    return null;
  }
}

// export default RedirectPage;
