import Link from "next/link";
import styles from "@/app/conference/conference.module.css";

interface SpeakerData {
  name: string;
  bio: string;
  id: string;
}

async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();
  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>
      {data.speakers.map(({ id, name, bio }: SpeakerData) => {
        const slugName = name.replace(" ", "-");
        return (
          <div key={id} className={styles.infoContainer}>
            <Link
              className={styles.bgLinks}
              href={`/conference/speakers/${slugName}`}
            >
              <h3 className={styles.titleText}>{name}</h3>
            </Link>

            <h5 className={styles.descText}>{bio}</h5>
          </div>
        );
      })}
    </div>
  );
}
