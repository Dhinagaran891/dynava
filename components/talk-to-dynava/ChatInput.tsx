"use client";

import { Send } from "lucide-react";
import { FormEvent } from "react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
};

export default function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
}: ChatInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!value.trim() || disabled) return;

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-4
          py-2
          transition
          focus-within:border-blue-300
          focus-within:ring-2
          focus-within:ring-blue-100
        "
      >
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
          placeholder="Type your message..."
          className="
            min-w-0
            flex-1
            bg-transparent
            text-sm
            text-slate-900
            outline-none
            placeholder:text-slate-400
            disabled:cursor-not-allowed
          "
          aria-label="Message Dynava"
        />

        <button
          type="submit"
          disabled={!value.trim() || disabled}
          aria-label="Send message"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-600
            to-emerald-500
            text-white
            shadow-sm
            transition-all
            hover:scale-105
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <Send size={16} />
        </button>
      </div>

      <p className="mt-2 text-center text-[10px] text-slate-400">
        Dynava AI may make mistakes. Please verify important information.
      </p>
    </form>
  );
}