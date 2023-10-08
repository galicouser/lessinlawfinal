import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
.Homepage{
  height:100%;
  width: 100%;
  position: relative;
}
.LogoImage{
  height:50px;
  border: 1px dashed rgb(255,255,255,0.2);
}

.HeaderHolder{
  width:100%;
  height:80px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;

}
.OpacityBackground{
  position: absolute;
  height: 100%;
  width: 100%;
 background-color: black;
  z-index: -1;
  opacity: 0.5;
}

.NavButtonHolder{
  height: 100%; 
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2%;
}

.NavButtonHolder:hover .BelowLine{
  background-color:white;
  right: 2px;
  
  box-shadow: 1px 1px 1px rgb(255,255,255,0.5);
}
.NavButtonHolder:hover .ArrowIcon{
  color:white;
}
.NavButtonHolder:hover .NavigationButton{
  color:white;
}
.BelowLine{
  height: 1px;
  width:100%;
  background-color: rgb(0,0,0,0.0);
  bottom: 10px;
  position: absolute;
  transition: all 0.5s;
  right:30px;
  box-shadow: 1px 1px 1px rgb(255,255,255,0.05);
}
.HeaderInner{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top:1%;
  padding-bottom:1%;
  width:95%;
}
.NavigationHolder{
  display: flex;
  justify-content: space-evenly;
  width:65%;
  margin-left: 20%;
}
.NavigationButton{
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.1s;
  margin-top: 18px;
  font-weight: 100;
}
.NavigationButton:hover{
  color:#235E88;
}
.PhoneNumber{
  font-size: 45px;
  font-weight: 700;
  color: white;
}
.ArrowIcon{
  color: white;
  margin-left: 10px;

}
.ArrowIcon:hover{
  color: #235E88;
}
.HeroImage{
  height:65vh;
  width: 100%;
  object-fit: cover;
}
.ContactUsHolder{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#F7F7F7;
  
}
.ContactUsInner{
  width:85%;
  height: 100%;
  padding: 2.5%;
}
.TitleText{
  font-size: 25px;
  font-weight: 700;
  text-align: left;
}
.FormHolder{
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.PortraitSegment{
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,255,255,1);
  border-radius: 15px;
  padding: 1%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.InputSegment{
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255,255,255,1);
  border-radius: 15px;
  padding: 1%;
  padding-top: 2%;
  padding-bottom: 5%;
}
.Portrait{
  width: 95%; 
  
  box-shadow: 2px 2px 2px black;
}
.DiscriptionText{
  font-size: 20px;
  text-align: center;
  margin-bottom: 0%;
  margin-top: 5px;
  width: 75%; 
  letter-spacing: 0.5px;
}
.NameTag{
  font-size: 22.5px;
  text-align: center;
  margin-bottom: 0%;
  width: 75%; 
  font-weight: 700;
}
.RedText{
  font-size: 25px;
  font-weight: 1000;
  text-align: center;
  background-color:#0d99cc;
  color: whitesmoke;
  padding: 3%;
  padding-top: 4%;
  
  padding-bottom: 4%;
}
.InputField{
  width: 95%;
  height: 40px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding-left: 2.5%;
  margin: 3.5%;

}
.InputField:focus {
  border: 1px solid gainsboro; /* You can customize this as needed */
  /* Add any other styles you want for the focused state here */
}
.InputFieldMsg{
  width: 95%;
  height: 150px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  padding-left: 2.5%;
  margin: 3.5%;
}
.SubmitButton{
  height: 40px;
  width: 125px;
  background-color: black;
  color:white;
  border:1px solid rgb(0,0,0,0.2);
  box-shadow: 0.5px 0.5px 0.5px black;
  font-size: 15px;
}
.TestimonialsHolder{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-top:5%;
}
.Divider{
  width: 5%;
  height: 5px;
  background-color: blue;
}
.StarHolder{
  width: 20%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.star{
  width: 15px;
  height: 15px;
}
.ReviewHolder{
  width: 75%;
  margin-top: 2.5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.Break{
  margin-bottom: 20px;
}
.PhoneIcon{
  color: white;
  padding: 1%;
  border-radius: 10px;
}
.PhoneIcon:hover{
  cursor: pointer;
}

.ContactNumber{
  display: flex;
  width: 25%;
  justify-content: space-around;
  align-items: center;
}

.Review{
  width: 25%;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 350px;
  padding: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Subtitle{
  font-size: 15px;
  text-align: center;
}

.Title{
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}
.FooterHolder{
  height: 100px;
  width: 100%;
  background-color: rgb(0,0,0,0.8);
}
.StarIcon{
  color:#FFCA18;
}
.dropdownMenu{
  background-color: #f0f0f0;
  position: absolute;
  top:100%;
  width:250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  align-content: center;
  z-index: 150;
}

.MenuItems{
  font-size: 18px;
  padding: 2%;
  height: 45px;
  font-weight: 100;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.MenuItems:hover{
  cursor: pointer;
}
.ActionPrompt{
  position: fixed;
  background-color: #3196DC;
  right: 5%;
  bottom: 5%;
  color: white;
  padding: 1%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ActionPrompt:hover{
  cursor: pointer;
}
.MessageIcon{
  color: white;
}
.PromptMenu{
  position: absolute;
  background-color: white;
  bottom: 105%;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
}
.PromptMenuItems{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.PromptItemText{
  font-size: 16px;
  color:rgb(0,0,0,0.65);

}
.DividerSmall{
  width: 100%;
  opacity: 0.5;
}
.PromptIcon{
  color:#3196DC;
}
.MalpraticeHolder{
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.MalpraticeInner{
  width:90%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}
.TextHolder{
  width: 50%;
}
.ImageTextHolder{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.TextImage{
  width:250px;
  height: 250px;
}
.TextPassage{
    font-size: 18px;
    color:rgb(0,0,0,0.6);
    letter-spacing: 0.5px;
}
.MainHeading{
    font-weight: 700;
}
.IconHolder{
  display:none;
}

@media (max-width: 767px) {
  .NavigationHolder{
    display: none;
  }
  .Subtitle{
  }
  .SidebarDropdown{
    color: white;
  }
  .HeaderInner{
    justify-content: end;
  }
  .ContactNumber{
    display: none;
  }
  .FormHolder{
      flex-direction: column;
      justify-content: center;
  }
  .SidebarHolder{
        display: flex;
      flex-direction: row;
      justify-content: space-between;
      color:white;
      margin-top: 10px;
  }
  .SidebarDropdown{
    color: white;
  }
  .SidebarOption{
    color:white;
    font-size: 20px;
    text-align: center;
    font-weight: 100;
  }
  .SideArrow{
    margin-left: 10px;
  }
  .PortraitSegment{
    width: 95%;
    height: 100%;
  }
  .InputSegment{
    width: 95%;
    margin-top: 5%;
    height: 100%;
  }
  .ReviewHolder{
    width: 95%;
    flex-direction: column;
    margin-bottom: 5%;
  }
  .Review{
    width: 90%;
    margin-top: 2%;
  }
  .TestimonialsHolder{
    height: 100%;
  }
  .StarHolder{
    width: 60%;
  }
  .PromptMenu{
    right: 20%;
  }
  .IconHolder{
    display: unset;
  }
  .MenuIcon{
    display: unset;
    color: white;
  }
  .Review{
    width: 75%;
    padding: 3%;
  }
  .TextHolder{
    width: 100%;
  }
  .MalpraticeInner{
    flex-direction: column;
  }
  .HeaderHolder{
    background-color: black;
  }
}

@media (min-width: 767px) and (max-width: 950px){
  .NavigationHolder{
    display: none;
  }
  .SidebarDropdown{
    color: white;
  }
  .HeaderHolder{
    background-color: black;
  }
  .TextHolder{
    width: 100%;
  }
  .MalpraticeInner{
    flex-direction: column;
  }
  .HeaderInner{
    justify-content: end;
  }
  .Review{
    padding: 3%;
  }
  .ContactNumber{
    display: none;
  }
  .FormHolder{
      flex-direction: column;
      justify-content: center;
  }
  .PortraitSegment{
    width: 95%;
    height: 100%;
  }
  .InputSegment{
    width: 95%;
    margin-top: 5%;
    height: 100%;
  }
  .ReviewHolder{
    width: 95%;
    flex-direction: column;
    margin-bottom: 5%;
  }
  .Review{
    width: 90%;
    margin-top: 2%;
  }
  .TestimonialsHolder{
    height: 100%;
  }
  .StarHolder{
    width: 60%;
  }
  .PromptMenu{
    right: 20%;
  }
  .IconHolder{
    display: unset;
  }
  .MenuIcon{
    display: unset;
    color: white;
  }
}



`;

export default GlobalStyles;