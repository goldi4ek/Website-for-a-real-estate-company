import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
          <div>
              <h1>Easybud</h1>
              <p>We have unruliness for any relish</p>
          </div>
            <div>
                <a href="https://www.facebook.com/">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://www.youtube.com/">
                    <i className="fa-brands fa-youtube"></i>
                </a>

                <a href="https://www.twitter.com/">
                    <i className="fa-brands fa-twitter"></i>
                </a>

                <a href="https://www.telegram.org/">
                    <i className="fa-brands fa-telegram"></i>
                </a>
            </div>
          </div>

        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Media</a>
                <a href="/">News</a>
                <a href="/">Sales</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/contact">Support</a>
                <a href="/contact">Troubleshooting</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms of Service</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Privacy Policy</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">License</a>
            </div>
        </div>

    </div>
  );
};

export default Footer;
