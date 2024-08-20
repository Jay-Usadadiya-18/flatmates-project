import './FirstPage.css';

const FirstPage = () => {
  return (
    <div className="first-page">
      <h1>FLATMATE.AI</h1>
      <Link to="/login"><button className="btn-primary">Login</button></Link>
      <Link to="/signup"><button className="btn-secondary">Sign Up</button></Link>
    </div>
  );
};
