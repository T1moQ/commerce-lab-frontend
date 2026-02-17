import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="mx-auto flex h-14 max-w-360 items-center justify-between px-3 lg:h-16 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-primary-foreground/20 lg:h-8 lg:w-8" />
          <span className="text-sm font-semibold lg:text-lg">Commerce Lab</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm text-primary-foreground/80 lg:flex">
          <a href="#" className="transition hover:text-white">
            Home
          </a>
          <a href="#" className="transition hover:text-white">
            Features
          </a>
          <a href="#" className="transition hover:text-white">
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" className="hidden lg:inline-flex">
            Sign in
          </Button>
          <Button size="sm" className="lg:size-default">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
