import Login from "./Login";

function Landing() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontFamily: "League Spartan",
          fontWeight: "800",
          fontSize: "80px",
          textShadow: "5px 5px 0px #1ed760",
        }}
      >
        PLAYLYTICS
      </h1>

      <h2
        style={{
          position: "absolute",
          top: "110px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#a6a6a6",
          fontFamily: "Glacial Indifference",
          fontWeight: "400",
          fontSize: "28px",
          textAlign: "center",
        }}
      >
        Don’t know what to listen to? <br />
        We got you
      </h2>

      <Login />
    </div>
  );
}

export default Landing;
