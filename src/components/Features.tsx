import styled from "styled-components";

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 80px;
  margin: 25px 0;
`;

const Span = styled.span`
  /* Add styles for span if needed */
`;
const StyledContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.span`
  color: #848484;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <Container>
        <TextContainer>
          <div style={{ lineHeight: "4.15rem" }}>
            <Text>
              Our <Span>Products</Span>
            </Text>
            <Text>Features</Text>
          </div>
        </TextContainer>
        <StyledContainer>
          <div className="flex flex-col">
            <StyledText>
              Revitalize your skin with our herbal-packed serum. Hydrate,
              soften,
            </StyledText>
            <StyledText>
              and diminish fine lines. Unlock youthful radiance naturally.
            </StyledText>
            <StyledText>Experience suppleness and vitality with</StyledText>
            <StyledText>each application.</StyledText>
          </div>
        </StyledContainer>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;
