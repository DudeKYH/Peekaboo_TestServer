import handleError from '@peekaboo-ssr/error/handleError';

export const connectedServiceNotificationHandler = async (server, data) => {
  try {
    console.log('Distributor Info Data: ', data);
    server.onDistribute(data);
  } catch (e) {
    handleError(e, server);
  }
};
