import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-muted">
      <div className="max-w-360 mx-auto grid gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">YourApp</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Building small things that feel great to use.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-medium">Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-medium">Social</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-foreground">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      <div className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} YourApp. All rights reserved.
      </div>
    </footer>
  )
}
