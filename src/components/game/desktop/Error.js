export default function Error({ mode = "Desktop" }) {

  const styles = {
    background: '#000',
    opacity: 0.8,
    position: 'absolute',
    left: 0,
    right: 0,
    top: '10px',
    bottom: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px'
  }
  return (
    <div
      className="inner-loader-overlay"
      style={styles}
    >
      <div style={{ color: "#ffffff" }}>
        <h1>Play other games.</h1>
        <h4>This game is not available on {mode}.</h4>
        <h4>You can checkout other games.</h4>
      </div>
    </div>
  );
}
