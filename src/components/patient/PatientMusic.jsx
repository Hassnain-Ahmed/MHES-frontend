import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function PatientMusic() {
    const [musics, setMusics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getMusic = async () => {
        try {
            const { data } = await axios.get('/api/youtube/v3/search', {
                params: {
                    part: 'snippet',
                    q: 'calming music for patients', // Optimized search query
                    type: 'video',
                    maxResults: 10,
                    key: 'AIzaSyDU33npPfvEqra8oFq78Y-IM1KWUk_Gals', // Ensure to secure this key
                    order: 'viewCount' // Optional: can help with getting more popular results
                },
            });
            setMusics(data.items);
        } catch (error) {
            console.error('Error fetching music data: ', error);
            setError('Failed to fetch music. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMusic();
    }, []);

    return (
        <div className="p-5">
            {loading && <p>Loading music...</p>}
            {error && <p className="text-red-600">{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 max-h-[75svh] overflow-auto">
                {musics.map((music) => (
                    <div key={music.id.videoId}>
                        <iframe
                            src={`https://www.youtube.com/embed/${music.id.videoId}?autoplay=0`}
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full aspect-video"
                        ></iframe>
                        <h3 className="text-lg font-semibold mt-2 dark:text-gray-200">{music.snippet.title}</h3>
                        <p className='dark:text-gray-400'>{music.snippet.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
