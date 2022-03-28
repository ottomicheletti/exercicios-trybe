import { SEND_PERSONAL_DATA } from '../action/personalAction';
import { SEND_PROFESSIONAL_DATA } from '../action/professionalAction';

const PERSONAL_DATA = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

export function personalFormReducer(state = PERSONAL_DATA, action) {
  switch (action.type) {
  case SEND_PERSONAL_DATA:
    return {
      ...action.payload,
    };
  default:
    return state;
  }
}

const PROFESSIONAL_DATA = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

export function professionalFormReducer(state = PROFESSIONAL_DATA, action) {
  switch (action.type) {
  case SEND_PROFESSIONAL_DATA:
    return {
      ...action.payload,
    };
  default:
    return state;
  }
}
