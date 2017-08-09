import React, { Component, PropTypes } from 'react';
import Wallpaper from './Wallpaper';
import Logo from './Logo';
import Form from "./Form";
import ButtonSubmit from "../ui/ButtonSubmit";
import Login from "./Login";


export default class Main extends Component {
    render() {
        return (
            <Wallpaper>
                <Logo />
                {/*<Form/>*/}
                <Login/>
            </Wallpaper>
        );
    }
}
