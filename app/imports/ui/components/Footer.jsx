import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { padding: '15px 0 15px 0' };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            <p>hi-covid-convo-team</p>
            <p>Glen Larita, Sydney Dempsey, Daniel Nilo, Brian Abad</p>
          </div>
        </footer>
    );
  }
}

export default Footer;
