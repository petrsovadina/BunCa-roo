import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-serif text-primary">Stránka nenalezena</h2>
        <p className="mt-2 text-primary/70">
          Omlouváme se, ale požadovaná stránka nebyla nalezena.
        </p>
        <div className="mt-6">
          <Link href="/" className="btn btn-primary">
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </div>
  )
}