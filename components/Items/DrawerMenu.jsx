import React, { useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styles from '../../styles/Home.module.css';
import { makeStyles } from '@material-ui/styles';
import { SiteContext } from '../../pages/_app';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: 256
    },
}));

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} onClick={(event) => selectMenu(event)} />;
// }

const DrawerMenu = (props) => {

    const {container} = props;
    const classes = useStyles();
    const { state, dispatch } = useContext(SiteContext);

    const menuItem = [
        {label: 'ABEMA NEWS/', channel: 'ch_0'},
        {label: 'ABEMA SPECIAL', channel: 'ch_1'},
        {label: 'ABEMA GOLD', channel: 'ch_2'},
        {label: 'ABEMA アニメ', channel: 'ch_3'},
        {label: '行動指針', channel: 'ch_4'}
    ];

    const channelName = (channel) => {
        dispatch({
            type: 'CHANGE_ROUTE',
            payload: channel
        });
    }

    const selectMenu = (event) => {
        props.handleDrawerToggle(event)
    };

    return(
        <nav>
            <Drawer
                container={container}
                variant="temporary"
                anchor="right"
                open={props.open}
                onClose={(e) => {selectMenu(e)}}
                classes={{paper: classes.drawerPaper}}
                ModalProps={{keepMounted: true}}
            >
                <div className={styles.header_menu}>menu</div>
                <Divider />
                <List>
                    {menuItem.map((item, index) => (
                        <ListItem key={index} onClick={() => channelName(item.channel)} >
                            <Link href="/channel">
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </nav>
    )
};

export default DrawerMenu;