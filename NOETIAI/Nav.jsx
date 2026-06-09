/* NOETIAI — navegación superior fija */
function Nav({ status }) {
  const [open, setOpen] = React.useState(false);
  const [solid, setSolid] = React.useState(false);
  const links = [
    ['Inteligencia', '#terminal'],
    ['Memoria', '#memory'],
    ['Portfolio', '#portfolio'],
    ['Tesis', '#thesis'],
  ];
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={'nav' + (solid ? ' solid' : '')} id="top">
      <div className="nav-inner wrap">
        <Logo size={28} />
        <nav className="nav-links">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="nav-link">{l}</a>
          ))}
        </nav>
        <div className="nav-right">
          <span className={'live' + (status === 'cached' ? ' cached' : '')} title="Feed de datos en vivo">
            <span className="pulse" />
            {status === 'live' ? 'EN VIVO' : status === 'cached' ? 'CACHÉ' : 'SYNC'}
          </span>
          <Button kind="accent" href="#terminal" chevron>Entrar a Terminal</Button>
          <button className="nav-burger" aria-label="Menú" onClick={() => setOpen(o => !o)}>
            <Icon name={open ? 'X' : 'Menu'} size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-mobile">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="nav-link" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <Button kind="accent" href="#terminal" onClick={() => setOpen(false)} chevron>Entrar a Terminal</Button>
        </div>
      )}
    </header>
  );
}
window.Nav = Nav;
