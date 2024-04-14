import './App.css';

function Profile(){
  return(
      <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
      />
  );
}

export default Profile;

export function Menu(){
  return(
      <div className="container">
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-list-item">Home</li>
            <li className="menu-list-item">About</li>
            <li className="menu-list-item">Contact us</li>
            <li className="menu-list-item">Products</li>
          </ul>

        </nav>
      </div>
  )
}
