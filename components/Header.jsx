import React, { useState, useCallback } from 'react' ;
import { makeStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import TextInput from './Items/TextInput';
import DrawerMenu from './Items/DrawerMenu';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuBar: {
        backgroundColor: "#fff",
        color: "#444"
    },
    toolBar: {
        margin: "0 auto",
        maxWidth: 1024,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    iconButtons: {
        margin: "0 0 0 auto"
    },
    textMargin: {
        margin: "4px"
    }
})

const Header = () => {
    const classes = useStyles();

    const [keyword, setKeyword] = useState('');
    const [open, setOpen] = useState(false);

    const inputKeyword = useCallback(event => {
        setKeyword(event.target.value)
    },[setKeyword]);

    const handleDrawerToggle = useCallback((event) => {
        if(event.type === 'keydown' && (event.key === 'Tab' || event.key ==='Shift')){
            return;
        }
        setOpen(!open)
    },[setOpen, open]);

    return(
        <div className={classes.root}>
            <AppBar potition="fixed" className={classes.menuBar}>
                <ToolBar className={classes.toolBar}>
                    <p>山﨑 孝二</p>
                    <div>
                        <TextInput
                            fullWidth={false} label={"タイトル入力"} multiline={false} required={false} 
                            rows={1} type={"text"} style={classes.textMargin} onChange={inputKeyword}
                        />
                        <IconButton >
                            <SearchIcon />
                        </IconButton>
                        <IconButton onClick={(event) => handleDrawerToggle(event)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
            <DrawerMenu open={open} handleDrawerToggle={handleDrawerToggle} />
        </div>
    )
};

export default Header;