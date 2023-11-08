import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white text-center p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>&copy; {new Date().getFullYear()} Website</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
