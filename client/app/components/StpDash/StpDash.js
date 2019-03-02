import React, { Component } from "react";
import SidePanel from "../SidePanel";
import StpOverview from "./StpOverview";

export default class StpDash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      overview: false,
      charts: false,
      download: false,
      home: true,
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
        issue: false,
        home: false
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
        issue: false,
        home: false
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
        issue: false,
        home: false
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
        home: false,
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
        {this.state.home ? (
          <div className="fn fl-ns w-75-ns">Yooooo</div>
        ) : null}
        {this.state.overview ? (
          <div className="fn fl-ns w-75-ns">overview</div>
        ) : null}
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
