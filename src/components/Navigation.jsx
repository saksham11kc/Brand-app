import NikeLogo from "../../public/brand_logo.png";
function Navigation() {
  return (
    <>
      <nav className="poppins-extralight container">
        <div className="logo ">
          <img src={NikeLogo} alt="nike logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </>
  );
}
export default Navigation;
