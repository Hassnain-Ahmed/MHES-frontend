import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [credentials, setCredentials] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem("credentials"));
            if (stored) {
                setCredentials(stored);
            }
        } catch (err) {
            setError("Failed to load user data");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { credentials, loading, error };
};
