"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { siteConfig } from "../../site.config";

/**
 * Floating chat widget for the self-healing system.
 * Clients describe what they want changed; the request goes to
 * the BWT API which sends it to Claude for automatic fixes.
 *
 * Only renders when siteConfig.selfHealing.enabled is true.
 */
export function SelfHealingWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  if (!siteConfig.selfHealing.enabled) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim() || status === "sending") return;

    setStatus("sending");
    try {
      await fetch(siteConfig.selfHealing.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: siteConfig.selfHealing.siteId,
          message: message.trim(),
        }),
      });
      setStatus("sent");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("idle");
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
            <span className="font-medium text-sm">Request a Change</span>
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe what you'd like changed..."
              className="w-full h-28 border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              disabled={status === "sending" || !message.trim()}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={14} />
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Sent! We're on it."
                  : "Submit Request"}
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
          aria-label="Request a change"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
}
