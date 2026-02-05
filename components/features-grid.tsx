import { Mic, Canvas, Globe, Code, Zap, Shield, Server, Webhook } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Voice Wake + Talk Mode',
    description: 'Always-on speech recognition for macOS, iOS, and Android. Natural conversations with your AI assistant.',
  },
  {
    icon: Canvas,
    title: 'Live Canvas',
    description: 'Agent-driven visual workspace with A2UI. Watch your AI create and manipulate interfaces in real-time.',
  },
  {
    icon: Globe,
    title: 'Browser Control',
    description: 'Dedicated Chrome/Chromium with CDP control. Your AI can browse, interact, and automate web tasks.',
  },
  {
    icon: Code,
    title: 'Skills Platform',
    description: 'Extend capabilities with bundled, managed, and workspace skills. Build custom tools for your needs.',
  },
  {
    icon: Webhook,
    title: 'Cron + Webhooks',
    description: 'Schedule automated tasks and integrate with external services via webhooks.',
  },
  {
    icon: Zap,
    title: 'Multi-Agent Routing',
    description: 'Route channels to isolated agent workspaces. Run multiple specialized assistants simultaneously.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'DM pairing system with allowlists. Full control over who can access your assistant.',
  },
  {
    icon: Server,
    title: 'Self-Hosted Gateway',
    description: 'WebSocket control plane running locally. Your data never leaves your devices.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Built for developers who demand flexibility, privacy, and power.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
