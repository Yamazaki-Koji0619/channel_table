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

    const menuItem = [
        {label: 'ABEMA NEWS/', channel: '/channel/ch-0'},
        {label: 'ABEMA SPECIAL', channel: '/channel/ch-1'},
        {label: 'ABEMA GOLD', channel: '/channel/ch-2'},
        {label: 'ABEMA アニメ', channel: '/channel/ch-3'},
        {label: '行動指針', channel: '/channel/ch-4'}
    ];

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
                        <ListItem key={index}>
                            <Link href={item.channel}>
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