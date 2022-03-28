export const SEND_PROFESSIONAL_DATA = 'SEND_PROFESSIONAL_DATA';

export function sendProfessionalData(payload) {
  return {
    type: SEND_PROFESSIONAL_DATA,
    payload,
  };
}
