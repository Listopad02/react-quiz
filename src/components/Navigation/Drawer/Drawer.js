import React from 'react';
import classes from './Drawer.css';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Drawer extends React.Component {
    clickHandler = () => {
        this.props.onClose();
    }

    renderLinks(links) {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <NavLink to={link.to} 
                             exact={link.exact} 
                             className={({ isActive }) => isActive ? classes.active : classes.inactive}
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

        const links = [
            {to: '/', label: 'Tests list', exact: 'true'}
        ]
        
        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create new test', exact: 'false'})
            links.push({to: '/logout', label: 'Exit', exact: 'false'})
        } else {
            links.push({to: '/auth', label: 'Authorization', exact: 'false'})
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks(links) }
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
            </React.Fragment>
        )
    }
}

export default Drawer;