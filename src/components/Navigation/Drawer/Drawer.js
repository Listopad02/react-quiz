import React from 'react';
import classes from './Drawer.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

const links = [
    {to: '/', label: 'Tests list', exact: 'true'},
    {to: '/auth', label: 'Authorization', exact: 'false'},
    {to: '/quiz-creator', label: 'Create new test', exact: 'false'}
];

class Drawer extends React.Component {
    clickHandler = () => {
        this.props.onClose();
    }

    renderLinks() {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <NavLink to={link.to} exact={link.exact} className={classes.active}
                             onClick={this.clickHandler}>{link.label}</NavLink>
                </li>
            )
        })
    }

    render () {
        const cls = [classes.Drawer];

        if (!this.props.isOpen) {
            cls.push(classes.close);
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer;