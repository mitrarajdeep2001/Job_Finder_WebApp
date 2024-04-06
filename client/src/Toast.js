import { toast } from "react-toastify";

export function notifySuccess(message) {
  console.log(message);
  toast.success(`${message}`);
}

export function notifyError(message) {
  toast.error(`${message}`);
}
