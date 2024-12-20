import { useState, useEffect, useCallback } from 'react';
import { getCharacters } from "../services/api";

export const useStarWars = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCharacters = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getCharacters();
            setCharacters(response);
        } catch (error: any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return { characters, loading, error };
};