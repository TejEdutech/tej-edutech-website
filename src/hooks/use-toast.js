// src/hooks/use-toast.js
import { toast } from "sonner";

export const useToast = () => {
  return {
    toast: ({ title, description }) => {
    toast.success(title, {
        description,
      });
    },
  };
};
