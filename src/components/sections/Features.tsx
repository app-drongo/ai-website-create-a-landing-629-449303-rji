import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  CreditCard,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process transactions and account data in real-time with sub-second API response times.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "PCI DSS Level 1 compliance with 256-bit encryption and multi-layer fraud protection.",
      badge: "Security"
    },
    {
      icon: CreditCard,
      title: "Open Banking Ready",
      description: "Full compliance with PSD2, Open Banking, and CDR regulations across global markets.",
      badge: "Compliance"
    },
    {
      icon: Globe,
      title: "Multi-Region Support",
      description: "Connect to 500+ banks across North America, Europe, and Asia-Pacific regions.",
      badge: "Coverage"
    },
    {
      icon: BarChart3,
      title: "Transaction Analytics",
      description: "Advanced categorization and insights engine for transaction data analysis.",
      badge: "Analytics"
    },
    {
      icon: Smartphone,
      title: "Mobile SDK",
      description: "Native iOS and Android SDKs for seamless mobile banking integration.",
      badge: "Mobile"
    },
    {
      icon: Code2,
      title: "Developer Tools",
      description: "Comprehensive APIs, webhooks, and sandbox environment for rapid development.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Enterprise Support",
      description: "Dedicated technical account managers and 24/7 priority support channels.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Data Sovereignty",
      description: "Your customer data remains yours with full control over data residency and access.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for Financial
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Innovation at Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise-grade banking infrastructure designed for fintech companies, 
            financial institutions, and developers building the future of finance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =&gt; {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your financial services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Integration Call
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore API Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}