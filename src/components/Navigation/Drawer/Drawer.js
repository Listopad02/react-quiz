import React from 'react';
import classes from './Drawer.css';

const links = [1, 2, 3]

class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <a>Link {link}</a>
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
            <nav className={cls.join(' ')}>
                <ul>
            { this.renderLinks() }
                </ul>
            </nav>
        )
    }
}

export default Drawer;