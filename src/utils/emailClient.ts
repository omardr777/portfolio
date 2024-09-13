import emailJs from "@emailjs/browser";

export const EmailClient = async (
  { email, name, message }: { email: string; message: string; name: string },
  onSuccess: () => void,
  onError: () => void
) => {
  try {
    emailJs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: name,
        to_name: import.meta.env.VITE_TO_NAME,
        from_email: email,
        to_email: import.meta.env.VITE_TO_EMAIL,
        message,
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    onSuccess();
  } catch {
    onError();
  }
};
