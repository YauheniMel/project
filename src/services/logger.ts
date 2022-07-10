import { toast } from 'react-toastify';

export const logSuccess = (message: string) => {
  toast.success(message);
};

export const logError = (message: string) => {
  toast.error(message);
};

export const logWarning = (message: string) => {
  toast.warning(message);
};
