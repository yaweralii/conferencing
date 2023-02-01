import styles from "@/app/conference/conference.module.css";
import { SpeakerData, SessionDataTypes } from "@/app/interfaces/page";

async function fetchSessions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json"
  );
  const sessionData = await response.json();
  return sessionData;
}

function fetchSessionInfo(slug: string, sessionData: any) {
  const sessionInfo = sessionData?.sessions?.find(
    (session: any) => session.id == slug
  );
  return sessionInfo;
}

export default async function Page({ params }: any) {
  const sessionData = await fetchSessions();
  const slug = params.slug;
  const sessionInfo = fetchSessionInfo(slug, sessionData);

  const {
    title,
    description,
    startsAt,
    endsAt,
    room,
    day,
    format,
    track,
    level,
    speakers,
  }: SessionDataTypes = sessionInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>title : {title}</h3>
      <h5 className={styles.descText}>About : {description}</h5>
      <h5 className={styles.descText}>startAt : {startsAt}</h5>
      <h5 className={styles.descText}>endsAt : {endsAt}</h5>
      <h5 className={styles.descText}>Day : {day}</h5>
      <h5 className={styles.descText}>where: {room}</h5>
      <h5 className={styles.descText}>Duration: {format}</h5>
      <h5 className={styles.descText}>Lan: {track}</h5>
      <h5 className={styles.descText}>Level: {level}</h5>
      {speakers &&
        speakers.map(({ name, id }: SpeakerData) => (
          <div key={id}>
            <h5 className={styles.descText}>Speaker: {name}</h5>
          </div>
        ))}
    </div>
  );
}
