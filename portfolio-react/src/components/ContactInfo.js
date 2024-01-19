import React from 'react';
import { Container, Overlay } from 'react-bootstrap';

const ContactInfo = () => {

    const getEmailLink = (event) => {
        console.log(event.target)
        const email = "jacobyaws@gmail.com";
        navigator.clipboard.writeText(email);

    }
    return (
<Container id="contacts">
        <h3 >Contact</h3>
        <Container>
          <ul id="contact-list">
            <li><a href="https://github.com/JacobYaws">Github: Link</a></li>
            <li><a href="www.linkedin.com/in/jacob-yaws">LinkedIn: Link</a></li>
            <li><a href="mailto:jacobyaws@gmail.com">jacobyaws@gmail.com</a></li>
            {/* <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button> */}
          </ul>
        </Container>
      </Container>
      )};

export default ContactInfo;