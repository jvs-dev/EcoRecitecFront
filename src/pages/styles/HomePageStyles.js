import styled from 'styled-components';

export const MainContent = styled.main`
  flex-grow: 1;
  padding:  70px 0px 3rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const HeaderBackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderContent = styled.div`
  text-align: center;  
  background: rgba(255, 255, 255, 0.8);  
  z-index: 1;
  padding: 3rem;
  width: 100%;
`;



export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: var(--primary-color);
  line-height: 1.25;
  margin-bottom: 1rem;
  margin-top: ${props => props.marginTop || '0'};
  text-align: center;
  font-family: "Poppins", sans-serif;  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.30rem;
  font-weight: 500;
  color:rgb(33, 38, 44);
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  font-family: "Inter", sans-serif;
`;

export const SectionFlex = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 4.2rem;
  max-width: 1520px;
  background: #fff;
  border-radius: 20px;
  padding: 40px 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 0px;
  }  
  `;

export const SectionTitle = styled.h2`
  font-size: 2.30rem;
  font-weight: 700;
  color:#19b6ff;
  margin: 0px 2rem 1.5rem 0px;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.75rem;
  }
  font-family: "Poppins", sans-serif;
`;

export const SectionText = styled.p`
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.625;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.375rem;
  }
  font-family: "Inter", sans-serif;
`;

export const ContainerText = styled.div`
  padding: 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
   padding: 0px 40px; 
  }
  `;

export const ContactBtn = styled.button`
  border: 0px;
  outline-width: 0px;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #19b6ff;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #19b6ff;
    color: #fff;
    transform: scale(1.02);
    box-shadow: 0 0 0 2px rgb(21, 167, 235);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgb(21, 167, 235);
    border-color: transparent;
  }
  font-family: "Poppins", sans-serif;  
  `;


export const ContainerImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: row;
  }  
  `;

export const SectionImage = styled.img`
  width: calc(60vw / 2);
  object-fit: cover;
  height: auto;
  border-radius: 38px;
  margin: 0px;  
  font-family: "Poppins", sans-serif;
  &:nth-child(1) {
    border-radius: 0px 0px 38px 38px;
    height: 150px;
  }
  &:nth-child(2) {    
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
   &:nth-child(3) {
    border-radius: 38px 38px 0px 0px;
    height: 150px;
  }
  @media (max-width: 768px) {
    &:nth-child(1) {
            border-radius: 0px 38px 38px 0px;
    height: 150px;
  }
  &:nth-child(2) {    
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
   &:nth-child(3) {
    border-radius: 38px 0px 0px 38px;
    height: 150px;
  }
  }  
`;

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 72rem;  
  margin: 4rem auto 4rem auto;
  padding: 0rem 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${props => props.fullWidth && `
    @media (min-width: 768px) {
      grid-column: span 2 / span 2;
    }
  `}
`;

export const CardImage = styled.img`
  margin-bottom: 1.5rem;
  width: 9rem;
  height: 9rem;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const CardIcon = styled.div`
  margin-bottom: 1.5rem;
  width: 9rem;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.background};
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  ion-icon {
    font-size: 4rem;
    color: #fff;
  }
  i {
    font-size: 4rem;
    color: #fff;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  color: #374151;
  line-height: 1.625;
`;

export const PrinciplesList = styled.ul`
  color: #374151;
  line-height: 1.625;
  list-style: disc;
  list-style-position: inside;
  text-align: left;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

export const GraphSection = styled.section`
  width: 100%;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
`;

export const GraphTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

export const GraphPlaceholder = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GraphImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 48rem; 
  height: 400px; 
  margin: 4rem auto; 
  background-color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  overflow: hidden; 

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.25rem;
    color: #1f2937;
    padding: 1rem;
    background-color: #f0fdf4; 
  }

  .swiper-slide img {
    max-width: 80%;
    height: auto;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .swiper-button-prev, .swiper-button-next {
    color: #15803d; 
  }
`;

export const CarouselSlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const CarouselSlideTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #15803d;
`;

export const CarouselSlideText = styled.p`
  font-size: 1rem;
  color: #374151;
`;

export const ImageCarouselWrapper = styled.div`
  width: 100%;
  max-width: 400px; 
  height: 450px; 
  position: relative; 
  border-radius: 20px;
  overflow: hidden; 
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 20px; 
  }
`;