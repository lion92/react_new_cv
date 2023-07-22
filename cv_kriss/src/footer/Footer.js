import React, {Component} from 'react';
import "./footer.css"
class Footer extends Component {
    render() {
        return (
            <footer>

                <div className="row">

                    <div className="column">

                        <h4>kriss CLOTILDE</h4>

                        <p>Developpeur FullStack</p>

                    </div>

                    <div className="column">

                    </div>

                    <div className="column">

                        <h4>Git hub</h4>

                        <ul className="social-icons">

                            <li><a href="https://github.com/lion92"><i className="fa-brands fa-github"></i></a></li>

                        </ul>

                    </div>

                </div>

                <p className="copyright">© 2023 All Rights Reserved</p>

            </footer>
        );
    }
}

export default Footer;