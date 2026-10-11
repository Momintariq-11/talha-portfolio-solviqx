import React from 'react'
import { ArrowUp, Mail, Phone } from 'lucide-react'
import { PERSONAL_INFO } from '../data/portfolioData'
import { GithubIcon } from './Icons'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.08] bg-[#07090e] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white mt-0.5">
              TA
            </div>
            <div>
              <div className="font-bold text-sm text-white">
                Muhammad Talha Anjum
              </div>
              <div className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                CEO & Founder of Vertex Studios Agency
              </div>
              <div className="text-xs font-mono text-zinc-400 mt-0.5">
                AI & Full Stack Developer | Social Media Marketing
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.contact.email}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-emerald-400 transition-colors"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Option 4: Centered Frosted Pill Signature Badge */}
        <div className="pt-8 flex flex-col items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0d1117]/90 border border-emerald-500/30 hover:border-emerald-500/50 shadow-lg shadow-emerald-500/5 transition-all text-xs">
            <span className="font-semibold text-white tracking-wide">Talha Anjum</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-mono">Made & Engineered by</span>
            <span className="font-gotham font-black text-white tracking-wide">
              Solviq<span className="text-emerald-400">x</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="font-gotham text-zinc-400 text-[11px] hidden sm:inline">
              Your Vision, Our Digital Expertise
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
