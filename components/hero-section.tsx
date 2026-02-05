import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Terminal, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            <span>Self-hosted • Privacy-first • Always-on</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your Personal AI Assistant.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Run It Anywhere.
            </span>
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed">
            OpenClaw connects to WhatsApp, Telegram, Slack, Discord, and 13+ channels. Fast, local, and completely under your control.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
              <Link href="#get-started">
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" asChild>
              <Link href="https://openclaw.ai/docs">
                View Documentation
              </Link>
            </Button>
          </div>

          <div className="mt-12 rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Quick Install</span>
            </div>
            <code className="block rounded bg-secondary p-4 text-left font-mono text-sm text-foreground overflow-x-auto">
              <span className="text-muted-foreground">$</span> npm install -g openclaw@latest<br />
              <span className="text-muted-foreground">$</span> openclaw onboard --install-daemon
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
