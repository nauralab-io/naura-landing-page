import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight, Code2, Database, BrainCircuit, ShieldCheck, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import fintechOpsImg from "@/assets/images/fintech-ops.png";
import architectureImg from "@/assets/images/architecture.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-white/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
          <img 
            src={fintechOpsImg} 
            alt="Fintech Operations" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-block">
              <span className="px-3 py-1 text-xs font-mono tracking-widest text-muted-foreground uppercase border border-border/50 rounded-full">
                Lisbon based · Global impact
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient"
            >
              Where Engineering<br />meets Product Thinking.
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl font-light leading-relaxed"
            >
              We engineer technology for demanding fintech and banking clients. 
              Unhurried, precise, and confident. We don't take shortcuts; we build things that last.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a 
                href="#about"
                className="inline-flex items-center gap-3 text-white font-medium hover:text-gray-300 transition-colors pb-1 border-b border-white/30 hover:border-white group"
                data-testid="hero-scroll-btn"
              >
                Explore our capability
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About / Identity */}
      <section id="about" className="py-24 md:py-32 bg-card relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <img 
                src={architectureImg} 
                alt="Architecture" 
                className="w-full h-auto aspect-square object-cover rounded-sm grayscale contrast-125 opacity-80"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold mb-8">
                Operating at the intersection of hard problems and craft.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-6">
                Naura Innovation Lab is a senior engineering firm. We exist to solve complex technical challenges with rigorous product discipline.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8">
                When you are building critical financial systems, "move fast and break things" is not a strategy. We operate with a different mindset: dense precision, deep accountability, and long-term thinking.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                <div>
                  <h4 className="text-4xl font-light mb-2">10+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Fintech Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-light mb-2">0</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Silos Between Eng & Product</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            <h2 className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-4">Core Competencies</h2>
            <h3 className="text-3xl md:text-5xl font-semibold">Capabilities designed for real-world complexity.</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6 mb-6 text-white/70" />,
                title: "Product Development",
                description: "End-to-end digital products from discovery to launch, with product thinking at every step."
              },
              {
                icon: <Database className="w-6 h-6 mb-6 text-white/70" />,
                title: "Data & Complex Systems",
                description: "Scalable, resilient critical systems designed for real-world complexity."
              },
              {
                icon: <BrainCircuit className="w-6 h-6 mb-6 text-white/70" />,
                title: "Data & AI",
                description: "Data platforms, machine learning pipelines and applied AI solutions."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 mb-6 text-white/70" />,
                title: "Cloud & Security",
                description: "Infrastructure, DevOps, compliance and security hardening for enterprise environments."
              },
              {
                icon: <Users className="w-6 h-6 mb-6 text-white/70" />,
                title: "Nearshore Teams",
                description: "Dedicated engineering teams embedded in your processes and culture."
              },
              {
                icon: <Lightbulb className="w-6 h-6 mb-6 text-white/70" />,
                title: "Product Innovation",
                description: "Build and co-create new products with your team, from idea to validated MVP."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 border border-border/50 bg-card hover:bg-white/[0.02] transition-colors group"
                data-testid={`service-card-${i}`}
              >
                {service.icon}
                <h4 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origins / Roots — radicant story */}
      <section id="pedigree" className="py-24 md:py-36 bg-card border-y border-border/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left: label + headline */}
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:sticky lg:top-32"
              >
                <motion.p variants={fadeUp} className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-4">
                  Where We Come From
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                  Born inside a Swiss bank.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light leading-relaxed">
                  Naura didn't start in a garage. We started by building a fully licensed cloud-native digital bank from the ground up — under Swiss regulatory scrutiny, at real scale, with real money on the line.
                </motion.p>
              </motion.div>
            </div>

            {/* Right: story content */}
            <div className="lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-10"
              >
                {/* radicant callout */}
                <motion.div variants={fadeUp} className="border border-border/60 rounded-lg p-8 bg-background/40">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={18} className="text-white/70" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-1">radicant bank ag — Switzerland</p>
                      <h3 className="text-xl font-semibold">The innovation hub that became Naura</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We were the engineering and product team behind radicant — Switzerland's pioneering sustainability-focused digital bank with a full banking license, built entirely on Google Cloud. From day one, our team was responsible for architecting and delivering the entire technology platform.
                  </p>
                </motion.div>

                {/* Timeline stats */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/40 rounded-lg overflow-hidden border border-border/40">
                  {[
                    { stat: "< 12 months", label: "From blank canvas to a fully licensed, operational digital bank" },
                    { stat: "35+", label: "Microservices in production on Google Kubernetes Engine" },
                    { stat: "2021 → 2023", label: "Platform built, regulated, launched — and scaled to real customers" },
                  ].map((item) => (
                    <div key={item.stat} className="bg-background/60 px-6 py-7">
                      <p className="text-3xl font-semibold mb-2">{item.stat}</p>
                      <p className="text-sm text-muted-foreground font-light leading-snug">{item.label}</p>
                    </div>
                  ))}
                </motion.div>

                {/* What it meant */}
                <motion.div variants={fadeUp} className="space-y-5">
                  {[
                    {
                      title: "Cloud-native from day zero",
                      body: "No legacy, no monolith. We designed every layer — infrastructure, APIs, data pipelines — for a regulated, cloud-exclusive environment on Google Cloud, using GKE, BigQuery, Cloud Armor, and Apigee.",
                    },
                    {
                      title: "Compliance and security as first principles",
                      body: "Swiss banking regulation doesn't forgive mistakes. We built audit trails, data sovereignty controls, DDoS protection, and end-to-end encryption as core product features — not afterthoughts.",
                    },
                    {
                      title: "Product and engineering as one team",
                      body: "radicant's mission was to align banking with the UN's 17 Sustainable Development Goals. That demanded tight integration between product thinking and technical execution — the model we've carried into everything we do.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-px bg-border/60 shrink-0 mt-1.5 ml-1" />
                      <div>
                        <p className="font-medium mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <blockquote className="border-l-2 border-white/20 pl-6 italic text-muted-foreground font-light text-lg leading-relaxed">
                    "Building a bank from scratch is in itself a once-in-a-lifetime opportunity. The prospect of leveraging cutting-edge technology was incredibly compelling."
                    <footer className="mt-3 not-italic text-sm text-muted-foreground/60">— Christoph Schwarz, CTO, radicant bank ag</footer>
                  </blockquote>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & DNA */}
      <section id="dna" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="sticky top-32"
              >
                <motion.h2 variants={fadeUp} className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-4">Our DNA</motion.h2>
                <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-semibold mb-6">How we operate.</motion.h3>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8">
                  We don't just deliver scope and disappear. We are long-term partners invested in the success of the product.
                </motion.p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              {[
                {
                  title: "Engineering First",
                  desc: "Technology is at our core. We architect for resilience and scale."
                },
                {
                  title: "Ownership Mentality",
                  desc: "Every person acts as a builder. Full accountability for outcomes, not just outputs."
                },
                {
                  title: "Transparency",
                  desc: "Clear communication, honest assessments, and no hidden technical debt."
                },
                {
                  title: "Cultural Discipline",
                  desc: "Rigorous code reviews, comprehensive testing, and steadfast documentation."
                },
                {
                  title: "Long-Term Thinking",
                  desc: "We build systems designed to evolve and endure over years, not just quarters."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-white/50" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-white text-black text-center relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Let's build what matters.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-10">
              If you're thinking long-term, building serious products and solving real problems — we should talk.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a 
                href="mailto:contact@nauralab.com" 
                className="inline-block bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                data-testid="cta-button"
              >
                Contact Naura
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border text-sm">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="/logos/Naura_Logos_Naura_Logomark_White.png" 
                alt="Naura Symbol" 
                className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" 
              />
              <span className="text-muted-foreground">© {new Date().getFullYear()} Naura Innovation Lab. All rights reserved.</span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Lisbon, Portugal</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
