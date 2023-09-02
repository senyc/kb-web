'use server';

import serverContext from 'server-only-context';
export const [getUserAuthorized, setUserAuthorized] = serverContext<boolean>(false);
