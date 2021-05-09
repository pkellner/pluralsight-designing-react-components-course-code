import React from 'react';

function Page() {
  const speakersArray = [
    {
      id: 1124,
      firstName: 'Douglas',
      lastName: 'Crockford',
      bio: 'Discovered JSON',
    },
    {
      id: 1530,
      firstName: 'Tamara',
      lastName: 'Baker',
      bio: 'Engineering VP',
    },
    {
      id: 10803,
      firstName: 'Eugene',
      lastName: 'Chuvyrov',
      bio: 'Senior Cloud Architect',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12 p-6">
      {speakersArray.map(function ({ firstName, lastName, id, bio }) {
        return (
          <div className="md:flex bg-gray-200 rounded-lg p-10" key={id}>
            <img
              className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
              src={`images/speaker-component-${id}.png`}
            />
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold">
                {firstName} {lastName}
              </h2>
              <div className="text-purple-500"></div>
              <div className="text-gray-900">Conference Speaker</div>
              <div className="text-gray-600">{bio}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Page;
