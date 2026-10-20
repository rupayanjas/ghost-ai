"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Code, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-base p-8">
      <div className="max-w-5xl mx-auto space-y-8 w-full">
        {/* Hero */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-text-primary">Ghost AI</h1>
          <p className="text-xl text-text-secondary">
            Real-time collaborative system design workspace
          </p>
        </div>

        {/* Main Content Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent-primary" />
              Design System Verification
            </CardTitle>
            <CardDescription>
              Testing all shadcn/ui components with the dark theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Tabs Demo */}
            <Tabs defaultValue="components" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="components">
                  <Code className="h-4 w-4 mr-2" />
                  Components
                </TabsTrigger>
                <TabsTrigger value="colors">
                  <Palette className="h-4 w-4 mr-2" />
                  Colors
                </TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
              </TabsList>

              {/* Components Tab */}
              <TabsContent value="components" className="space-y-4 mt-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                    Button Variants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                    Dialog Component
                  </h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          This is a dialog component rendered with our dark
                          theme tokens.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-sm text-text-secondary">
                          All components inherit the design system colors and
                          maintain consistency.
                        </p>
                        <Button className="w-full">Confirm</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                    Scroll Area
                  </h3>
                  <ScrollArea className="h-[200px] w-full rounded-xl border border-border-default p-4">
                    <div className="space-y-2">
                      {Array.from({ length: 20 }, (_, i) => (
                        <div
                          key={i}
                          className="text-sm text-text-secondary border-b border-border-subtle pb-2"
                        >
                          Scroll item {i + 1} — Testing scroll behavior
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Colors Tab */}
              <TabsContent value="colors" className="space-y-4 mt-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                    Background Surfaces
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-bg-base border border-border-subtle rounded-xl p-4 text-center">
                      <div className="text-xs text-text-muted">Base</div>
                    </div>
                    <div className="bg-bg-surface border border-border-subtle rounded-xl p-4 text-center">
                      <div className="text-xs text-text-muted">Surface</div>
                    </div>
                    <div className="bg-bg-elevated border border-border-subtle rounded-xl p-4 text-center">
                      <div className="text-xs text-text-muted">Elevated</div>
                    </div>
                    <div className="bg-bg-subtle border border-border-subtle rounded-xl p-4 text-center">
                      <div className="text-xs text-text-muted">Subtle</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                    Accent & State Colors
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Card className="bg-accent-primary-dim border-accent-primary">
                      <CardContent className="pt-6">
                        <div className="text-accent-primary font-medium">
                          Brand Accent
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-accent-ai">
                      <CardContent className="pt-6">
                        <div className="text-accent-ai-text font-medium">
                          AI Accent
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-state-error">
                      <CardContent className="pt-6">
                        <div className="text-state-error font-medium">
                          Error
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-state-success">
                      <CardContent className="pt-6">
                        <div className="text-state-success font-medium">
                          Success
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Forms Tab */}
              <TabsContent value="forms" className="space-y-4 mt-4">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                    Form Components
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-text-primary mb-2 block">
                        Input Field
                      </label>
                      <Input placeholder="Enter some text..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-primary mb-2 block">
                        Textarea
                      </label>
                      <Textarea
                        placeholder="Enter multiple lines..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full">Submit Form</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Typography Test */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-sans text-text-primary">
              UI text — Geist Sans
            </p>
            <p className="font-mono text-text-secondary text-sm">
              Code/mono — Geist Mono
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
