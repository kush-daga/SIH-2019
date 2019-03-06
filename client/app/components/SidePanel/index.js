import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div
        className="ba b--blue pa3 bg-blue shadow-5 br3"
        style={{
          cursor: "pointer"
        }}>
        <article className="dt w-100 bb b--white-50 pb2 mt2" href="#0">
          <div className="dtc v-mid">
            <a
              className="f6 f5-ns fw6 lh-title white mv2 f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center"
              onClick={this.props.handleClickOverview}>
              Status
            </a>
            <h1 className="f5 fw4 mt0 mb0 white-60">स्थिति</h1>
            <h2 className="f6 fw4 mt0 mb0 white-60">
              View all the stats in one place
            </h2>
          </div>
        </article>
        <article className="dt w-100 bb b--white-50 pb2 mt2" href="#0">
          <div className="dtc v-mid ">
            <a
              className="f6 f5-ns fw6 lh-title white mv2 f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center"
              onClick={this.props.handleClickChart}>
              Charts
            </a>
            <h1 className="f5 fw4 mt0 mb0 white-60">चार्ट</h1>

            <h2 className="f6 fw4 mt0 mb0 white-60">Visualize the data</h2>
          </div>
        </article>
        <article className="dt w-100 bb b--white-50 pb2 mt2" href="#0">
          <div className="dtc v-mid ">
            <a
              className="f6 f5-ns fw6 lh-title white mv2 f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center"
              onClick={this.props.handleClickIssues}>
              Issues
            </a>
            <h1 className="f5 fw4 mt0 mb0 white-60">मुद्दे</h1>

            <h2 className="f6 fw4 mt0 mb0 white-60">
              View all the issues in one place
            </h2>
          </div>
        </article>
        <article className="dt w-100 bb b--white-50 pb2 mt2" href="#0">
          <div className="dtc v-mid ">
            <a
              className="f6 f5-ns fw6 lh-title white mv2 f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center"
              onClick={this.props.handleClickDownload}>
              Download Data
            </a>
            <h1 className="f5 fw4 mt0 mb0 white-60">डेटा डाउनलोड करें</h1>

            <h2 className="f6 fw4 mt0 mb0 white-60">Download details in csv</h2>
          </div>
        </article>
      </div>
    );
  }
}
