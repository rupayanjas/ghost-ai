"use client"

import { cn } from "@/lib/utils"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 h-12",
        "bg-bg-surface border-b border-border-default",
        "flex items-center justify-between px-4"
      )}
    >
      {/* Left Section - Sidebar Toggle */}
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className={cn(
            "p-2 rounded-lg transition-colors",
            "hover:bg-bg-elevated",
            "text-text-secondary hover:text-text-primary"
          )}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Center Section - Empty for now */}
      <div className="flex items-center justify-center flex-1" />

      {/* Right Section - Empty for now */}
      <div className="flex items-center justify-end flex-1" />
    </header>
  )
}