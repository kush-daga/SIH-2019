import React, { Component } from "react";
import SidePanel from "../SidePanel";
import StpOverview from "./StpOverview";

export default class StpDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      overview: true,
      charts: false,
      download: false,
      issue: false
    };
  }

  handleClickChart() {
    if (!this.state.charts) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: true,
        download: false,
        issue: false
      });
    }
  }
  handleClickOverview() {
    if (!this.state.overview) {
      this.setState({
        isLoading: true,
        overview: true,
        charts: false,
        download: false,
        issue: false
      });
    }
  }
  handleClickDownload() {
    if (!this.state.download) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: false,
        download: true,
        issue: false
      });
    }
  }
  handleClickIssues() {
    if (!this.state.issue) {
      this.setState({
        isLoading: true,
        overview: false,
        charts: false,
        download: false,

        issue: true
      });
    }
  }
  render() {
    return (
      <div className="cf mt5 ml3">
        <div className="fn fl-ns w-25-ns pr4-ns">
          <SidePanel
            handleClickChart={this.handleClickChart.bind(this)}
            handleClickOverview={this.handleClickOverview.bind(this)}
            handleClickDownload={this.handleClickDownload.bind(this)}
            handleClickIssues={this.handleClickIssues.bind(this)}
          />
        </div>
        {this.state.overview ? <StpOverview /> : null}
        {this.state.charts ? (
          <div className="fn fl-ns w-75-ns">charts</div>
        ) : null}
        {this.state.issue ? (
          <div className="fn fl-ns w-75-ns">issues</div>
        ) : null}
        {this.state.download ? (
          <div className="fn fl-ns w-75-ns">download</div>
        ) : null}
      </div>
    );
  }
}
