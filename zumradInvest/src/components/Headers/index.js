import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import {
    ContainerBox,
    Container,
    TextBox,
    Text,
    BoxA,
    BoxTwo,
    Brand,
    MenuA,
    MenuButton,
    DropDownMenu,
    IconBox,
    Icon,
    A,
    BUTTON,
    BoxIcon,
    DropMenuLink,
} from "./style";
import "boxicons";
import cart from "../../assets/icons/cart-solid-24 (1).png";
import heart from "../../assets/icons/home-heart-regular-24.png";
import user from "../../assets/icons/user-solid-24.png";
import img from "../../assets//images/down1.jpg";

function Headers() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ContainerBox className={colorChange ? "navbar colorChange" : "navbar"}>
            <Container >
                <BoxA >
                    <Link to="/" >
                        <Brand >
                            <box-icon name="sketch"
                                type="logo"
                                color="#087f10"
                                size="80px" >
                            </box-icon>
                        </Brand>
                    </Link>
                    <MenuA>
                        <MenuButton >
                            <BUTTON >
                                Каталог <box-icon type="solid"
                                    name="chevron-down"
                                    color="#fff" >
                                </box-icon>
                            </BUTTON>
                        </MenuButton>
                        <DropDownMenu style={
                            { backgroundImage: `url(${img})` }} >
                            <Link to="/Office"
                                style={
                                    { textDecoration: "none" }} >
                                <A> Оффисни кресло </A>
                            </Link>
                            <Link to="/Detiski"
                                style={
                                    { textDecoration: "none" }} >
                                <A> Детиски кресло </A>
                            </Link>
                            <Link to="/Teatralni"
                                style={
                                    { textDecoration: "none" }} >
                                <A> Театирални кресло </A>
                            </Link>
                            <Link to="/Masajni"
                                style={
                                    { textDecoration: "none" }} >
                                <A> Масажни кресло </A>
                            </Link>
                        </DropDownMenu>
                    </MenuA>
                    <Link style={
                        { textDecoration: "none" }}
                        to="/Login" >
                        <TextBox >
                            <Text > Гарантия
                            </Text>
                        </TextBox>
                    </Link>
                    <Link style={
                        { textDecoration: "none" }}
                        to="/Publication" >
                        <TextBox>
                            <Text> Публикации </Text>
                        </TextBox> </Link>
                    <Link style={
                        { textDecoration: "none" }}
                        to="/VidioBlog" >
                        <TextBox>
                            <Text> Видеоблог </Text>
                        </TextBox>
                    </Link>
                    <Link to="/ContactA"
                        style={
                            { textDecoration: "none" }} >
                        <TextBox >
                            <Text > Контакты </Text>
                        </TextBox>
                    </Link>
                </BoxA>
                <BoxTwo>
                    <IconBox>
                        <Link to="/LikeDom"
                            style={
                                { textDecoration: "none" }} >
                            <Icon >
                                <BoxIcon src={heart}
                                /> </Icon>
                        </Link>
                    </IconBox>
                    <IconBox>
                        <Link style={
                            { textDecoration: "none" }}
                            to="/Karzina" >
                            <Icon>
                                <BoxIcon src={cart}
                                /> </Icon>
                        </Link>
                    </IconBox>
                    <IconBox>
                        <React.Fragment>
                            <Box sx={
                                {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }
                            }>
                                <Tooltip title="Account settings"
                                    style={
                                        { margin: 0, }} >
                                    <IconButton onClick={handleClick}
                                        size="small"
                                        sx={
                                            { ml: 1 }}
                                        aria-controls={open ? "account-menu" : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? "true" : undefined} >
                                        <Avatar sx={
                                            { width: 24, height: 24, }} > N </Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <DropMenuLink>
                                <Menu anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={
                                        {
                                            elevation: 0,
                                            sx: {
                                                overflow: "visible",
                                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                                mt: 1.5,
                                                "& .MuiAvatar-root": {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                "&:before": {
                                                    content: '""',
                                                    display: "block",
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: "background.paper",
                                                    transform: "translateY(-50%) rotate(45deg)",
                                                    zIndex: 0,
                                                },
                                            },
                                        }
                                    }
                                    transformOrigin={
                                        { horizontal: "right", vertical: "top" }}
                                    anchorOrigin={
                                        { horizontal: "right", vertical: "bottom" }} >
                                    <MenuItem >
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <Link to="/AdminHome"
                                        style={
                                            { textDecoration: "none", color: '#000' }} >
                                        <MenuItem >
                                            <Avatar /> Adminka
                                        </MenuItem>
                                    </Link>
                                    <Divider />
                                    <MenuItem >
                                        <ListItemIcon >
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem >
                                        <ListItemIcon >
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem >
                                        <ListItemIcon >
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </DropMenuLink>
                        </React.Fragment>
                    </IconBox>
                </BoxTwo>
            </Container>
        </ContainerBox>
    );
}
export default Headers;