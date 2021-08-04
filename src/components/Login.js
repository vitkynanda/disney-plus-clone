import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </span>
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 calc(3.5vw + 10px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background: url("/images/login-background.jpg") center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: "";
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const SignUp = styled.button`
  padding: 15px 0;
  margin: 15px 0;
  background-color: #0063e5;
  border: none;
  color: #f9f9f9;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;
`;
const Description = styled.p`
  text-align: center;
  font-size: 11px;
  letter-spacing: 1.5px;
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  margin-top: 20p;
`;
