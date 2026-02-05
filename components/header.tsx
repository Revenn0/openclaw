import Link from 'next/link'
import { Github, Book, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
              <span className="font-mono text-lg font-bold text-background">{'>'}_</span>
            </div>
            <span className="text-xl font-semibold">OpenClaw</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="https://openclaw.ai/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="https://openclaw.ai/getting-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Getting Started
            </Link>
            <Link href="https://openclaw.ai/showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Showcase
            </Link>
            <Link href="https://discord.gg/openclaw" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="#get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
