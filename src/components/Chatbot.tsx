import { useEffect } from "react";

export function Chatbot() {
  useEffect(() => {
    // 1. Create the script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

    // 2. Initialize Voiceflow once the script loads
    script.onload = function () {
      // @ts-ignore - Ignoring TS error for custom window property
      window.voiceflow?.chat.load({
        verify: { projectID: '69e8a97cf2bd5a5227464f72' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: {
          url: "https://runtime-api.voiceflow.com"
        }
      });
    };

    // 3. Append the script to the body
    document.body.appendChild(script);

    // 4. Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Voiceflow handles its own UI injection, so we return nothing here.
  return null;
}