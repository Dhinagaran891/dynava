"use client";

type ChatMessageProps = {
  role: "assistant" | "user";
  content: string;
};

export default function ChatMessage({
  role,
  content,
}: ChatMessageProps) {
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex ${
        isAssistant ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-6
          ${
            isAssistant
              ? "rounded-tl-md bg-slate-100 text-slate-800"
              : "rounded-tr-md bg-gradient-to-r from-blue-600 to-emerald-500 text-white"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}