import './App.css'

interface NavItem {
  label: string
  href?: string
  color: string
  className?: string
}

const navItems: NavItem[] = [
  {
    label: 'Typing Test',
    href: 'https://typing.neonpixels.co.uk',
    // color: '#F2A536',
    color: '#F55A42',
    className: 'text-4xl font-light',
  },
  {
    label: 'ALIEN BULLET HELL',
    href: 'https://aliens.neonpixels.co.uk',
    color: '#4FA4B9',
    className: 'text-4xl font-light italic',
  },
  { label: 'Font Mixer', href: 'https://fontmixer.app', color: '#46A361' },
  { label: 'DevTok', href: 'https://devtok.dev', color: '#51606B' },
  { label: 'IQ (coming soon)', color: '#7D62A6' },
]

const darken = (color: string) => {
  const r = parseInt(color.slice(1, 3), 16)
  const g = parseInt(color.slice(3, 5), 16)
  const b = parseInt(color.slice(5, 7), 16)

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

function App() {
  return (
    <div className="bg-[#392433] w-full min-h-screen flex flex-col gap-2 py-12">
      <div className="flex flex-col gap-2 mb-8 px-4">
        <h1 className="text-7xl font-header">Neon Pixels</h1>
        <p className="text-2xl text-orange-500">
          A mixtape of my hobby projects.
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        {navItems.map(({ label, href, color, className }, idx) => (
          <a
            key={idx}
            href={href}
            className={`link-hover diagonal-edge font-header w-11/12 p-8 text-white text-4xl text-[${darken(
              color
            )}] ${className}`}
            style={{ backgroundColor: color }}
          >
            {idx + 1}. {label}
          </a>
        ))}
      </div>
      <p className="text-orange-500 text-lg p-4">
        © 2025 <span className="font-bold">Jason Torres.</span> I'm a London
        based <span className="font-bold">CTO, Founder, and Developer.</span>
        <br />
        More about me{' '}
        <a href="https://www.jasontorres.com" className="text-white">
          here
        </a>{' '}
        and{' '}
        <a href="https://www.neonplayground.co.uk" className="text-white">
          neon playground
        </a>
        {'. '}
      </p>
    </div>
  )
}

export default App
