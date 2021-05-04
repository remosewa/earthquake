import React from 'react';
import { formatTime } from './utils';
import './Home.css';

const SORT_DIR = {
    ASC: "ASC",
    DESC: "DESC"
};
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            earthquakeData: props.earthquakeData,
            sortField: null,
            sortDir: null
        }
    }
    handleHeaderClick(field) {
        return () => {
            let sortDir = SORT_DIR.ASC;
            if(this.state.sortField === field && this.state.sortDir === SORT_DIR.ASC) {
                sortDir = SORT_DIR.DESC
            }
            const sortedData = this.state.earthquakeData.sort((a, b) => {
                let result = 0;
                if (a.properties[field] < b.properties[field]) {
                    result = -1;
                } else if (a.properties[field] > b.properties[field]) {
                    result = 1;
                }
                return result * (sortDir === SORT_DIR.DESC ? -1 : 1);
            });
            this.setState({
                earthquakeData: sortedData,
                sortDir,
                sortField: field
            });
        }
    }
    render() {
        return (
            <div className="EarthquakeMain">
                <div className="title">{this.props.title}</div>
                <table className="data-table">
                    <tr>
                        <th onClick={this.handleHeaderClick('place')}>Title</th>
                        <th onClick={this.handleHeaderClick('mag')}>Magnitude</th>
                        <th onClick={this.handleHeaderClick('time')}>Time</th>
                    </tr>
                    {this.state.earthquakeData.map(earthquake => (
                        <tr>
                            <td className="row-title"><a href={`/details/${earthquake.id}`}>{earthquake.properties.place}</a></td>
                            <td>{earthquake.properties.mag}</td>
                            <td>{formatTime(earthquake.properties.time)}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Home;