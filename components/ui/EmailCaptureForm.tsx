"use client";

interface EmailCaptureFormProps {
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

// UI-only for now (preventDefault + alert), matching the design handoff.
// Wiring this to a real mailing-list provider (Mailchimp/ConvertKit/etc.)
// is still TBD with Shawnie.
export default function EmailCaptureForm({
  placeholder = "Email",
  buttonLabel = "Notify Me",
  successMessage = "Thanks! We'll notify you at launch.",
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: EmailCaptureFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(successMessage);
      }}
      className={className}
    >
      <input
        type="email"
        required
        placeholder={placeholder}
        className={inputClassName}
      />
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
    </form>
  );
}
