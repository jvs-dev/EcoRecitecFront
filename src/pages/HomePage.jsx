import React from "react";
import MailForm from "../components/MailForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import {
  MainContent,
  Header,
  Title,
  Subtitle,
  SectionGrid,
  Card,
  CardTitle,
  CardText,
  PrinciplesList,
  GraphSection,
  GraphTitle,
  GraphPlaceholder,
  GraphImage,
  FormSection,
  CardIcon,
  SectionFlex,
  SectionText,
  ContainerText,
  SectionTitle,
  ContactBtn,
  HeaderBackImage,
  HeaderContent,
  ImageCarouselWrapper,
} from "./styles/HomePageStyles";

const HomePage = () => {
  /* const handleFormSuccess = () => {
    console.log("Formulário enviado com sucesso!"); use para testar formulario localmente
  }; */

  return (
    <MainContent>
      <Header>
        <HeaderBackImage
          src="https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg"
          alt=""
        />
        <HeaderContent>
          <Title>Economia Circular: Um Futuro Sustentável</Title>
          <Subtitle>
            Transformando a maneira como produzimos e consumimos para um planeta
            mais saudável.
          </Subtitle>
        </HeaderContent>
      </Header>
      <SectionFlex>
        <ContainerText>
          <SectionTitle>Economia Circular em Ação</SectionTitle>
          <SectionText>
            Conheça o sistema que está reinventando a forma como produzimos e
            vivemos. A economia circular propõe uma nova lógica de consumo, onde
            os recursos são reaproveitados, os resíduos ganham novos
            significados e os ciclos produtivos se tornam mais inteligentes e
            sustentáveis.
          </SectionText>
          <ContactBtn type="button" onClick={()=> document.getElementById("mailform").scrollIntoView({ behavior: 'smooth' })}>Fale Conosco</ContactBtn>
        </ContainerText>
        <ImageCarouselWrapper>
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={10}
            mousewheel={true}
            navigation={false}
            pagination={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="myImageSwiper"
          >
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="Imagem 1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                alt="Imagem 2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg"
                alt="Imagem 3"
              />
            </SwiperSlide>
          </Swiper>
        </ImageCarouselWrapper>
      </SectionFlex>
      <SectionGrid>
        <Card>
          <CardIcon background="#3dfb7e">
            <ion-icon name="leaf"></ion-icon>
          </CardIcon>
          <CardTitle>O Que É?</CardTitle>
          <CardText>
            A Economia Circular é um modelo de produção e consumo que envolve o
            compartilhamento, leasing, reutilização, reparação, renovação e
            reciclagem de materiais e produtos existentes o máximo possível.
            Dessa forma, o ciclo de vida dos produtos é estendido.
          </CardText>
        </Card>
        <Card>
          <CardIcon background="#6e69dd">
            <i className="bi bi-recycle"></i>
          </CardIcon>
          <CardTitle>Por Que É Importante?</CardTitle>
          <CardText>
            Ela visa reduzir o desperdício, minimizar a poluição, manter
            produtos e materiais em uso e regenerar sistemas naturais. É uma
            alternativa crucial ao modelo linear de "extrair, produzir, usar e
            descartar".
          </CardText>
        </Card>
        <Card>
          <CardIcon background="#fdb740">
            <ion-icon name="flash"></ion-icon>
          </CardIcon>
          <CardTitle>Princípios Chave</CardTitle>
          <PrinciplesList>
            <li>
              <strong>Reduzir:</strong> Minimizar o consumo de recursos e a
              geração de resíduos.
            </li>
            <li>
              <strong>Reutilizar:</strong> Estender a vida útil de produtos e
              componentes.
            </li>
            <li>
              <strong>Reciclar:</strong> Processar materiais descartados para
              criar novos produtos.
            </li>
            <li>
              <strong>Reparar:</strong> Consertar produtos para que possam ser
              usados novamente.
            </li>
            <li>
              <strong>Regenerar:</strong> Devolver recursos biológicos à
              natureza.
            </li>
          </PrinciplesList>
        </Card>
        <Card>
          <CardIcon background="#19b6ff">
            <ion-icon name="rocket"></ion-icon>
          </CardIcon>
          <CardTitle>Vantagens</CardTitle>
          <PrinciplesList>
            <li>
              Redução de custos operacionais ao reutilizar materiais, otimizar
              processos e reduzir o desperdício, a empresa economiza em
              matéria-prima, energia e logística.
            </li>
            <li>
              A economia circular diminui a geração de resíduos, reduz a
              extração de recursos naturais e contribui para a diminuição das
              emissões de carbono.
            </li>
            <li>
              Estimula o design de produtos mais duráveis, modulares e
              recicláveis, incentivando soluções criativas e sustentáveis que
              diferenciam a marca no mercado.
            </li>
          </PrinciplesList>
        </Card>
      </SectionGrid>

      <GraphSection>
        <GraphTitle>Gráfico: Fluxo da Economia Circular</GraphTitle>
        <GraphPlaceholder>
          <GraphImage
            src="/circular-economy-graph.png"
            alt="Gráfico Ilustrativo da Economia Circular"
          />
        </GraphPlaceholder>
      </GraphSection>

      <FormSection id="mailform">
        <MailForm />
      </FormSection>
    </MainContent>
  );
};

export default HomePage;
