"use client"

import { cn } from "@/lib/utils"
import { X, Plus } from "lucide-react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-12 left-0 bottom-0 z-50 w-72",
        "bg-bg-surface border-r border-border-default",
        "transition-transform duration-200 ease-in-out",
        "flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
      aria-label="Project sidebar"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border-default">
        <h2 className="text-sm font-medium text-text-primary">Projects</h2>
        <button
          onClick={onClose}
          className={cn(
            "p-1.5 rounded-lg transition-colors",
            "hover:bg-bg-elevated",
            "text-text-muted hover:text-text-primary"
          )}
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="my-projects" className="flex-1 flex flex-col p-3">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center text-text-muted text-sm">
            No projects yet
          </div>
        </TabsContent>

        <TabsContent value="shared" className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center text-text-muted text-sm">
            No shared projects
          </div>
        </TabsContent>
      </Tabs>

      {/* New Project Button */}
      <div className="p-3 border-t border-border-default">
        <Button
          className={cn(
            "w-full justify-center gap-2",
            "bg-accent-primary text-primary-foreground",
            "hover:bg-accent-primary/90",
            "text-sm"
          )}
          onClick={() => {}}
        >
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}