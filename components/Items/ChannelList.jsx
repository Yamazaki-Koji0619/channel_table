import React, { useEffect, useState }from 'react';
import styles from '../../styles/Home.module.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
// import Link from 'next/link';
import Menu from '@material-ui/core/Menu';


const useStyles = makeStyles(() => ({
    itemWidth: {
        padding: "15px"
    },
    listWidth: {
        width: "500px"
    },
    listBg: {
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        padding: "0 0 8px 0"
    },
    listHeight: {
        minHeight: "120px"
    },
    menuWidth: {
        width: "100vw",
        height: "100vh",
        position: "relative",
        padding: 0
    }
}))

const ChannelList = (props) => {
    const classes = useStyles();

    const channelId = props.channelId;
    const timetableData = [];
    const broadcastingData = [];

    const timeData = [];
    const [timetable, setTimetable] = useState([]);
    const [broadcasting, setBroadcasting] = useState([]);

    const [channelTime, setChannelTime] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [allItem, setAllItem] = useState({
        channelId: "",
        endAt: "",
        highlight: "",
        id: "",
        startAt: "",
        thumbnail: "",
        title: ""
    });

    const cyber_url = "https://ca-tech-challenge-web-202009.herokuapp.com/v2/"
    
    //全ての番組の情報を取得
    useEffect(() => {
        fetch(cyber_url + "timetable/" + channelId).then(res => res.json())
            .then((result) => {
                result.data.slots.map(item => {
                    timetableData.push(item);
                })
                setTimetable(timetableData);
            })
    },[]);

    //放送中の番組情報を取得
    useEffect(() => {
        fetch(cyber_url + "broadcasting/" + channelId).then(res => res.json())
            .then(result => {
                result.data.slots.map(item => {
                    broadcastingData.push(item);
                })
                setBroadcasting(broadcastingData);
            })
    },[])

    const handleClickListItem = (event, item) => {
        setAnchorEl(event.currentTarget);
        setAllItem(item);
    };
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <List className={classes.itemWidth} aria-label="Device settings">
            {broadcasting.map(item => (
                <ListItem
                    key={item.id}
                    button
                    component="li"
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    onClick={(event) => handleClickListItem(event, item)}
                    className={classes.listBg}
                >
                    <div className={styles.list_time_now}><p>放送中</p></div>
                    <div><img className={styles.list_img} src={item.thumbnail} alt=""/></div>
                    <ListItemText
                        primary={item.title} secondary={item.highlight} className={classes.listHeight}
                    />
                </ListItem>
            ))}
            {timetable.map(item => (
                <ListItem
                    key={item.id}
                    button
                    component="li"
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="when device is locked"
                    onClick={(event) => handleClickListItem(event, item)}
                    className={classes.listBg}
                >
                    <div className={styles.list_time}><p>{item.startAt.slice(11,16)}</p></div>
                    <div><img className={styles.list_img} src={item.thumbnail} alt=""/></div>
                    <ListItemText
                        primary={item.title} secondary={item.highlight} className={classes.listHeight}
                    />
                </ListItem>
            ))}
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menuWidth}
            >
                <div className={styles.list_click}>
                    <p >{allItem.startAt.slice(11,16)} ~ {allItem.endAt.slice(11,16)}</p>
                    <div><img className={styles.list_img} src={allItem.thumbnail} alt=""/></div>
                    <h3><span className={styles.list_click_span}>タイトル</span><br /> {allItem.title}</h3>
                    <p><span className={styles.list_click_span}>詳細</span><br /> {allItem.highlight}</p>
                    <p><span className={styles.list_click_span}>チャンネル</span><br /> {allItem.channelId}</p>
                    <p><span className={styles.list_click_span}>id</span><br />{allItem.id}</p>
                </div>
            </Menu>
        </List>
    )
};

export default ChannelList;