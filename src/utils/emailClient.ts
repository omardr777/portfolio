import emailJs from "@emailjs/browser";

export const EmailClient = async (
  { email, name, message }: { email: string; message: string; name: string },
  onSuccess: () => void,
  onError: () => void
) => {
  try {
    emailJs.send(
      import.meta.env.SERVICE_ID,
      import.meta.env.TEMPLATE_ID,
      {
        from_name: name,
        to_name: import.meta.env.TO_NAME,
        from_email: email,
        to_email: import.meta.env.TO_EMAIL,
        message,
      },
      import.meta.env.PUBLIC_KEY
    );

    onSuccess();
  } catch {
    onError();
  }
};
