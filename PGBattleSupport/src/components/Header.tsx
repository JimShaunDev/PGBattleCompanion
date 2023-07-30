import "../App.css";

function Header({ title }: { title: string }) {
  const container = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
    marginBottom: "1rem",
  };

  const heading = {
    fontFamily: "Noto Sans JP",
    fontWeight: "600",
    color: "#B6EADA",
  };

  const imgStyle = {
    height: "8vh",
  };

  return (
    <div style={container}>
      <img style={imgStyle} src="./pglogo.png" alt="logo" />
      <h1 style={heading}>{title}</h1>
      <button className="btn" type="button">
        Reset
      </button>
    </div>
  );
}

export default Header;
