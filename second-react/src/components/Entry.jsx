export default function Entry(props) {
  return (
    <article className="journal-entry">
      <img src={props.img.src} alt={props.img.alt} />

      <div className="info-container">
        <div className="location">
          <span style={{ fontSize: "0.9rem" }}>📍</span>
          <span className="country">{props.country}</span>
          <a href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
        </div>

        <h2>{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
