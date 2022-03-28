export const SEND_PERSONAL_DATA = 'SEND_PERSONAL_DATA';

export function sendPersonalData(payload) {
  return {
    type: SEND_PERSONAL_DATA,
    payload,
  };
}
