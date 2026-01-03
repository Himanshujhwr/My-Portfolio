import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 2rem;
`;

export const Image = styled.img`
  display: block;
  width: 180px; /* Increase size */
  height: 180px; /* Ensure proportional scaling */
  margin: 0 auto;
  margin-bottom: 0.5rem;
  padding: 0;
  border-radius: 50%; /* Keeps it circular */
  object-fit: cover; /* Ensures the image fills the space properly */
`;
export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
`;
