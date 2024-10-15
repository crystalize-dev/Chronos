import { createContext } from 'react';

type ModelContextType = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModelSearchContext = createContext<ModelContextType>({
    visible: false,
    setVisible: () => {}
});
