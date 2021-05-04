import './Detail.css';
import { formatTime } from './utils';

function Detail(props) {
    return (
    <div className="detail-container">
        <div className="detail-content">
            <div className="detail-table-container">
                <table>
                    <div className="title">{props.detail.title}</div>
                    <tr>
                        <th>Title</th>
                        <td>{props.detail.title}</td>
                    </tr>
                    <tr>
                        <th>Magnitude</th>
                        <td>{props.detail.mag}</td>
                    </tr>
                    <tr>
                        <th>Time</th>
                        <td>{formatTime(props.detail.time)}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{props.detail.status}</td>
                    </tr>
                    <tr>
                        <th>Tsunami</th>
                        <td>{props.detail.tsunami}</td>
                    </tr>
                    <tr>
                        <th>Type</th>
                        <td>{props.detail.type}</td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
    );
}

export default Detail;