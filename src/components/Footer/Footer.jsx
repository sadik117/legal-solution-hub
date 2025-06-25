import { CopyrightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-800 text-white p-10 mt-5 mb-3 w-11/12 mx-auto rounded-md">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/aboutUs" className="link link-hover">
          About us
        </Link>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/sadiksourov117" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/sadiksourov11" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.271V1.729C24 .774 23.21 0 22.23 0zM7.07 20.452H3.56V9h3.51v11.452zM5.316 7.548c-1.12 0-2.03-.92-2.03-2.05 0-1.13.91-2.05 2.03-2.05s2.03.92 2.03 2.05c0 1.13-.91 2.05-2.03 2.05zM20.452 20.452h-3.51v-5.605c0-1.337-.026-3.058-1.864-3.058-1.864 0-2.15 1.455-2.15 2.958v5.705h-3.51V9h3.37v1.56h.048c.47-.89 1.61-1.83 3.315-1.83 3.546 0 4.2 2.332 4.2 5.362v6.36z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/sadiksourov11/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <p className="flex text-zinc-400 mt-2">
          {" "}
          <CopyrightIcon className="w-3 mr-0.5"></CopyrightIcon> Developed By Sadik
          Sourov ; 2025{" "}
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
