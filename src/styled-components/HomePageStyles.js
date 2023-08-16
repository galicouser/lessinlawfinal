import styled from 'styled-components'

export const HomePageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%; 
    margin-top: 70px;

    /* @media (max-width: 768px) {
        background-color: red;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        display: flex;
        background-color: orange;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        background-color: beige;
    }

    @media (min-width: 1281px) {
        background-color: hotpink;

    } */
`

export const VideoBackground = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    opacity: 0.5;
`
export const ContactCard = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .formContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: transparent;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    max-width: 400px;
    padding: 40px;
    }

    form{
        width: 500px;
        padding: 40px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .formGroup{
        margin-bottom: 20px;
    }


    label{
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }


    input,
    textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background: #4caf50;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    &:hover {
        background: #45a049;
    }
    }
`



// const Button = styled.button`
//   display: block;
//   width: 100%;
//   padding: 10px;
//   margin-top: 20px;
//   background: #4caf50;
//   color: #fff;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background: #45a049;
//   }
// `;




export const Container1 = styled.div`
    background-color: #dae1e5;
    border: 4px whitesmoke solid;
    padding: 2rem;
    border-radius: 5%;

    margin-top: 25rem;
    margin-bottom: 8rem;
    font-size: 0.7rem;
    width: 80vh;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 3.2rem;
    height: 60vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }
    &:hover{
        -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow;
    }
    h1{
        font-weight: 200;
    }
    img {
        width: 100%;
        height: 30vh;
        padding: 10px;
        border-radius: 10%;
        object-fit: cover;
        @media (max-width: 768px) {
        }
    }
    @media (max-width: 768px) {
       background-color: transparent;
       border-color: transparent;
        margin-top: 40rem;
        -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);

        margin-bottom: 3rem;
        width: 80%;
        margin-left: 2.5rem;
        height: 70vh;
        img {
            width: 100%;

        }
    }

    /* Tablets and Small Screens */
    @media (min-width: 769px) and (max-width: 1024px) {
    }

    /* Medium-sized Screens */
    @media (min-width: 1025px) and (max-width: 1280px) {
        /* Styles for medium-sized screens */
        img {
            max-width: 100%;
            width: 35vh;
            height: 25vh;
            margin-top: 2rem;
            margin-bottom: 3rem;
            margin-left: 3rem;
            @media (max-width: 768px) {
            }
        }
    }

    /* Large Screens */
    @media (min-width: 1281px) {
        /* Styles for large screens */
    }
`
export const Container2 = styled.div`   
    
    border-radius: 5%;
    margin-top: 2.6rem;
    margin-bottom: 2rem;
    font-size: 0.7rem;
    width: 80vh;

    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 60vh;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none; /* Hide the scrollbar for WebKit-based browsers */
    }

    h1{
        display: grid;
        justify-content: center;
        place-content: center;
        height: 30%;
        color: white;
    }

    &:hover{
        /* -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow; */
    }

    .textHolder{
        position:absolute;
        z-index: 1;
        width: 80vh;
        height: 60vh;
        padding-right: 2rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 3%;
        
    }

    &:hover img{
            filter: blur(2px);
            -webkit-filter: blur(2px);
    }

    img {
        width: 80vh;
        height: 60vh;
        border-radius: 3%;
        position: absolute;
        object-fit: cover;
        
        @media (max-width: 768px) {
        }
    }
    @media (max-width: 768px) {
        background-color: transparent;
        border-color: transparent;
        margin-top: 40rem;
        -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);

        margin-bottom: 3rem;
        width: 80%;
        margin-left: 2.5rem;
        height: 70vh;
        img {
            width: 100%;
        }
    }
    @media (min-width: 481px) and (max-width: 768px) {
        .Container1 {
        }
    }
`
export const Title = styled.div`
    width: 100%;
    background-color: lightblue;
    border-radius: 15%;
    height: 20vh;
    p {
        margin-top: 2rem;
    }
    .titleh1 {
        margin-top: 4rem;
        font-size: 50px;
        margin-right: 10px; /* Adjust the margin as needed */
    }
    .container2 {
        height: 25rem;
        width: 100%;
    }
    img {
        width: 100%;
        max-height: 80%;
        margin-bottom: 5rem; /* Ensure the image doesn't exceed the container height */
    }

    @media (max-width: 768px) {
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 5rem;
        border-radius: 14%;
        p {
        }
        .titleh1 {
            font-size: 50px;
        }
        img {
        }
    }
`

export const Main = styled.div`
    flex: 1;
    padding: 8px;
    height: 55rem;
    ${'' /* border: 5px black solid; */}
    h1 {
        font-size: 32px;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    ul {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 20px;

        li {
            font-size: 18px;
            line-height: 1.5;
        }
    }

    @media (max-width: 768px) {
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
    }
`
export const Main1 = styled.div`
    border: 4px whitesmoke solid;
    display: grid;
    justify-content: center;
    padding: 8px;
    margin-top: 3rem;
    height: 50vh;
    width: 100%;
    background-color: rgba(218, 225, 229, 0.5);
    border-radius: 10px;
    
    @media (min-width: 1025px) and (max-width: 1280px) {
            display: grid;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 10vh;
            margin-top: 0.5rem;

            background-color: transparent;
            border-color: transparent;
            .mainbox1 {
                width: 20rem;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40vh;
                background-color: transparent;
            }
            h1 {
                font-size: 60px;
            }
            p {
                ${
                    '' /* font-size: 14px;
                line-height: 1.5;
                margin-bottom: 20px;
                text-align: center;
                margin-top: 1rem;
                border-radius: 5%;
                line-height: 1.5rem; */
                }
                display: none;
            }
    }


    .button-group {
        display: flex;
        padding: 2rem;
        margin-top: 10%;
    }

    .btn {
        text-transform: uppercase;
        background: #003366;
        color: var(--clr-primary-10);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        font-weight: 400;
        transition: var(--transition);
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
        border-color: transparent;
        width: 100%;
        margin-top: 10px;
        margin-left: 10px;
        @media (max-width: 767px) {
            margin-left: 0px;
            margin-top: 20px;
        }
    }

    .header-2{
        margin-left: 10px;
        text-align: left;
        width: 100%;
        height: 20%;
        font-size: 40px;
        font-weight: 50;
        margin-top: 50px;
        text-align: left;
        vertical-align: middle;
    }

    .mainbox-left{
        width: 50%;
        height: 100%;
    }

    .mainbox1 {
        width: 100%;
        display: flex;
        height: 100%;
        justify-content: center;
        overflow: auto;
        ::-webkit-scrollbar {
            display: none; /* Hide the scrollbar for WebKit-based browsers */
        }
        .textContentHolder {
            width: 50%;
            height: 100%;
            display: grid;
            justify-content: center;
            place-content: center;
            padding: 2rem;
            text-align: center;
        }
        .textContent {
            font-size: 1.2rem;
            text-align: center;
            width: 100%;
            height: 100%;
            font-weight: 100;
        }
    }
    h1 {
        font-size: 50px;
        margin-bottom: 20px;
    }
    h3 {
        font-size: 1.0rem;
        text-decoration: underline;
    }

    .lessintitle {
        font-size: 2.5rem;
    }

    p {
        font-size: 17px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    ul {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 20px;

        li {
            font-size: 18px;
            line-height: 1.5;
        }
    }
    
    @media (max-width: 768px) {
        display: grid;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 40vh;
        margin-top: 0.5rem;

        background-color: transparent;
        border-color: transparent;
        .mainbox1 {
            width: 20rem;
            display: grid;
            justify-content: center;
            align-items: center;
            height: 50vh;

        }
        .button-group {
            display: grid;
        }
        h1 {
            font-size: 60px;
        }
        p {
            ${
                '' /* font-size: 14px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: center;
            margin-top: 1rem;
            border-radius: 5%;
            line-height: 1.5rem; */
            }
            display: none;
        }
    }
`
export const Sidebar = styled.div`
    width: 100%;
    display:flex;
    margin-top: 400px;
    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 768px) {
        display: grid;
    }
`

export const Ad = styled.div`
    width: 50%;
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    p {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .btn-groups{
        display: grid;
        justify-content: center;
    }

    .btn {
        text-transform: uppercase;
        background: #003366;
        color: var(--clr-primary-10);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        font-weight: 400;
        transition: var(--transition);
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
        border-color: transparent;
        width: 200px;
        margin-top: 10px;
        @media (max-width: 767px) {
            margin-left: 0px;
            margin-top: 20px;
        }
    }


    .phone-number{
        padding: 1rem;
        margin-top: 20px;
        background-color: white;
        border-radius: 10px;
        font-size: 20px;
    }


    @media (max-width: 768px) {
        width: 100%;
    }


`
export const InternalTag1 = styled.span`
    font-size: 1.2rem;
    font-weight: 200;
    padding: 2rem;
    color: white;
    height: 70%;
    display: grid;
    justify-content: center;
`
export const InternalTag2 = styled.span`
    font-size: 1.05rem;
    font-weight: 200;
`
export const Testimonials = styled.div`
    border: 4px whitesmoke solid;
    padding: 2rem;
    background-color: #dae1e5;
    overflow: auto;
    max-height: 400px;
    width: 50%;

    .reviewText{
        font-weight: 200;
        font-size: 20px;
        margin-left: 1rem;
        margin-bottom: 1rem;

        &:hover{
            color: navy;
            cursor: pointer
        }
    }

    p {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-left: 1rem;
    }
    .client {
        font-weight: 200;
        font-size: 2rem;
        margin-left: 1.5rem;
    }
    h3 {
        font-size: 1.5rem;
        margin-left: 1.2rem;
        text-decoration: underline;
        font-weight: 500;
    }
    .stars {
        margin-left: 1.2rem;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
    }

    .btn {
        text-transform: uppercase;
        background: #003366;
        color: var(--clr-primary-10);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: grid;
        font-weight: 400;
        transition: var(--transition);
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
        border-color: transparent;
        width: 50px;
        margin-top: 10px;
        @media (max-width: 767px) {
            margin-left: 0px;
            margin-top: 20px;
        }
    }


    @media (max-width: 768px) {
        width: 100%;
    }
`

// Holy Grail Flexbox Layout
export const LayoutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Main} {
        flex: 2;
    }

    ${Sidebar}, ${Ad}, ${Testimonials} {
        flex: 1;
    }

    @media only screen and (max-width: 767px) {
        ${Main}, ${Sidebar}, ${Ad}, ${Testimonials} {
            flex: 1 0 100%;
        }
    }

    @media only screen and (min-width: 768px) {
        ${Main} {
            order: 2;
            margin-right: 20px;
        }

        ${Sidebar} {
            order: 1;
            margin-right: 20px;
        }

        ${Ad} {
            order: 3;
            margin-left: 20px;
        }
    }

    @media only screen and (min-width: 992px) {
        ${Main} {
            margin-left: 20px;
        }

        ${Sidebar} {
            margin-left: auto;
        }
    }
`
export const Button = styled.button`
    background-color: blue; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
        background-color: lightblue;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
export const Button2 = styled.button`
    background-color: blue; /* Green */
    border: none;
    padding: 15px 32px;

    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 26px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-weight: 500px;
    &:hover {
        background-color: lightblue;
    }

    &:active {
        background-color: #4caf50;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`
