import React from 'react';
import './sidenav.css';

class SideNav extends React.Component{
    render(){
        return(
            <div className="sidenav">
                <span>
                    <h3>POPULAR TAGS</h3>
                    <table>
                        <tr>
                            <td><a href="#">Horror Games</a></td>
                            <td> <a href="#">Multiplayer</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Visual Novels</a></td>
                            <td> <a href="#">HTML5 Games</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Simulation</a></td>
                            <td> <a href="#">macOs Games</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Roguelike</a></td>
                            <td> <a href="#">Linux Games</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Browse All Tags..</a></td>
                        </tr>
                    </table>
                </span>
                <span>
                    <h3>BROWSE GAMES</h3>
                    <table>
                        <tr>
                            <td><a href="#">Games</a></td>
                            <td> <a href="#">Game assets</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Tools</a></td>
                            <td> <a href="#">Soundtracks</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Physical Games</a></td>
                            <td> <a href="#">Comics</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Books</a></td>
                            <td> <a href="#">Randomizer</a></td>
                        </tr>
                    </table>
                </span>
                <span>
                    <h3>GAMES BY PRICE</h3>
                    <table>
                        <tr>
                            <td><a href="#">On Sale</a></td>
                            <td> <a href="#">Free games</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">With demo</a></td>
                            <td> <a href="#">Top Sellers</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">$5 or less</a></td>
                            <td> <a href="#">$15 or less</a></td>
                        </tr>
                    </table>
                </span>
                <span>
                    <h3>BLOG NEWS</h3>
                    <p><a href="#">News 1</a></p>
                    <p><a href="#">News 2</a></p>
                    <p><a href="#">News 3</a></p>
                    <p><a href="#">News 4</a></p>
                    <p><a href="#">News 5</a></p>
                    <p><a href="#">News 6</a></p>
                </span>
            </div>
        )
    }
}

export default SideNav;