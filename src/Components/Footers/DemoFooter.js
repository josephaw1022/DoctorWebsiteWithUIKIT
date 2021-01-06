
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

export default function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/"
                  
                >
                  Whiteaker Productions
                </a>
              </li>
              <li>
                <a
                  href="/"
                 
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/"
                 
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            
          </div>
        </Row>
      </Container>
    </footer>
  );
}


