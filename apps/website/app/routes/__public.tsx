import { Link, Form, Outlet } from '@remix-run/react';
import { HiHeart } from 'react-icons/hi';
import Button from '~/components/Button';

export default function PublicLayout() {
  return (
    <div className="font-sans">
      <header className="bg-primary h-16">
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link to="/" className="text-white text-lg flex-1 justify-start">
            <span className="text-xs text-slate-500">https://</span>
            <span className="font-bold">Linkcito</span>
            <span className="text-xs text-slate-500">.com</span>
          </Link>

          <Form method="post" action="/auth/discord">
            <Button>Login</Button>
          </Form>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-80px-64px)] bg-primary text-gray">
        <Outlet />
      </main>

      <footer className="text-center py-4 flex justify-center h-[80px] bg-secondary text-gray">
        <p className="flex items-center gap-1">
          Made with <HiHeart className="text-red-500" />
          by{' '}
          <a
            href="https://github.com/Fedeya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Fedeya
          </a>
        </p>
      </footer>
    </div>
  );
}
