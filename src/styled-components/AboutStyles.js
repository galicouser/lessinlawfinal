import styled from 'styled-components';

export const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;

  .Banner {
    width: 100%;
    height: 400px;
    background-color: #73022C;
    display: flex;

    @media (max-width: 1050px) {
      flex-direction: column; 
      height: auto; 
      margin-top: 70px;
    }
  }

  .Banner-Text {
    width: 30%; 
    text-align: center;
    color: white;
    display: grid;
    font-size: 70px; 
    justify-content: center;
    place-content: center;
    
    @media (max-width: 1050px) {
      order: 2; 
      font-size: 30px;
      width: 100%;
    }
  }

  .Banner-Img {
    width: 70%; 
    height: 100%; 
    display: grid;
    justify-content: center;
    place-content: center;

    @media (max-width: 1050px) {
      order: 1; 
      margin-top: 10px; 
      width: 100%; 
    }
  }


  .Content{
    width: 100%;
    display: flex;

    @media (max-width: 1050px) {
        display: grid;
    }
  }

  .Data{
    width: 70%;
    display: grid;
    padding: 3rem;
    
    padding-left: 10%;

    @media (max-width: 767px) {
        width: 100%;
    }
  }

  .Data-Header{
    font-weight: 100;
    font-size: 30px;
  }

  .Data-SubText{
    font-weight: 400;
    font-size: 20px;
    margin-top: 30px;
  }

  .Data-Paragraph{
    font-weight: 100;
    font-size: 15px;
    margin-top: 30px;
  }

  .Contact-Form{
    width: 30%;
    height: 1500px;
    display: grid;
    padding: 2rem;
    
    padding-left: 5%;

    @media (max-width: 1050px) {
        width: 100%;
    }
  }

  .Contact-Form-NR{
    width: 30%;
    height: 400px;
    display: grid;
    padding: 2rem;
    padding-left: 5%;

    @media (max-width: 1050px) {
        width: 100%;
    }
  }

    .Contact-Box {
        width: 100%;
        height: auto;
        display: grid;
        background-color: #D5D5D5;
        border: 1px solid #B5B5B5; 
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1); 
        gap: 10px; 
    }

    .Contact-Box-Header {
        width: 100%;
        height: 100px;
        display: grid;
        background-color: #73022C;
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem; /* Adjust based on your needs */
        transition: background-color 0.3s; /* Animation */
        justify-content: center;
        place-content: center;
        border-style: solid;
        border-color: #73022C;
    }

    .Contact-Box-Header:hover {
        background-color: #520316; /* Darken color on hover for feedback */
    }

    input[type="text"], 
    input[type="email"], 
    input[type="tel"], 
    textarea, 
    select {
        width: 100%;
        padding: 10px;
        border: 1px solid #B5B5B5;
        margin-top: 5px;
        transition: border 0.3s; /* Animation */
    }

    input[type="text"]:focus, 
    input[type="email"]:focus, 
    textarea:focus, 
    select:focus {
    border: 1px solid #73022C; /* Change border color on focus */
    }

    button {
    width: 100%;
    background-color: #73022C;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 5px;
    transition: background-color 0.3s; /* Animation */
    }

    button:hover {
    background-color: #520316; /* Darken color on hover */
    }

    textarea{
        height: 100px;
    }


    .ImageGrid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px; /* Adjust the gap as needed */
      justify-content: space-between; /* To create three images in each row */
    }

    .ImageCard {
      width: calc(33.33% - 20px); /* Adjust the width and margin as needed */
      text-align: center;
    }

    .ImageCard img {
      max-width: 100%;
      height: auto;
    }

`;
