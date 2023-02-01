import styles from "@/app/conference/conference.module.css";
import { SpData, SeData } from "@/app/interfaces/page";

async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );
  const speakerData = await response.json();
  return speakerData;
}

function fetchSpeakerInfo(slug: string, speakerData: any) {
  const speakerInfo = speakerData?.speakers?.find(
    (speaker: SpData) => speaker.name == slug
  );
  return speakerInfo;
}

export default async function Page({ params }: any) {
  const speakerData = await fetchSpeakers();
  const slug = params.slug.replace("-", " ");
  const speakerInfo = fetchSpeakerInfo(slug, speakerData);

  const { name, bio, sessions }: SpData = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }: SeData) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
