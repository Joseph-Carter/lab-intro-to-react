import ProfilePicture from '../profile.png'

const UserProfile = () => {
    return (
        <div className='userProfile'>
            
            <img src={ ProfilePicture } alt='' ></img>
            <div className='info'>
                <h2>John Wick</h2>
                <h3>Special Ops</h3>
                <p>lorem Ipsum</p>
            </div>
            
        </div>
    );
}

export default UserProfile;