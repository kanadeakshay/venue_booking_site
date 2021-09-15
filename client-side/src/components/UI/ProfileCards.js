import React from 'react'

const ProfileCard = (props) => {
    const { fullName, email, contactNumber } = props;
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User" className="rounded-circle" style={{ width: '100px' }} />
                    <div className="mt-3">
                        <h4 style={{ textTransform: 'capitalize' }}>{fullName}</h4>
                        <p className="text-secondary mb-1">Email - {email}</p>
                        <p className="text-secondary mb-1">Contact no - {contactNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const UserInfoCard = (props) => {
    const { role, username, createdAt } = props;
    return (
        <div className="card mt-3">
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">User Type</h6>
                    <span className="text-secondary" style={{ textTransform: 'capitalize' }}>{role}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">Username</h6>
                    <span className="text-secondary">{username}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">User since</h6>
                    <span className="text-secondary">{createdAt}</span>
                </li>
            </ul>
        </div>
    )
}


export {
    ProfileCard,
    UserInfoCard
}
