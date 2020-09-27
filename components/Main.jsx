import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import ChannelList from './Items/ChannelList';

const Main = () => {

    const channelData = [];
    const [channel, setChannel] = useState([]);

    const cyber_url = "https://ca-tech-challenge-web-202009.herokuapp.com/v2/channels"

    //チャンネルの情報取得
    useEffect(() => {
        fetch(cyber_url).then(res => res.json())
            .then(result => {
                result.data.channels.map(item => {
                    channelData.push(item);
                });
                setChannel(channelData);
            })
            .catch(error => console.error('Error:', error));
    },[]);

    return(
        <main className={styles.main}>
           {channel.map(item => (
               <div key={item.id} className={styles.main_width}>
                   {/* <div>{item.name}</div> */}
                   <div className={styles.main_img}><img src={item.thumbnail} alt=""/></div>
                   <div className={styles.main_scroll}><ChannelList channelId={item.id} /></div>
               </div>
           ))}
        </main>
    )
};

export default Main;