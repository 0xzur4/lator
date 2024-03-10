import styled, { keyframes, createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";


/* Stylenya bisa digunakan untuk komponen lainnya */
//////////////////////////////

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => GantiBackground(props.isDarkMode)};
    color: ${(props) => GantiText(props.isDarkMode)};
  }
  `;

/* style untuk ganti mode gelap/terang */
const GantiBackground = (isDarkMode) => (isDarkMode ? "#0C121C" : "#fff");
const GantiText = (isDarkMode) => (isDarkMode ? "#fff" : "#0C121C");

/* style untuk app.jsx */
export const Container = styled.div`
width: 100%;
position: relative;
`;
//////////////////////////////
/* style untuk navbar */
export const Navigasi = styled(Link)`
font-family: 'Poppins', sans-serif;
display: flex;
flex: wrap;
color: #0C121C;
font-size: 15px;
font-weight: 600;
line-height: 20px;
margin-right: 20px;
padding: 0px 5px;
transition: color 0.2s ease-in-out 0s;
&:hover {
  color: #94cde4;
}
`;
export const NavHeader = styled.header`
position: fixed;
width: 100%;
background: #fff;
transition: .5s;
z-index: 2;
filter: opacity(0.9);
`;
//////////////////////////////
/* style untuk body */
export const ImgFloat = keyframes`
  50% {
      transform: translateY(10px);
  }
`;

export const Main = styled.main`
padding-inline: 10vw;
`;
export const FeaturedBox = styled.div`
position: relative;
display: flex;
flex-direction: column-reverse;
justify-content: center;
align-content: center;
min-height: 100vh;
padding: 0 5px;
padding-top: 50px;
@media (min-width: 700px) {
  flex-direction: row;
  padding: 0 30px;
  padding-top: 90px;
}
`;
export const FeaturedText = styled.div`
position: relative;
display: flex;
justify-content: center;
align-content: center;
min-height: 75vh;
flex-direction: column;
width: 90%;
padding-left: 60px;
@media (min-width: 768px) {
  width: 100%;
  padding-left: 0;
}
`;
export const FeaturedName = styled.p`
font-size: 16px;
font-weight: 600;
display: inline-block;
background-color: #514738;
margin-block: 18px;
border-radius: 5px;
@media (max-width: 1200px){
  font-size: 14px;
}
`;
export const Name = styled.h1`
font-size: 30px;
font-weight: 600;
color: var(--text-color-second);
margin-block: 5px;
@media (max-width: 1200px){
  font-size: 20px;
}
`;

export const Paragraf = styled.div`
@media (max-width: 1200px){
font-size: 12px;
margin-bottom: 15px;
color: var(--text-color-second);
}
@media (min-width: 700px) {
  font-size: 15px;
}
`;
export const SocialIcons = styled.div`
display: flex;
margin-top: 1em;
gap: 30px;
@media (max-width: 1200px){
  gap: 20px;
}
`;
export const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
cursor: pointer;
&:hover {
  color: var(--first-color);
}
`;
export const FeaturedImage = styled.div`
display: flex;
justify-content: center;
align-content: center;
min-height: 50vh;
width: 100%; /* Take full width on mobile */
`;
export const Image = styled.div`
margin: auto;
display: flex;
justify-content: center;
align-content: center;
width: 200px;
height: 200px;
animation: ${ImgFloat} 7s ease-in-out infinite;
@media (min-width: 700px) {
  width: 280px;
  height: 280px;
  margin: 100px 100px;
}
`;
export const Gmb = styled.img`
margin: 70px 0;
width: 100%;
height: 100%;
border-radius: 50%;
object-fit: cover;
@media (min-width: 700px) {
    margin: auto;
}
`;
//////////////////////////////