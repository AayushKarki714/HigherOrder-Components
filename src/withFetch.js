import React from "react";

function withFetch(WrappedComponent, url) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const requestedData = data;
          const finalData = [];
          for (const key in requestedData) {
            finalData.push({
              id: key,
              ...requestedData[key],
            });
          }
          this.setState({
            data: finalData,
          });
        });
    }
    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

export default withFetch;
