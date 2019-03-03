import React, { Component } from "react";

export default class StpOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      stp: "haridwar",
      isLoading: false
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const { stp } = this.state;
    //post request to backend
    this.setState({
      isLoading: true
    });
    fetch("/api/data/getBod", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stp: stp
      })
    })
      .then(res => res.json())
      .then(json => {
        // console.log(json);
        this.setState({
          data: JSON.parse(JSON.stringify(json)),
          isLoading: false
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.data.map(d => console.log(d.stp + " " + d.value))}
        {/* <p>{this.state.data}</p> */}
        {!this.state.isLoading ? (
          <div className="pa4">
            <div className="overflow-auto">
              <table className="f6 w-100 mw8 center" cellSpacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-blue">Name</th>
                    <th className="fw6 tl pa3 bg-blue">Bod Value</th>
                    <th className="fw6 tl pa3 bg-blue">Time and date</th>
                    {/* <th className="fw6 tl pa3 bg-white">Email</th>
                    <th className="fw6 tl pa3 bg-white">ID</th> */}
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {this.state.data.map(d => (
                    <tr className="stripe-dark">
                      <td className="pa3">{d.stp}</td>
                      <td className="pa3">{d.value}</td>
                      <td className="pa3">{d.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
