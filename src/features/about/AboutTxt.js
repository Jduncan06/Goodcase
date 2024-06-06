import { Col } from "reactstrap";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const AboutTxt = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/1t-QDGkWHJNV-4sMCreooUixcQMX07kUXexgC4Hp9VPU/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      }
    );
  });

  const about = Array.from(data);
  return (
    <div className="about-container">
      <h1>My Story</h1>
      {about.map((item, i) => (
        <Col style={{margin:'2rem'}}>
          <p key={i}>{item.aboutText}</p>
        </Col>
      ))}
      <br />
      <br />
    </div>
  );
};

export default AboutTxt;
