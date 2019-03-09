import {css} from 'styled-components';

const common = css`
  footer,
  header,
  section {
    float: left;
    width: 100%;
    position: relative;
    padding: 1rem 0;
  }

  .row {
    float: left;
    display: block;
    width: 100%;
    margin: 10px 0;
  }

  .container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 0 60px;
  }

  @media (max-width: 1000px) {
    .container {
      padding: 0 60px;
    }
  }
  @media (max-width: 750px) {
    .container {
      padding: 0 30px;
      max-width: none;
    }
  }
  @media (max-width: 400px) {
    .container {
      padding: 0 20px;
    }
  }

  .card {
    width: 100%;
    padding: 32px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
  }

  .form-wrapper {
    max-width: 530px;
    width: 100%;
    margin-top: 45px;
    padding: 30px;
  }
  .form-wrapper .Button {
    margin-top: 30px;
  }
  .form-wrapper .Header-message {
    display: none;
  }
  .form-wrapper .form-inputs {
    margin-top: 50px;
  }
  @media (max-width: 400px) {
    .form-wrapper {
      margin-top: 0;
    }
    .form-wrapper .Header-message {
      display: block;
    }
  }

  .trooper-bg {
    background-image: url('/static/helmet-light.svg');
    background-repeat: no-repeat;
    background-position: -20% center;
    background-size: 400px;
  }
  @media (max-width: 1050px) {
    .trooper-bg {
      background: none;
    }
  }
`;

export {common};
