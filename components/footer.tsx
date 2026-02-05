import Link from 'next/link'
import { Github, MessageCircle, Book } from 'lucide-react'

const footerLinks = {
  Product: [
    { name: 'Getting Started', href: 'https://openclaw.ai/getting-started' },
    { name: 'Documentation', href: 'https://openclaw.ai/docs' },
    { name: 'Showcase', href: 'https://openclaw.ai/showcase' },
    { name: 'FAQ', href: 'https://openclaw.ai/faq' },
  ],
  Resources: [
    { name: 'DeepWiki', href: 'https://openclaw.ai/deepwiki' },
    { name: 'Updating Guide', href: 'https://openclaw.ai/updating' },
    { name: 'Docker Setup', href: 'https://openclaw.ai/docker' },
    { name: 'Nix Setup', href: 'https://openclaw.ai/nix' },
  ],
  Community: [
    { name: 'Discord', href: 'https://discord.gg/openclaw' },
    { name: 'GitHub', href: 'https://github.com/openclaw/openclaw' },
    { name: 'Issues', href: 'https://github.com/openclaw/openclaw/issues' },
    { name: 'Discussions', href: 'https://github.com/openclaw/openclaw/discussions' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
                <span className="font-mono text-lg font-bold text-background">{'>'}_</span>
              </div>
              <span className="text-xl font-semibold">OpenClaw</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your personal AI assistant. Self-hosted, privacy-first, and always-on.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.gg/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="https://openclaw.ai/docs"
                className="flex h-9 w-9 items-center justify-center rounded border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Book className="h-4 w-4" />
                <span className="sr-only">Documentation</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OpenClaw. MIT Licensed.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://openclaw.ai/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="https://openclaw.ai/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="https://github.com/openclaw/openclaw/blob/main/LICENSE" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
