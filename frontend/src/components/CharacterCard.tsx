import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  gap: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CharacterImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Detail = styled.p`
  margin: 0;
  font-size: 16px;
  color: #666;
`;

const CharacterCard = ({ character }: { character: any }) => {
    return (
        <Card>
            <CharacterImage src={character.image} alt={character.name} />
            <Info>
                <Name>{character.name}</Name>
                <Detail>Species: {character.species}</Detail>
                <Detail>Gender: {character.gender}</Detail>
                <Detail>Height: {character.height}m</Detail>
                {character.homeworld && (
                    <Detail>Homeworld: {character.homeworld}</Detail>
                )}
            </Info>
        </Card>
    );
};

export default CharacterCard;
