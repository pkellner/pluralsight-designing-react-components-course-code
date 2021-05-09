import React, { createContext } from 'react';
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const speakers = [
    {
      id: 1530,
      firstName: 'Tamara',
      lastName: 'Baker',
      sat: false,
      sun: true,
      isFavorite: true,
      bio:
        'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.',
    },
    {
      id: 5996,
      firstName: 'Craig',
      lastName: 'Berntson',
      isFavorite: false,
      bio:
        'Craig has a passion for community and helping other developers improve their skills. He writes the column "Software Gardening" in DotNet Curry Magazine and is the co-author of "Continuous Integration in .NET" available from Manning.',
      sat: true,
      sun: true,
    },
    {
      id: 10803,
      firstName: 'Eugene',
      lastName: 'Chuvyrov',
      sat: true,
      sun: false,
      isFavorite: true,
      bio:
        'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.',
    },
  ];

  const state = {
    speakers: speakers,
    status: 'success',
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
