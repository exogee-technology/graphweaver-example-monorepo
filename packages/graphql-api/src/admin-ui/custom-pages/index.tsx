import React from 'react';
import { Posts } from './Posts';

export const customPages = {
  routes: () => [
    {
      // This is where Xero sends us back to after the OAuth flow.
      // Its job is to read the code and store it in local storage, then
      // redirect back to /.
      path: '/posts',
      element: <Posts />,
    },
  ],
};
