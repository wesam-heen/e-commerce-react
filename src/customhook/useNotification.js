import { toast } from "react-toastify";

//to make notification to any component
const notify = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
      break;
  }
};
export default notify;
