import React from "react";
import styled, { keyframes } from "styled-components";

// Datos de ejemplo para demostración
const mockData = {
  nombre: "Sushi World",
  tagline: "Sushi fresco todos los días",
  media: {
    logo: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop&crop=center",
  },
  productos: [
    {
      categoria: "ROLLOS",
      items: [
        { nombre: "California Roll", precio: 80 },
        { nombre: "Philadelphia Roll", precio: 110 },
        { nombre: "Spicy Tuna Roll", precio: 95 },
        { nombre: "Dragon Roll", precio: 130 },
      ],
    },
    {
      categoria: "BEBIDAS",
      items: [
        { nombre: "Té Verde", precio: 40 },
        { nombre: "Sake Premium", precio: 85 },
        { nombre: "Ramune Original", precio: 35 },
      ],
    },
  ],
  sucursales: [
    {
      direccion: "Calle Japón 202, Col. Centro, CDMX",
      telefono: "+52 55 1234 5678",
      horario: { lunes_domingo: "11:00 AM - 10:00 PM" },
    },
  ],
  metodos_pago: ["Efectivo", "Tarjeta", "Apple Pay"],
};

function MenuPrinted({ data = mockData }) {
  return (
    <Container>
      <MenuCard>
        <HeaderPattern />
        <FloatingElements>
          <FloatElement
            style={{ top: "20px", right: "30px", animationDelay: "0s" }}
          >
            🍣
          </FloatElement>
          <FloatElement
            style={{ top: "60px", left: "40px", animationDelay: "2s" }}
          >
            🥢
          </FloatElement>
          <FloatElement
            style={{ bottom: "40px", right: "50px", animationDelay: "4s" }}
          >
            🍱
          </FloatElement>
        </FloatingElements>

        {/* HEADER ELEGANTE */}
        <Header>
          <LogoSection>
            <LogoWrapper>
              <LogoImage src={data.media.logo} alt={data.nombre} />
              <LogoGlow />
            </LogoWrapper>
            <RestaurantTitle>{data.nombre}</RestaurantTitle>
            <Subtitle>{data.tagline}</Subtitle>
            <HeaderDivider>
              <DividerLine />
              <DividerDot />
              <DividerLine />
            </HeaderDivider>
          </LogoSection>
        </Header>

        {/* MENÚ PRINCIPAL */}
        <MenuBody>
          {data.productos.map((categoria, idx) => (
            <CategorySection key={idx}>
              <CategoryHeader>
                <CategoryIcon>🍯</CategoryIcon>
                <CategoryTitle>{categoria.categoria}</CategoryTitle>
                <CategoryAccent />
              </CategoryHeader>

              <ItemsGrid>
                {categoria.items.map((item, i) => (
                  <MenuItemCard key={i}>
                    <ItemContent>
                      <ItemName>{item.nombre}</ItemName>
                      <ItemDescription>
                        Preparado con ingredientes frescos
                      </ItemDescription>
                    </ItemContent>
                    <PriceTag>
                      <PriceAmount>${item.precio}</PriceAmount>
                    </PriceTag>
                  </MenuItemCard>
                ))}
              </ItemsGrid>
            </CategorySection>
          ))}
        </MenuBody>

        {/* FOOTER ESTILIZADO */}
        <FooterSection>
          <WavePattern />
          <ContactGrid>
            <ContactCard>
              <ContactIcon>📍</ContactIcon>
              <ContactText>{data.sucursales[0].direccion}</ContactText>
            </ContactCard>
            <ContactCard>
              <ContactIcon>📞</ContactIcon>
              <ContactText>{data.sucursales[0].telefono}</ContactText>
            </ContactCard>
            <ContactCard>
              <ContactIcon>🕐</ContactIcon>
              <ContactText>
                {data.sucursales[0].horario.lunes_domingo}
              </ContactText>
            </ContactCard>
          </ContactGrid>

          <PaymentSection>
            <PaymentTitle>Formas de Pago</PaymentTitle>
            <PaymentBadges>
              {data.metodos_pago.map((metodo, i) => (
                <PaymentBadge key={i}>
                  <PaymentIcon>💳</PaymentIcon>
                  {metodo}
                </PaymentBadge>
              ))}
            </PaymentBadges>
          </PaymentSection>
        </FooterSection>
      </MenuCard>
    </Container>
  );
}

export default MenuPrinted;

// ===== 🎨 ANIMATIONS =====
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// ===== 🎨 STYLED COMPONENTS =====
const Container = styled.div`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  max-width: 800px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  position: relative;
`;

const HeaderPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(135deg, #ff6b6b, #ee5a52, #ff6b6b);
  opacity: 0.1;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatElement = styled.div`
  position: absolute;
  font-size: 1.5rem;
  animation: ${float} 6s ease-in-out infinite;
  opacity: 0.3;
`;

const Header = styled.header`
  padding: 3rem 3rem 2rem;
  text-align: center;
  position: relative;
`;

const LogoSection = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
`;

const LogoImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #ffffff;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const LogoGlow = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  border-radius: 50%;
  animation: ${pulse} 3s ease-in-out infinite;
  z-index: 1;
`;

const RestaurantTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #718096;
  margin: 0.5rem 0 2rem;
  font-style: italic;
  font-weight: 300;
`;

const HeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const DividerLine = styled.div`
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
`;

const DividerDot = styled.div`
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  border-radius: 50%;
`;

const MenuBody = styled.main`
  padding: 0 3rem 2rem;
`;

const CategorySection = styled.section`
  margin-bottom: 3rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
`;

const CategoryIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  letter-spacing: 0.05em;
`;

const CategoryAccent = styled.div`
  flex: 1;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, transparent);
  margin-left: 2rem;
  border-radius: 2px;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const MenuItemCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f7fafc);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ItemContent = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.25rem;
`;

const ItemDescription = styled.p`
  font-size: 0.85rem;
  color: #718096;
  margin: 0;
  font-style: italic;
`;

const PriceTag = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const PriceAmount = styled.span`
  position: relative;
  z-index: 1;
`;

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #2d3748, #4a5568);
  color: white;
  padding: 3rem;
  position: relative;
  overflow: hidden;
`;

const WavePattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  opacity: 0.1;
  clip-path: polygon(0 20px, 100% 0, 100% 100%, 0 100%);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

const ContactIcon = styled.span`
  font-size: 1.25rem;
`;

const ContactText = styled.span`
  font-size: 0.95rem;
  font-weight: 400;
`;

const PaymentSection = styled.div`
  text-align: center;
`;

const PaymentTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  color: #e2e8f0;
`;

const PaymentBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PaymentBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const PaymentIcon = styled.span`
  font-size: 1rem;
`;
