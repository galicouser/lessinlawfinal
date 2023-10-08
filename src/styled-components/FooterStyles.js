import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #333;
    color: #fff;
    height:100%;
    padding: 0.5rem;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    position:relative;
    z-index: 0;
    margin-top:100px;

    .CenteringDiv{
        display:flex;
        justify-content:center;
        align-items:center;
        align-content:center;
    }
    .OptionText{
        font-size:17px;
        font-weight:100;
        color:white;
        padding-top:25%;
    }
    .OptionText:hover{
        cursor:pointer;
    }
    .OptionTextHolder{
        background-color:blue;
    }

    .TagText{
        font-size:50px;
        font-weight:1000;
        color:white;
    }
    .TagLineText{
        font-size:25px;
        font-weight:100;
        color:white;
    }
    .ContactPageOuter{
        position:relative;
    }
    .ContactPageHolder{
        background-color:#13678A;
        height:450px;
        width:350px;
        position:absolute;
        top:-230px;
        right:0px;
        display:flex;
        flex-direction:column;
        align-items:center;
        align-content:center;
        padding-top:2.5%;
    }
    .InputFieldHolder{
        display:flex;
        justify-content:left;
        width:75%;
        margin-top:5%;
    }
    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
        background-size: cover;
        opacity: 1;
        z-index: -1; /* Place the background image behind the content */
        
      }
    .InputIcon{
    }
    .InputTitle{
        
        padding-left:5%;
        font-size:15px;
        font-weight:100;
        color:white;
        
    }
    .EmailInput{
        width:75%;
        height:50px;
        border-radius:5px;
        outline:none;
        border:none;
    }
    .MessageInput{
        width:75%;
        height:50px;
        border-radius:5px;
        outline:none;
        border:none;
    }
    .SubmitButton{
        margin-top:10%;
        width:50%;
        height:12.5%;
        color:white;
        font-size:16px;
        border:6px solid rgba(1, 32, 48, 0.50);
    }
    .SubmitButton:hover{
        outline:none;
        border:none;
        background-color:grey;
        color:white;
    }
    .Title{
        text-align:center;
        font-size:30px;
        color:white;
        font-weight:1000;
    }
    .FooterImage{
        width:100%;
        height:100%;
        opacity:0.50;
    }
    .ImageHolder{
        width:100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        position: relative;
        height:100%;
        .ContactPageHolder{
            background-color:#13678A;
            height:100%;;
            width:100%;
            position:relative;
            top:0px;
            right:0px;
        }
        .TagLineText{
            font-size:15px;
            width:100%;
        }
        .TagText{
            font-size:30px;
            width:100%;
            
        }
        .OptionText{
            
            padding-top:5%;
        }
        .ContactPageHolder{
            padding-bottom:7.5%;
        }
    }
    @media (min-width: 800px) and (max-width: 950px) {
        flex-direction: column;
        position: relative;
        height:100%;
        .ContactPageHolder{
            background-color:#13678A;
            height:100%;;
            width:75%;
            position:relative;
            top:0px;
            right:0px;
        }
        .ContactPageOuter{
            display:flex;
            justfy-content:center;
            align-items:center;
            align-content:center;
            margin-left:22.5%;
        }
        .TagLineText{
            font-size:25px;
            width:100%;
            text-align:center;
            width:75%;
        }
        .TextHolder{
            display:flex;
            width:100%;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        .TagText{
            font-size:30px;
            width:100%;
            margin-top:1%;
            text-align:center;
            
        }
        .OptionText{
            
            padding-top:5%;
            font-size:25px;
        }
        .ContactPageHolder{
            padding-bottom:7.5%;
        }
    }
`

export const FooterLogo = styled.div`
    font-size: 2rem;
    font-weight: bold;
`

export const FooterNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-top: 1rem;
        justify-content: center;
    }
`

export const FooterNavItem = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    margin-left: 2rem;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: #d32626;
    }

    @media (max-width: 768px) {
        margin: 0.5rem;
    }
`
