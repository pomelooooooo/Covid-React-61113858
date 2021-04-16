import React from "react";
import "../App.css";
import { Card, CardText, CardTitle, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberFormat from "react-number-format";

class Covid extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <div className="container">
        <br></br>
        <h1>สถานการณ์ผู้ติดเชื้อ Covid-19 ในประเทศไทย</h1>
        <br></br>
        <h5>ข้อมูล ณ วันที่ {data.UpdateDate}</h5>
        <br></br>
        <div className="col">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <Card body inverse color="Confirmed">
                <CardTitle tag="h5">ติดเชื้อสะสม</CardTitle>
                <CardText>
                  <h1>
                    <NumberFormat
                      value={data.Confirmed}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </h1>
                </CardText>
                <CardText tag="h5">
                  [ +
                  <NumberFormat
                    value={data.NewConfirmed}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card body inverse color="Recovered">
                <CardTitle tag="h5">หายแล้ว</CardTitle>
                <CardText tag="h1">
                  <NumberFormat
                    value={data.Recovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </CardText>
                <CardText tag="h5">
                  [+{" "}
                  <NumberFormat
                    value={data.NewRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="Hospitalized">
                <CardTitle tag="h5">รักษาอยู่ใน รพ.</CardTitle>
                <CardText tag="h1">
                  <NumberFormat
                    value={data.Hospitalized}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </CardText>
                <CardText tag="h5">
                  [+{" "}
                  <NumberFormat
                    value={data.NewHospitalized}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card body inverse color="Deaths">
                <CardTitle tag="h5">เสียชีวิต</CardTitle>
                <CardText tag="h1">
                  <NumberFormat
                    value={data.Deaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </CardText>
                <CardText tag="h5">
                  [+{" "}
                  <NumberFormat
                    value={data.NewDeaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />{" "}
                  ]
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <a href="https://covid19.th-stat.com/">
            แหล่งที่มา : https://covid19.th-stat.com/
          </a>
        </div>
      </div>
    );
  }
}
export default Covid;
