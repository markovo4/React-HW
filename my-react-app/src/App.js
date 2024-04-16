import './App.css';

export function Profile(){
    const avatar = 'https://i.imgur.com/MK3eW3As.jpg';
    const description = 'Katherine Johnson';
  return(
      <img
          src={avatar}
          alt={description}
      />
  );
}



export function Menu(){
    const name = 'Great Scientist';
  return(
      <div className="container">
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-list-item">Home</li>
            <li className="menu-list-item">About</li>
            <li className="menu-list-item">Contact us</li>
            <li className="menu-list-item">Products</li>
          </ul>
            <h1>{name}'s work</h1>
        </nav>
      </div>
  )
}

function Hero({title, description}){
    return(
        <ul>
            <li>{title}</li>
            <li>{description}</li>
            <li>{title}</li>
            <li>{description}</li>
        </ul>
    )
}

export function HeroSection(){
    return(
        <div>
            <Hero
            title={"Hello World"}
            description={'My name is Vlad!'}
            />
        </div>
    )
}


const today = new Date();
function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

export function FormatDate(){
    return(
        <h1>Today's day is {formatDate(today)}</h1>
    );
}
