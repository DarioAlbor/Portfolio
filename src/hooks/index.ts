import { useState, useEffect } from 'react';

const useMyHook = () => {
    const [state, setState] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await new Promise<string>(resolve => 
                setTimeout(() => resolve('Fetched Data'), 1000)
            );
            setState(data);
        };

        fetchData();
    }, []);

    return state;
};

export default useMyHook;