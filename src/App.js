import logo from './logo.svg';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">

      <header className="header">
        <div className='grid-wrapper'>
            <div className='aqua'>
              <h1>{"Paradigm \nShift"}</h1>
              <p>A FREE RESPONSIVE SITE TEMPLATE DESIGNED BY <a href="https://twitter.com/ajlkn">@AJLKN</a> / <a href="https://html5up.net/">HTML5 UP</a></p>
            </div>
            <div className="img-wrapper main-img">
            <img src="https://i.imgur.com/2fX7HSI.png"></img>
          </div>
        </div>
      </header>
      
      <main className='main'>
        <div className='grid-wrapper'>
          <div className='aqua'>
            <h2>{"MAGNA SED NULLAM NISL ADIPISCING"}</h2>
          </div>
          <div className='description'>
            <p> <span className="bold">Lorem ipsum dolor</span> sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
              <img className="landscape-img" src="https://i.imgur.com/oormvQK.png"></img>
          </div>
          <div className='aqua'>
            <h2>{"FEUGIAT CONSEQUAT TEMPUS ULTRICES"}</h2>
          </div>
          <div className='description'>
            <p> <span className="bold">Etiam tristique libero</span> eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.</p>
            <div className="features">
              <div className='flex-container'><i className='fa fa-heart' /> <span>Consequat tempus</span></div>
              <div className='flex-container'><i className='fa fa-heart' /> <span>Libero nullam</span></div>
              <div className='flex-container'><i className='fa fa-heart' /> <span>Lorem ipsum dolor</span></div>
              <div className='flex-container'><i className='fa fa-heart' /> <span>Etiam adipiscing</span></div>
              <div className='flex-container'><i className='fa fa-heart' /> <span>Blandit condimentum</span></div>
              <div className='flex-container'><i className='fa fa-heart' /> <span>Nibh amet venenatis</span></div>
            </div>
            <p> Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing</p>
          </div>
          <div className='aqua'>
            <h2>ULTRICES ERAT MAGNA SED CONDIMENTUM</h2>
          </div>
          <div className='description'>
            <p> <span className="bold">Integer mollis egestas</span> nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
          </div>
          <div className='description wide-aqua'>
            <h3>ERAT ALIQUAM</h3>
            <p>Vehicula ultrices dolor amet ultricies et condimentum. Magna sed etiam consequat, et lorem adipiscing sed dolor sit amet, consectetur amet do eiusmod tempor incididunt ipsum suspendisse ultrices gravida.</p>
          </div>
          <div className='image-grid'>
            <img className='grid-image' src="https://i.imgur.com/xXrPZOm.jpg" />
            <img className='grid-image' src="https://i.imgur.com/NNvv2m7.png" />
            <img className='grid-image' src ="https://i.imgur.com/SVMSO4J.png" />
            <img className='grid-image' src ="https://i.imgur.com/2ojWVWB.jpg" />
          </div>
          <div className='description wide-aqua'>
            <h3>NISL CONSEQUAT</h3>
            <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.</p>
          </div>
          <div className='image-grid'>
            <img className='grid-image' src="https://i.imgur.com/D7VDbxc.jpg" />
            <img className='grid-image' src ="https://i.imgur.com/pIyFUaX.png" />
            <img className='grid-image' src="https://i.imgur.com/hn021TN.jpg" /> 
          </div>
          <div className='description wide-aqua'>
            <h3>LOREM GRAVIDA</h3>
            <p>Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore. ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis.</p>
          </div>
          <div className='image-grid reverse'>
            <img className='grid-image' src="https://i.imgur.com/o2SlUpk.jpg" />
            <img className='grid-image' src ="https://i.imgur.com/84OGli4.jpg" />
            <img className='grid-image' src="https://i.imgur.com/9wqCbo7.jpg" /> 
          </div>
          <div className='aqua'>
            <h2>DUIS SED ADPISCING VEROEROS AMET</h2>
          </div>
          <div className='description'>
            <p> <span className="bold">Proin tempus feugiat</span> sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.</p>
          </div>
          <div className='button-wrapper'>
            <button className='btn primary-btn'>Get started</button>
            <button className='btn secondary-btn'>Learn more</button>
          </div>
          <div className='aqua fix-bg'>
            <h2>GET IN TOUCH</h2>
          </div>
          <div className='description'>
            <p> <span className="bold">Auctor commodo</span> interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.</p>
          <form>
            <div className='input-wrapper'>
              <input type="text" placeholder='Name' name="name"/>
              <input type="email" placeholder='Email' name="email"/>
            </div>
            
            <textarea placeholder='Message' name="message"/>
            <button className='btn primary-btn'>Send message</button>
          </form>
          </div>
        </div>
      </main>
      <footer>
        <address>
          <ul className='contact-info'>
            <li><h4>Email</h4></li>
            <li><a>Fakeemail@email.email</a></li>
            <li><h4>Phone</h4></li>
            <li><a>(000) 000-0000</a></li>
            <li><h4>Address</h4></li>
            <li>Fake Address 42</li>
            <li><h4>Elsewhere</h4></li>
            <li>
              <div className='flex-container'>
                <a><i className='fa fa-twitter' /></a>
                <a><i className='fa fa-facebook' /></a>
                <a><i className='fa fa-instagram' /></a>
                <a><i className='fa fa-linkedin' /></a>
                <a><i className='fa fa-github' /></a>
                <a><i className='fa fa-heart' /></a>
              </div>
            </li>
          </ul>
        </address>
      </footer>
    </div>
  );
}

export default App;
