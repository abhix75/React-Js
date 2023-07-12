//Named export
const Title = () => (
  <a href="/">
    <img
      className="Logo"
      alt="Food_Villa_Logo"
      src="https://scontent.fbbi6-1.fna.fbcdn.net/v/t39.30808-6/300568234_1119074258685043_4997319920694524626_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eeHdQrIHvrEAX_K6ih4&_nc_ht=scontent.fbbi6-1.fna&oh=00_AfBORaTnIBDdJuIMLje038Hq8xBqMLxNmJSf9GfpFyur9Q&oe=64B1FDDD"
    />
  </a>
);

//Header
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//default Export
export default Header;
