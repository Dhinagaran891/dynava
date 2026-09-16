"use client";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";


import {
  GripVertical,
  Maximize2,
  MessageCircle,
  Minimize2,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTalkToDynava } from "./talkToDynava-context";

export default function TalkToDynavaWidget() {
  const { isOpen, toggleChat } = useTalkToDynava();
  const [input, setInput] = useState("");

const [messages, setMessages] = useState<
  {
    role: "assistant" | "user";
    content: string;
  }[]
>([
  {
    role: "assistant",
    content:
      "Hello, I'm Dynava. I can help you explore where AI, data, and digital technology could create practical value in your business.",
  },
]);

  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const [position, setPosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  const [isDragging, setIsDragging] = useState(false);

  const dragData = useRef({
    offsetX: 0,
    offsetY: 0,
  });

  /*
   * Set the initial desktop position once the browser is available.
   * Mobile keeps the widget anchored by CSS.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.innerWidth >= 640) {
      const width = 420;
      const right = 32;
      const bottom = 32;

      setPosition({
        x: Math.max(16, window.innerWidth - width - right),
        y: Math.max(16, window.innerHeight - 680 - bottom),
      });
    }
  }, []);

  /*
   * Stop dragging when the pointer is released anywhere on the page.
   */
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) return;

      const width = isMaximized ? window.innerWidth - 48 : 420;
      const height = isMaximized
        ? window.innerHeight - 48
        : Math.min(680, window.innerHeight - 48);

      const maxX = Math.max(16, window.innerWidth - width - 16);
      const maxY = Math.max(16, window.innerHeight - height - 16);

      const nextX = event.clientX - dragData.current.offsetX;
      const nextY = event.clientY - dragData.current.offsetY;

      setPosition({
        x: Math.min(Math.max(16, nextX), maxX),
        y: Math.min(Math.max(16, nextY), maxY),
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, isMaximized]);

  const handleDragStart = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth < 640) return;
    if (isMaximized) return;

    const target = event.currentTarget.parentElement;

    if (!target) return;

    const rect = target.getBoundingClientRect();

    dragData.current = {
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
    };

    setPosition({
      x: rect.left,
      y: rect.top,
    });

    setIsDragging(true);
  };

  const handleClose = () => {
    setIsMinimized(false);
    setIsMaximized(false);
    toggleChat();
  };

  const handleMinimize = () => {
    setIsMinimized((current) => !current);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
    setIsMaximized((current) => !current);

    if (!isMaximized) {
      setPosition({
        x: 24,
        y: 24,
      });
    } else {
      setPosition({
        x: Math.max(16, window.innerWidth - 420 - 32),
        y: Math.max(16, window.innerHeight - 680 - 32),
      });
    }
  };
const handleSendMessage = () => {
  const message = input.trim();

  if (!message) return;

  setMessages((current) => [
    ...current,
    {
      role: "user",
      content: message,
    },
  ]);

  setInput("");

  /*
   * Temporary response.
   * This will later be replaced by the Dynava AI backend.
   */
  window.setTimeout(() => {
    setMessages((current) => [
      ...current,
      {
        role: "assistant",
        content:
          "I'd like to understand that better. Tell me a little about the workflow, challenge, or business process you're looking to improve.",
      },
    ]);
  }, 600);
};

const handleQuickPrompt = (prompt: string) => {
  setMessages((current) => [
    ...current,
    {
      role: "user",
      content: prompt,
    },
  ]);

  window.setTimeout(() => {
    setMessages((current) => [
      ...current,
      {
        role: "assistant",
        content:
          "Absolutely. Let's start by understanding your business and the processes where your team spends the most time. From there, we can identify practical AI opportunities.",
      },
    ]);
  }, 600);
};
  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={toggleChat}
        aria-label="Talk to Dynava"
        className="
          fixed
          bottom-6
          right-6
          z-[200]
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-emerald-500
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:shadow-2xl
          active:scale-95
          sm:bottom-8
          sm:right-8
        "
      >
        <MessageCircle size={25} strokeWidth={2} />

        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-white
            text-blue-600
            shadow-md
          "
        >
          <Sparkles size={11} strokeWidth={2.5} />
        </span>
      </button>
    );
  }

  /*
   * Minimized state
   */
  if (isMinimized) {
    return (
      <div
        className="
          fixed
          bottom-6
          right-6
          z-[200]
          flex
          items-center
          gap-2
          rounded-full
          border
          border-slate-200
          bg-white
          px-4
          py-3
          shadow-xl
          sm:bottom-8
          sm:right-8
        "
      >
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-600
            to-emerald-500
            text-white
          "
        >
          <Sparkles size={15} />
        </div>

        <span className="text-sm font-semibold text-slate-900">
          Talk to Dynava
        </span>

        <button
          type="button"
          onClick={handleMinimize}
          aria-label="Restore Talk to Dynava"
          className="
            ml-1
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <Maximize2 size={16} />
        </button>

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close Talk to Dynava"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-900
          "
        >
          <X size={17} />
        </button>
      </div>
    );
  }

  const panelStyle =
    position.x !== null && position.y !== null
      ? {
          left: `${position.x}px`,
          top: `${position.y}px`,
          right: "auto",
          bottom: "auto",
        }
      : undefined;

  return (
    <div
      className={`
        fixed
        z-[200]
        flex
        flex-col
        overflow-hidden
        border
        border-slate-200/80
        bg-white
        shadow-2xl
        transition-[width,height,border-radius]
        duration-300
        ${
          isMaximized
            ? "inset-6 h-[calc(100vh-48px)] w-[calc(100vw-48px)] rounded-3xl"
            : `
              bottom-6
              right-6
              h-[min(680px,calc(100vh-48px))]
              w-[min(420px,calc(100vw-48px))]
              rounded-3xl
              sm:bottom-8
              sm:right-8
            `
        }
      `}
      style={panelStyle}
    >
      {/* Header / Drag Handle */}
      <div
        onPointerDown={handleDragStart}
        className={`
          flex
          shrink-0
          items-center
          justify-between
          bg-gradient-to-r
          from-blue-600
          to-emerald-500
          px-5
          py-4
          text-white
          ${
            !isMaximized
              ? "cursor-grab active:cursor-grabbing"
              : "cursor-default"
          }
        `}
      >
        <div className="flex items-center gap-3">
          {!isMaximized && (
            <GripVertical
              size={16}
              className="hidden opacity-60 sm:block"
            />
          )}

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/15
              ring-1
              ring-white/20
            "
          >
            <Sparkles size={19} />
          </div>

          <div>
            <p className="text-sm font-semibold">
              Talk to Dynava
            </p>

            <p className="text-xs text-white/75">
              AI-powered business consultation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={handleMinimize}
            aria-label="Minimize Talk to Dynava"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-white/80
              transition
              hover:bg-white/15
              hover:text-white
            "
          >
            <Minimize2 size={17} />
          </button>

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={handleMaximize}
            aria-label={
              isMaximized
                ? "Restore Talk to Dynava"
                : "Maximize Talk to Dynava"
            }
            className="
              hidden
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-white/80
              transition
              hover:bg-white/15
              hover:text-white
              sm:flex
            "
          >
            <Maximize2 size={17} />
          </button>

          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={handleClose}
            aria-label="Close Talk to Dynava"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-white/80
              transition
              hover:bg-white/15
              hover:text-white
            "
          >
            <X size={19} />
          </button>
        </div>
      </div>
{/* Conversation area */}
<div className="flex flex-1 flex-col overflow-hidden">
  <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">
    {messages.map((message, index) => (
      <ChatMessage
        key={`${message.role}-${index}`}
        role={message.role}
        content={message.content}
      />
    ))}

    {messages.length === 1 && (
      <div className="flex flex-wrap gap-2 pt-1">
        {[
          "Find AI opportunities",
          "Improve a workflow",
          "Explore AI use cases",
          "How can Dynava help?",
        ].map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => handleQuickPrompt(prompt)}
            className="
              rounded-full
              border
              border-blue-200
              bg-white
              px-3.5
              py-2
              text-xs
              font-medium
              text-slate-700
              shadow-sm
              transition-all
              hover:-translate-y-0.5
              hover:border-blue-400
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            {prompt}
          </button>
        ))}
      </div>
    )}
  </div>

  <div className="border-t border-slate-100 p-4">
    <ChatInput
      value={input}
      onChange={setInput}
      onSubmit={handleSendMessage}
    />
  </div>
</div>
    </div>
  );
}