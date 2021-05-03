export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStule = {
    margin: "0px",
    color: "pink"
  };
  const buttonStyle = {
    backgroundColor: "orange",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStule}>- Inline Style -</p>
      <button style={buttonStyle}>FILGHT!</button>
    </div>
  );
};
