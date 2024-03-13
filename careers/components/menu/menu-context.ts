import React from 'react';

type PrimaryNavContextTypes = {
  isPrimaryOpen: boolean;
  setPrimaryOpen: (params: boolean) => void;
};

export const PrimaryNavContext = React.createContext<PrimaryNavContextTypes>({
  isPrimaryOpen: false,
  setPrimaryOpen: () => {
    //
  }
});
