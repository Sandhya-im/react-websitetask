import React from "react";
import "./nothing.css";
// import logo from "./image/profile.webp";
import phone from "./image/nothing.jpg";
import backcamera from "./image/backcamera.jpg";
// import charge from "./image/charge.jpg";
import frontcamera from "./image/frontCamera.jpeg";
import glyphy from "./image/glyphy.png";
import ntg from "./image/ntg.jpg";
import ram from "./image/ram.webp";

function Nothing() {
  return (
    <div>
      <header className="main-header">
        <div>
          <h1 style={{ fontSize: "30px" }}> NOTHING (R)</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">phone</a>
            </li>

            <li>
              <a href="#">audio</a>
            </li>

            <li>
              <a href="#">cmf</a>
            </li>

            <li>
              <a href="#">community</a>
            </li>

            <li>
              <a href="#">support</a>
            </li>
          </ul>
        </div>
      </header>
      <hr></hr>
      <div className="header1">
        <a href="#">Overview</a>
        <a href="#">Specs</a>
        <a href="#">Compare</a>
      </div>
      <br></br>
      <div className="content1">
        <div id="ntgImg">
          <img src={phone} alt="Nothing" width="300px" height="400px;"></img>
        </div>
        <div className="content1_2">
          <h1>Phone (2a)</h1>
          <h2>Powerfully unique</h2>
          <br></br>
          <div className="quotes">
            <blockquote>
              Phone (2a) is already 2024's Phone of the year.
            </blockquote>
            <p>-British GQ</p>
          </div>
          <div className="quotes">
            <blockquote>
              It's a no-brainer smartphone that anyone can love, whether your
              budget is small or large
            </blockquote>
            <p>-WIRED</p>
          </div>
          <br></br>
          <div className="quotes">
            <blockquote>
              Fun design, colorful photos, strong performance, and masses of
              customization make it a brillant buy
            </blockquote>
            <p>-Digital Trends</p>
          </div>
          <br></br>
          <div className="quotes">
            <blockquote>
              A gorgeous display and terrific stamina in a uniquely stylish
              package
            </blockquote>
            <p>-Expert Reviews</p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1 style={{ fontSize: "60px", margin: "10px 15%" }}>All. In.</h1>
      <br></br>
      <div className="content2">
        <div className="box box1">
          <p style={{ fontSize: "18px" }}>MediaTek Dimensity 7200 Pro5G</p>
          <h1 style={{ fontSize: "40px" }}>8-core 4nm Gen2</h1>
          <br></br>
          <br></br>
          <br></br>
          <img src={ram} alt="ram" width="250px" height="300px"></img>
        </div>

        <div className="box box2">
          <h1 style={{ fontSize: "40px" }}>Nothing OS 2.5</h1>
          <p style={{ fontSize: "20px" }}>Powered by Andriod 14</p>
          {/* black color */}
        </div>

        <div className="box box3">
          <h1 style={{ fontSize: "40px" }}>32 MP</h1>
          <p style={{ fontSize: "20px" }}>Front camera</p>
          <img
            src={frontcamera}
            alt="camera"
            width="200px"
            height="100px"
          ></img>
        </div>

        <div className="box box4">
          <h1 style={{ fontSize: "40px" }}>Dual 50MP</h1>
          <p style={{ fontSize: "18px" }}>Main and Ultra-wide cameras</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={backcamera} alt="camera" width="250px" height="340px"></img>
        </div>

        <div className="box box5">
          <img src={ntg} alt="ram" width="160px" height="150px"></img>
          <h1 style={{ fontSize: "40px" }}>120 Hz</h1>
          <br></br>
          <p style={{ fontSize: "18px" }}>10-bit flexible AMOLED display</p>
        </div>

        <div className="box box6">
          <h1 style={{ fontSize: "40px" }}>Glyph Interface</h1>
          <p style={{ fontSize: "18px" }}>15 innovative functions</p>
          <img src={glyphy} alt="ram" width="160px" height="150px"></img>
        </div>

        <div className="box box7">
          <h1 style={{ fontSize: "40px" }}>1,300 nits</h1>
          <p style={{ fontSize: "18px" }}>Peak brightness</p>
        </div>

        <div className="box box8">
          <h1>Designed in London</h1>
          {/* red color */}
        </div>

        <div className="box box9">
          <h1 style={{ fontSize: "40px" }}>5000 mAh Battery</h1>
          <p style={{ fontSize: "18px" }}>Up to 29 hours video playback*</p>
          {/* <img src={charge} alt="ram" width="200px" height="100px"></img> */}
        </div>

        <div className="box box10">
          <h1>20 GB RAM</h1>
          <p style={{ fontSize: "18px" }}> 12GB+8 GB RAM Booster</p>
          {/* black color */}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Nothing;
