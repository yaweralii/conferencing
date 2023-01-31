// import { speakerJson } from "../page";
import styles from "../../conference.module.css";
// import { useRouter } from "next/router";

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

async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );
  const speakerJson = await response.json();
  return speakerJson;
}

function fetchSpeakerInfo(slug: any, speakerJson: any) {
  console.log(speakerJson.speakers[0].name, "???");
  console.log(slug, "+++");
  const speakerInfo = speakerJson?.speakers?.filter(
    (speaker: any) => speaker.name == slug
  );
  console.log(speakerInfo, "--");
  return speakerInfo;
}

export default async function Page({ params }: any) {
  const speakerJson = await fetchSpeakers();
  console.log(speakerJson, "=");
  console.log(params, "###");

  const slug = params.slug;
  console.log(slug, "slugName");
  const speakerInfo = fetchSpeakerInfo(slug, speakerJson);
  console.log(speakerInfo, "%%%");
  // const data = { params };
  // console.log(data, "slugData");
  // const router = useRouter();
  // console.log(router, "====");
  // console.log(router.query, "query");

  // const { name, bio, sessions }: SpeakerData = speakerInfo;

  return (
    // <div className={styles.infoContainer}>
    //   <h3 className={styles.titleText}>{name}</h3>
    //   <h5 className={styles.descText}>About: {bio}</h5>
    //   {sessions &&
    //     sessions.map(({ name, id }: SessionData) => (
    //       <div key={id}>
    //         <h5 className={styles.descText}>Session: {name}</h5>
    //       </div>
    //     ))}
    // </div>
    <h1>{params.slug}</h1>
  );
}
