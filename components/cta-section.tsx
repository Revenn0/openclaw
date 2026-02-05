import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Book, Github } from 'lucide-react'

export function CTASection() {
  return (
    <section id="get-started" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-accent/5 p-8 sm:p-12 md:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-accent/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-accent/5 blur-3xl rounded-full" />
          
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
              Install OpenClaw in minutes and start building your personal AI assistant. Works on macOS, Linux, and Windows (via WSL2).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 gap-2" asChild>
                <Link href="https://openclaw.ai/getting-started">
                  Get Started Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 gap-2" asChild>
                <Link href="https://openclaw.ai/docs">
                  <Book className="h-4 w-4" />
                  Documentation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8 gap-2" asChild>
                <Link href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm text-muted-foreground">
                Open Source • MIT Licensed • Community Driven
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
