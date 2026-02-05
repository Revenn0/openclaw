import { CheckCircle2 } from 'lucide-react'

const specs = [
  'Node.js ≥22 runtime',
  'TypeScript codebase',
  'Anthropic Claude & OpenAI GPT support',
  'Native macOS, iOS, Android apps',
  'WebSocket-based control plane',
  'Local-first architecture',
]

const models = [
  {
    name: 'Claude Opus 4.5',
    provider: 'Anthropic',
    description: 'Long-context strength, superior prompt-injection resistance',
    recommended: true,
  },
  {
    name: 'GPT-4 Turbo',
    provider: 'OpenAI',
    description: 'Fast inference with comprehensive tool support',
    recommended: false,
  },
]

export function TechnicalSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-7xl mx-auto">
          {/* Technical Specs */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Built for Production
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              OpenClaw is engineered with modern technologies and best practices. Run it on any platform that supports Node.js.
            </p>
            <ul className="space-y-3">
              {specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Model Support */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Flagship AI Models
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Choose from the most powerful AI models available. Seamlessly switch between providers.
            </p>
            <div className="space-y-4">
              {models.map((model) => (
                <div
                  key={model.name}
                  className="rounded-lg border border-border bg-card p-5 relative"
                >
                  {model.recommended && (
                    <div className="absolute -top-2 right-4 rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-background">
                      Recommended
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-semibold">{model.name}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{model.provider}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
