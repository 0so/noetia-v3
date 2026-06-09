/* NÓETIAI — divisor: separa el núcleo de inteligencia del portfolio personal */
function PortfolioDivider() {
  return (
    <section className="section portfolio-divider" id="portfolio">
      <div className="wrap">
        <div className="pdiv reveal">
          <div className="pdiv-line" />
          <div className="pdiv-mid">
            <Eyebrow label="Developer & Security Portfolio" tag="quién construye NOETIAI" />
            <h2 className="heading" style={{ marginTop: 14 }}>Detrás del sistema.</h2>
            <p className="lead" style={{ maxWidth: '42rem', marginTop: 12 }}>
              Esto no forma parte del motor de inteligencia financiera. Es el portfolio técnico y de
              seguridad ofensiva de la persona que ha construido NOETIAI — experiencia, proyectos e
              investigación.
            </p>
          </div>
          <div className="pdiv-line" />
        </div>
      </div>
    </section>
  );
}
window.PortfolioDivider = PortfolioDivider;

/* NOETIAI — Módulo 02 (intel de desarrollo) + Módulo 03 (seguridad) */

function langDot(lang) {
  return <span className="lang-dot" style={{ background: LANG_COLOR[lang] || 'rgba(255,255,255,0.4)' }} />;
}

function DevModule({ gh }) {
  return (
    <section className="section" id="modules">
      <div className="wrap">
        <div className="sec-head reveal">
          <Eyebrow label="Developer Portfolio" tag="github" />
          <h2 className="heading" style={{ marginTop: 16 }}>Lo que he construido.</h2>
          <p className="lead" style={{ maxWidth: '42rem', marginTop: 14 }}>
            Experiencia técnica y proyectos, cableado en vivo a
            <span className="data" style={{ color: 'var(--aura-fg)' }}> github.com/{gh.login}</span>.
          </p>
        </div>

        <div className="dev-grid reveal" style={{ marginTop: 32 }}>
          <div className="liquid-glass card pad dev-profile">
            <div className="dp-head">
              <img className="dp-avatar" src={gh.avatar} alt={gh.login}
                onError={(e) => { e.currentTarget.src = 'assets/logo-glow.png'; }} />
              <div>
                <div className="dp-name">{gh.name}</div>
                <a className="dp-login data" href={gh.html_url} target="_blank" rel="noreferrer">@{gh.login}</a>
              </div>
            </div>
            {gh.bio && <p className="dp-bio muted">{gh.bio}</p>}
            <div className="dp-meta field">
              <span><Icon name="MapPin" size={12} /> {gh.location || '—'}</span>
            </div>
            <div className="dp-stats">
              <div><div className="kpi dp-num">{gh.public_repos}</div><div className="field">repos</div></div>
              <div><div className="kpi dp-num">{gh.followers}</div><div className="field">seguidores</div></div>
              <div><div className="kpi dp-num">{gh.following}</div><div className="field">siguiendo</div></div>
            </div>
            <a className="btn btn-ghost dp-cta" href={gh.html_url} target="_blank" rel="noreferrer">
              <Icon name="GitBranch" size={14} /> Ver en GitHub <Icon name="ArrowUpRight" size={14} />
            </a>
          </div>

          <div className="dev-repos">
            <div className="field dev-col-h">Actualizados recientemente</div>
            {gh.repos.map(r => (
              <a className="liquid-glass card pad repo" key={r.name} href={`${gh.html_url}/${r.name}`} target="_blank" rel="noreferrer">
                <div className="repo-top">
                  <span className="repo-name data"><Icon name="GitBranch" size={13} style={{ color: 'var(--accent)' }} /> {r.name}</span>
                  <span className="repo-stats field">
                    {r.lang && <span>{langDot(r.lang)}{r.lang}</span>}
                    <span><Icon name="Star" size={11} /> {r.stars}</span>
                    <span><Icon name="GitFork" size={11} /> {r.forks}</span>
                  </span>
                </div>
                {r.desc && <p className="repo-desc muted">{r.desc}</p>}
                <div className="field repo-foot">push hace {r.pushed ? timeAgo(r.pushed) : '—'}</div>
              </a>
            ))}
          </div>

          <div className="liquid-glass card pad dev-feed">
            <div className="field dev-col-h">Stream de actividad</div>
            <div className="feed">
              {gh.events.map((e, i) => (
                <div className="feed-item" key={i}>
                  <span className="feed-dot"><Icon name={eventIcon(e.type)} size={12} /></span>
                  <div className="feed-body">
                    <div className="feed-text"><span className="data feed-detail">{e.detail}</span> {e.repo && <span className="muted">· {e.repo}</span>}</div>
                    <div className="field">hace {timeAgo(e.when)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function eventIcon(t) {
  return ({ PushEvent: 'GitCommit', CreateEvent: 'GitBranch', WatchEvent: 'Star', ForkEvent: 'GitFork',
    PullRequestEvent: 'GitBranch', IssuesEvent: 'Bug', ReleaseEvent: 'Sparkles' })[t] || 'GitCommit';
}

/* ---- Módulo 03: seguridad — attack intelligence cards ---- */
function SecModule() {
  const counts = WRITEUPS.reduce((a, w) => { a[w.os] = (a[w.os] || 0) + 1; return a; }, {});
  const byDiff = WRITEUPS.reduce((a, w) => { a[w.diff] = (a[w.diff] || 0) + 1; return a; }, {});
  return (
    <section className="section" id="research">
      <div className="wrap">
        <div className="sec-head reveal">
          <Eyebrow label="Security Portfolio" tag="hack the box" />
          <h2 className="heading" style={{ marginTop: 16 }}>Investigación ofensiva.</h2>
          <p className="lead" style={{ maxWidth: '44rem', marginTop: 14 }}>
            Vitrina profesional de conocimiento técnico — máquinas resueltas, técnicas y CVEs,
            indexadas desde writeups reales en
            <span className="data" style={{ color: 'var(--aura-fg)' }}> 0so.github.io</span>.
          </p>
        </div>

        <div className="sec-stats reveal" style={{ marginTop: 28 }}>
          <div className="liquid-glass card pad ss"><div className="kpi ss-num">{WRITEUPS.length}</div><div className="field">máquinas documentadas</div></div>
          <div className="liquid-glass card pad ss"><div className="kpi ss-num">{counts.Linux || 0}<span className="ss-sub">/{counts.Windows || 0}</span></div><div className="field">linux / windows</div></div>
          <div className="liquid-glass card pad ss"><div className="kpi ss-num">{WRITEUPS.reduce((a, w) => a + w.tags.length, 0)}</div><div className="field">técnicas y CVEs</div></div>
          <div className="liquid-glass card pad ss"><div className="kpi ss-num">{byDiff.Medium || 0}<span className="ss-sub">/{byDiff.Easy || 0}</span></div><div className="field">media / fácil</div></div>
        </div>

        <div className="htb-grid reveal" style={{ marginTop: 24 }}>
          {WRITEUPS.map(w => (
            <a className="liquid-glass card pad htb" key={w.name} href={w.url} target="_blank" rel="noreferrer">
              <div className="htb-top">
                <span className="htb-name"><Icon name="Crosshair" size={14} style={{ color: 'var(--accent)' }} /> {w.name}</span>
                <span className="htb-cls" style={{ color: CLASS_COLOR[w.cls] || 'var(--accent)', borderColor: 'currentColor' }}>{w.cls}</span>
              </div>
              <div className="htb-tags">
                {w.tags.slice(0, 4).map(t => <span className="htb-tag data" key={t}>{t}</span>)}
              </div>
              <div className="htb-foot">
                <span className={'os-badge os-' + w.os.toLowerCase()}>{w.os}</span>
                <span className={'diff diff-' + w.diff.toLowerCase()}>{w.diff === 'Easy' ? 'Fácil' : w.diff === 'Medium' ? 'Media' : 'Difícil'}</span>
                <span className="htb-read">leer <Icon name="ArrowUpRight" size={12} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.DevModule = DevModule;
window.SecModule = SecModule;
