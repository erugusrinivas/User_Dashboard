import React from 'react';
// Footer component renders a sticky footer with a dark background and white text.
function Footer() {
  return (
    // Footer element with Bootstrap classes for styling
    <footer className="sticky-footer text-white bg-dark mt-5">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2024</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
