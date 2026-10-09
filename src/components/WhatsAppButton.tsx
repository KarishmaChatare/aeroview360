import React from "react";

export default function WhatsAppButton() {
    const whatsappNumber = "919022434694";

    const handleWhatsAppClick = () => {
        window.open(
            `https://wa.me/${whatsappNumber}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-110"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
            >
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.59 5.96L.02 24l6.26-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.19-3.45-8.43ZM12.05 21.85h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.23-.37a9.9 9.9 0 0 1-1.52-5.32C2.17 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.43 9.93-9.87 9.93Zm5.43-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.07 2.91 1.22 3.11c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
            </svg>
        </button>
    );
}