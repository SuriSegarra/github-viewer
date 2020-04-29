import React from 'react';
// import User from '../User/User';
import Users from '../Users/Users';

export default function App() {
  
  const users = [
    {
      id: 1,
      login: 'Jake',
      followers_url:'1',
      following:'5',
      url:'www.jacob-cline.com',
      avatar_url: 'https://www.fillmurray.com/640/360'
    },
    {
      id: 2, 
      login: 'Nicholas',
      followers_url:'10',
      following:'59',
      url:'www.nicholascage.com',
      avatar_url: 'https://www.placecage.com/640/360'
    },
    {
      id: 3,
      login: 'steven',
      followers_url:'17',
      following:'19',
      url:'www.steven.com',
      avatar_url: 'https://www.stevensegallery.com/640/360'
    },
  ];

  return (
    <Users users={users}/>

  );
}

