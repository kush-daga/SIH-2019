import React, { Component } from "react";

export default class StpOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataBod: [],
      dataDo: [],
      dataColor: [],
      dataTemp: [],
      dataPh: [],
      stp: "haridwar",
      Bod: true,
      Temp: false,
      Do: false,
      Color: false,
      isLoading: false
    };
    this.getBod = this.getBod.bind(this);
    this.getDo = this.getDo.bind(this);
    this.getPh = this.getPh.bind(this);
    this.getTemp = this.getTemp.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  getBod() {
    const { dataBod } = this.state;
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
          dataBod: JSON.parse(JSON.stringify(json)),
          isLoading: false
        });
      });
  }
  getDo() {
    const { stp } = this.state;
    //post request to backend
    this.setState({
      isLoading: true
    });
    fetch("/api/data/getDo", {
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
        console.log(json);
        this.setState({
          dataDo: JSON.parse(JSON.stringify(json)),
          isLoading: false
        });
      })
      .then(() => {
        console.log("do");
        console.log(this.state.dataDo);
      });
  }
  getPh() {
    const { stp } = this.state;
    //post request to backend
    this.setState({
      isLoading: true
    });
    fetch("/api/data/getPh", {
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
        console.log(json);
        this.setState({
          dataPh: JSON.parse(JSON.stringify(json)),
          isLoading: false
        });
      });
  }
  getTemp() {
    const { stp } = this.state;
    //post request to backend
    this.setState({
      isLoading: true
    });
    fetch("/api/data/getTemp", {
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
          dataTemp: JSON.parse(JSON.stringify(json)),
          isLoading: false
        });
      });
  }
  getColor() {
    const { stp } = this.state;
    //post request to backend
    this.setState({
      isLoading: true
    });
    fetch("/api/data/getColor", {
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
          dataColor: JSON.parse(JSON.stringify(json)),
          isLoading: false
        });
      });
  }
  componentDidMount() {
    this.getBod();
    this.getColor();
    this.getTemp();
    this.getPh();
    this.getDo();
  }
  render() {
    return (
      <div>
        {/* <p>{this.state.data}</p> */}
        {!this.state.isLoading ? (
          <div>
            {this.state.dataDo.map(d => console.log(d.stp + " do " + d.value))}
            <div className="pa4 ">
              <div className="cf ">
                <input
                  className="burger-check fn fl-ns w-25-ns "
                  id="burger-check"
                  type="checkbox"
                />

                <label for="burger-check" className="burger f5 " />
                <div id="navigation1" className="navigation mb3 br3">
                  <ul>
                    <li>
                      <a
                        className="f5  white"
                        onClick={() =>
                          this.setState({
                            Bod: true,
                            Do: false,
                            Temp: false,
                            Color: false,
                            Ph: false
                          })
                        }>
                        Bod
                      </a>
                    </li>
                    <li>
                      <a
                        className="f5  white "
                        onClick={() => {
                          this.setState({
                            Do: true,
                            Bod: false,
                            Temp: false,
                            Color: false,
                            Ph: false
                          });
                          console.log(this.state.dataDo);
                        }}>
                        Do
                      </a>
                    </li>
                    <li>
                      <a
                        className="f5  white "
                        onClick={() => {
                          this.setState({
                            Temp: true,
                            Do: false,
                            Bod: false,
                            Color: false,
                            Ph: false
                          });
                          console.log(this.state.dataTemp);
                        }}>
                        Temperature
                      </a>
                    </li>
                    <li>
                      <a
                        className="f5  white "
                        onClick={() =>
                          this.setState({
                            Ph: true,
                            Do: false,
                            Temp: false,
                            Color: false,
                            Bod: false
                          })
                        }>
                        Ph
                      </a>
                    </li>
                    <li>
                      <a
                        className="f5  white "
                        onClick={() =>
                          this.setState({
                            Color: true,
                            Do: false,
                            Temp: false,
                            Bod: false,
                            Ph: false
                          })
                        }>
                        Color
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {this.state.Bod ? (
              <div className="overflow-auto ">
                <table
                  className="f6 w-100 mw8 center ba b--black-50 br2"
                  cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-blue">Name</th>
                      <th className="fw6 tl pa3 bg-blue">Bod Value</th>

                      {/* <th className="fw6 tl pa3 bg-white">Email</th>
                    <th className="fw6 tl pa3 bg-white">ID</th> */}
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {this.state.dataBod.map(d => (
                      <tr className="stripe-dark">
                        <td className="pa3">{d.stp}</td>
                        <td className="pa3">{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {this.state.Do ? (
              <div className="overflow-auto mt3">
                <table
                  className="f6 w-100 mw8 center ba b--black-50 br2"
                  cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-blue">Name</th>
                      <th className="fw6 tl pa3 bg-blue">Do Value</th>

                      {/* <th className="fw6 tl pa3 bg-white">Email</th>
                    <th className="fw6 tl pa3 bg-white">ID</th> */}
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {this.state.dataDo.map(d => (
                      <tr className="stripe-dark">
                        <td className="pa3">{d.stp}</td>
                        <td className="pa3">{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {this.state.Temp ? (
              <div className="overflow-auto mt3">
                <table
                  className="f6 w-100 mw8 center ba b--black-50 br2"
                  cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-blue">Name</th>
                      <th className="fw6 tl pa3 bg-blue">Temp Value</th>

                      {/* <th className="fw6 tl pa3 bg-white">Email</th>
                    <th className="fw6 tl pa3 bg-white">ID</th> */}
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {this.state.dataTemp.map(d => (
                      <tr className="stripe-dark">
                        <td className="pa3">{d.stp}</td>
                        <td className="pa3">{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            {this.state.Ph ? (
              <div className="overflow-auto mt3">
                <table
                  className="f6 w-100 mw8 center ba b--black-50 br2"
                  cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-blue">Name</th>
                      <th className="fw6 tl pa3 bg-blue">Ph Value</th>

                      {/* <th className="fw6 tl pa3 bg-white">Email</th>
                    <th className="fw6 tl pa3 bg-white">ID</th> */}
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {this.state.dataPh.map(d => (
                      <tr className="stripe-dark">
                        <td className="pa3">{d.stp}</td>
                        <td className="pa3">{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}

            {this.state.Color ? (
              <div className="overflow-auto mt3">
                <table
                  className="f6 w-100 mw8 center ba b--black-50 br2"
                  cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-blue">Name</th>
                      <th className="fw6 tl pa3 bg-blue">Color Value</th>

                      {/* <th className="fw6 tl pa3 bg-white">Email</th>
                    <th className="fw6 tl pa3 bg-white">ID</th> */}
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {this.state.dataColor.map(d => (
                      <tr className="stripe-dark">
                        <td className="pa3">{d.stp}</td>
                        <td className="pa3">{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}
