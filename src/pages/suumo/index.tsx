import Head from "next/head";
import styles from "./index.module.scss";
import "ress";
import Image from "next/image";
import { Room } from "@/components/Room";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container__inner}>
          <div className={styles.outlookWrapper}>
            <Image
              src="/images/suumo_outlook.jpg"
              alt="outlook"
              layout="fill"
              className={styles.outlook_image}
            />
          </div>
          <div className={styles.apartment}>
            <p className={styles.apartment__type}>賃貸マンション</p>
            <h2>パークアクシス新宿百人町</h2>
            <div className={styles.apartment__info}>
              <p className={styles.apartment__info__child}>
                東京都新宿区百人町3
              </p>
              <div className={styles.apartment__info__child}>
                <p>JR中央線/大久保駅 歩6分</p>
                <p>JR山手線/新大久保駅 歩9分</p>
                <p>JR山手線/高田馬場駅 歩19分</p>
              </div>
              <p className={styles.apartment__info__child}>
                新築
                <br />
                ７階建
              </p>
            </div>
          </div>
        </div>
        <div className={styles.room}>
          <table className={styles.room__table}>
            <thead>
              <tr className={styles.room__table__head}>
                <td></td>
                <td></td>
                <td>階</td>
                <td>賃料/管理費</td>
                <td>敷金/礼金</td>
                <td>間取り/専有面積</td>
                <td>お気に入り</td>
                <td></td>
              </tr>
            </thead>
            {/* <Room rent={10000} isNew={default}/> */}
            <Room rent={10000} isNew={false}/>
            {/* <Room rent={30000} isNew={true} /> */}
            <Room rent={30} isNew={true} />
            <Room rent={50000} isNew={false} />
            <Room rent={100000} isNew={true} />
            <Room rent={120000} isNew={true}/>
          </table>
        </div>
      </div>
    </>
  );
};
export default Home;