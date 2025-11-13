import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative"
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
          textShadow: "5px 5px 0px #1ed760"

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
    textAlign: "center"
  }}
>
  Don’t know what to listen to? <br />
We got you
</h2>

      <button
        onClick={() => window.location.href = "https://spotify.com"}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#353535",
          border: "4px solid #1ed760",
          borderRadius: "80px",
          padding: "5px 5px",
          width: "450px",
          height: "95px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          cursor: "pointer",
          marginTop: "150px"
        }}
      >
        <img
          src="/src/assets/spotifylogo.png"
          alt="spotify"
          style={{ width: "55px", height: "55px" }}
        />
        <span
          style={{
            color: "white",
            fontWeight: "800",
            fontSize: "34px",
            fontFamily: "League Spartan"
          }}
        >
          LOGIN WITH SPOTIFY
        </span>
      </button>

    </div>
  );
}

export default App;
