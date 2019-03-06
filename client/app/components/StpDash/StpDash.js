import React, { Component } from "react";
import SidePanel from "../SidePanel";
import StpOverview from "./StpOverview";
import Demo from "./Chart/demo";
import Issue from "./Issues";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import "../Map/Overview.css";

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
        <div className="mt0 fn fr-ns w-75-ns pr4-ns" />
        {this.state.overview ? (
          <div className="mt0 fn fr-ns w-75-ns pr4-ns">
            <Paper className="mr4">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Capacity</TableCell>
                    <TableCell>Technology Used</TableCell>
                    <TableCell>Operational</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Haridwar</TableCell>
                    <TableCell>Uttarakhand</TableCell>
                    <TableCell>24 MLD</TableCell>
                    <TableCell>ASP</TableCell>
                    <TableCell>YES</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <StpOverview />
          </div>
        ) : null}
        {this.state.charts ? (
          <div className="fn fl-ns w-75-ns">
            <Demo />
          </div>
        ) : null}
        {this.state.issue ? (
          <div className="fn fl-ns w-75-ns">
            <Issue />
          </div>
        ) : null}
        {this.state.download ? (
          <div className="fn fl-ns w-75-ns">download</div>
        ) : null}
      </div>
    );
  }
}
