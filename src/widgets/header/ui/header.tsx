import { Button } from '@/components/ui/button'

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<div className="h-8 w-8 rounded-lg bg-primary" />
					<span className="text-lg font-semibold">YourApp</span>
				</div>

				{/* Nav */}
				<nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
					<a href="#" className="transition hover:text-foreground">
						Home
					</a>
					<a href="#" className="transition hover:text-foreground">
						Features
					</a>
					<a href="#" className="transition hover:text-foreground">
						About
					</a>
				</nav>

				{/* Actions */}
				<div className="flex items-center gap-3">
					<Button variant="ghost">Sign in</Button>
					<Button>Get started</Button>
				</div>
			</div>
		</header>
	)
}
