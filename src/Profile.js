import './Profile.css';
function Profile(props) {
    return (
    <div className="profile-container">
        <div className="title">Profile</div>
        <div className="profile-content">
            <div className="profile-image">
                <img height="200" src={props.profile.avatarImage} alt="Profile"/>
            </div>
            <div className="profile-table-container">
                <table>
                    <tr>
                        <th>First name</th>
                        <td>{props.profile.firstName}</td>
                    </tr>
                    <tr>
                        <th>Last name</th>
                        <td>{props.profile.lastName}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{props.profile.phone}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{props.profile.email}</td>
                    </tr>
                    <tr>
                        <th>Bio</th>
                        <td>{props.profile.bio}</td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
    );
}

export default Profile;