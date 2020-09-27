import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Header from '../../components/Header';

const Channel = () => {
  const router = useRouter()
  const { channelId } = router.query;

  const path = location.pathname;
  const id = path.split('/channel/')[1];
  const getChannel = [];
  const [channelItem, setChannelItem] = useState([]);


  const cyber_url = `https://ca-tech-challenge-web-202009.herokuapp.com/v2/timetable/${id}`


  //チャンネルの情報取得
  useEffect(() => {
      fetch(cyber_url).then(res => res.json())
          .then(result => {
              result.data.slots.map(item => {
                  getChannel.push(item);
              });
              setChannelItem(getChannel);
          })
          .catch(error => console.error('Error:', error));
  },[]);

  console.log(channelItem);

  return(
    <>
      <Header />
      <div className={styles.manu}>
        {channelItem.map(item => (
          <div className={styles.menu_flex}>
            <img src={item.thumbnail} alt="写真" />
            <div>
              <p>{item.title}</p>
              <p>{item.highlight}</p>
              <p>{item.channelId}</p>
              <p>{item.id}</p>
              <p>{item.startAt}</p>
              <p>{item.endAt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Channel;