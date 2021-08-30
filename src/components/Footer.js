import React from "react";
import styled from "styled-components/macro";

const StyledFooter = styled.footer`
  background: var(--dark-moderate-cyan);
  color: var(--dark-desaturated-cyan);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;

  & > img {
    padding-top: 4em;
    width: 170px;

    // fill: var(--dark-desaturated-cyan); /* can't get this to work!! */
  }

  & ul {
    list-style-type: none;
    display: flex;
    padding: 3em 0;
    max-width: 767px;
    margin: 0 auto;
  }

  & a {
    text-decoration: none;
    padding: 0.75em;
    color: var(--dark-desaturated-cyan);
    font-family: "Barlow", sans-serif;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
      <ul class="footer__menu">
        <li>
          <a class="footer__menu-link" href="#">
            About
          </a>
        </li>
        <li>
          <a class="footer__menu-link" href="#">
            Services
          </a>
        </li>
        <li>
          <a class="footer__menu-link" href="#">
            Projects
          </a>
        </li>
      </ul>
      <ul class="footer__social">
        <li>
          <a href="#">
            <img
              class="footer__social-link"
              src="./images/icon-facebook.svg"
              alt="Facebook link"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="footer__social-link"
              src="./images/icon-instagram.svg"
              alt="Instagram link"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="footer__social-link"
              src="./images/icon-twitter.svg"
              alt="Twitter link"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              class="footer__social-link"
              src="./images/icon-pinterest.svg"
              alt="Pinterest link"
            />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
