/**
 * Badge / Tag pill.
 * @param {{ children: React.ReactNode, variant?: 'default' | 'violet' | 'outline' }} props
 */
export default function Tag({ children, variant = 'default' }) {
  const styles = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700',
    violet: 'bg-violet-500/15 text-violet-300 border border-violet-500/30',
    outline: 'bg-transparent text-slate-400 border border-slate-700',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles[variant]}`}>
      {children}
    </span>
  )
}
