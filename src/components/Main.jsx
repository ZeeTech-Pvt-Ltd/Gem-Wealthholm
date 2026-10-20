/**
 * Page-level <main> wrapper. Lives in each page (not the layout) so
 * page sections stay direct children of <main> - required by the
 * `main > section` content-visibility rule in base.css. `home` adds
 * the .main--home class that keeps the footer below the fold while
 * the home page's deferred sections render (server-rendered, so the
 * CLS guard is present in the first paint).
 */
export default function Main({ home = false, children }) {
  return <main className={home ? 'main--home' : undefined}>{children}</main>
}
