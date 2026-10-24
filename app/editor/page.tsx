"use client"

import { EditorLayout } from "@/components/editor/editor-layout"

export default function EditorPage() {
  return (
    <EditorLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-text-primary mb-4">Editor Workspace</h1>
        <p className="text-text-secondary">
          This is the editor canvas. The navbar and sidebar are now integrated.
        </p>
      </div>
    </EditorLayout>
  )
}