import React from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard';
import styled from 'styled-components';
import { useStarWars } from './hooks/useStarWars';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.error};
`;

function App() {
  const { characters, loading, error } = useStarWars();

  if (loading) {
    return <LoadingMessage>Loading characters from a galaxy far, far away...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>Error: {error}</ErrorMessage>;
  }

  return (
    <Container>
      <Title>Star Wars Characters</Title>
      <CharacterGrid>
        {characters.map((character: any) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </CharacterGrid>
    </Container>
  );
}

export default App;
