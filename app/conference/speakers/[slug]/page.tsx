import { speakerJson } from "../page";
import styles from "../../conference.module.css";

interface params {
  slug: string;
}
interface SpeakerData {
  name: string;
  bio: string;
  sessions: [];
}
interface SessionData {
  name: string;
  id: string;
}

function fetchSpeakerInfo(params: params) {
  // API call, DB Query, fetch from the app
  const speakerInfo = speakerJson.speakers.find(
    (speaker: any) => speaker.name == params.slug
  );
  return speakerInfo;
}

export default async function Page(params: params) {
  const speakerInfo = fetchSpeakerInfo(params);
  console.log(params, "=====");

  const { name, bio, sessions }: SpeakerData = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }: SessionData) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
