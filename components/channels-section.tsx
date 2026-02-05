import { MessageCircle, Send, Hash, Users, Mail, Phone, MessageSquare, Slack, Chrome } from 'lucide-react'

const channels = [
  { name: 'WhatsApp', icon: MessageCircle },
  { name: 'Telegram', icon: Send },
  { name: 'Discord', icon: Hash },
  { name: 'Slack', icon: Slack },
  { name: 'Signal', icon: Phone },
  { name: 'iMessage', icon: MessageSquare },
  { name: 'Google Chat', icon: Mail },
  { name: 'Teams', icon: Users },
  { name: 'Matrix', icon: MessageSquare },
  { name: 'WebChat', icon: Chrome },
]

export function ChannelsSection() {
  return (
    <section className="py-16 sm:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Connect to your favorite platforms
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            13+ Channels Supported
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card/80"
            >
              <channel.icon className="h-8 w-8 text-accent" />
              <span className="text-sm font-medium text-center">{channel.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
