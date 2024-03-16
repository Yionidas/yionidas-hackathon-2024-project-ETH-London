function TopBar() {
    return (
        <div className="top-bar flex justify-around">
            <div className="profile-info flex">
                <img src="../public/favicon.ico" className="profile-image" />
                <div className="profile-details">
                    <p className="username">John Doe</p>
                    <p className="followers-count">Followers: 1000</p>
                </div>
            </div>
            <div className="action-buttons">
                <button className="btn">Button 1</button>
                <button className="btn">Button 2</button>
            </div>
        </div>
    );
}

export default TopBar;