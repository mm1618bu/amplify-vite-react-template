import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Harklet Media, LLC</div>
          <ul className="nav-links">
            <li><a href="#clubhouse">Clubhouse</a></li>
            <li><a href="#infivox">Infivox</a></li>
            <li><a href="#harklet-radio">Harklet Radio</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Welcome to Our Suite of Businesses</h1>
          <p>Explore the variety of services we offer, from a social voice platform to a news website and an online radio station.</p>
        </div>
      </header>
    <div className='bulk-content'>
      <section id="clubhouse" className="business-section">
        <h2>Clubhouse</h2>
        <p>Clubhouse is an online community platform designed to help people collaborate, share ideas, and network with like-minded individuals. Whether you’re looking for mentorship or just want to discuss industry trends, Clubhouse brings people together to spark creativity and innovation.</p>
        <button className="cta-button">Learn More About Clubhouse</button>
      </section>

      <section id="infivox" className="business-section">
        <h2>Infivox</h2>
        <p>Infivox is your go-to source for global news. We provide up-to-date, reliable, and engaging content on a variety of topics from around the world. With our team of experienced journalists, we aim to deliver news that matters, with insightful analysis and fresh perspectives.</p>
        <button className="cta-button">Read Our Latest Stories</button>
      </section>

      <section id="harklet-radio" className="business-section">
        <h2>Harklet Radio</h2>
        <p>Harklet Radio is an online radio station offering a wide range of shows including music, podcasts, and live discussions. Tune in to hear from diverse voices and exciting topics that span across entertainment, culture, tech, and more.</p>
        <button className="cta-button">Start Listening Now</button>
      </section>
    </div>
    </div>
  );
}

export default App;
