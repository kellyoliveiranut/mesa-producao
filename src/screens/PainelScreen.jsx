import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { C } from "../theme";
import { PAINEL, IDEAS, STORIES } from "../painelData";

const GREEN = "#2F6B4F";
const PURPLE = "#6A2C7A";
const whoColor = (w) => (w === "h" ? GREEN : w === "c" ? PURPLE : C.border);

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function plainText(i) {
  return `${i.id} · ${i.persona} · ${i.p} · ${i.f}\nGancho: ${i.hook}\n\nRoteiro:\n${i.roteiro.map((s, k) => `${k + 1}. ${s}`).join("\n")}\n\nLegenda:\n${i.legenda}\n\nChamada: ${i.cta}`;
}

const card = { background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "16px 18px", boxShadow: C.sh };
const h2 = { fontWeight: 600, fontSize: 19, color: C.text, fontFamily: C.serif, margin: "0 0 10px" };
const h3 = { fontWeight: 600, fontSize: 14.5, color: C.text, margin: "0 0 8px" };
const label = { fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: C.muted, display: "block", marginBottom: 4 };
const small = { fontSize: 12.5, color: C.muted, lineHeight: 1.5, margin: "2px 0 0" };

function Pill({ children, bg, color }) {
  return <span style={{ fontSize: 11.5, fontWeight: 600, padding: "3px 9px", borderRadius: 999, background: bg, color }}>{children}</span>;
}

function Task({ t, checked, onChange }) {
  return (
    <label style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "8px 0", cursor: "pointer" }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ marginTop: 4, width: 17, height: 17, accentColor: C.accent }} />
      <span>
        <span style={{ fontSize: 14, color: C.text, fontWeight: 500, textDecoration: checked ? "line-through" : "none", opacity: checked ? 0.6 : 1 }}>{t.titulo}</span>
        <span style={{ ...small, display: "block" }}>{t.detalhe}</span>
      </span>
    </label>
  );
}

function IdeaCard({ i }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const col = whoColor(i.who);
  const onCopy = async () => {
    if (await copyText(plainText(i))) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };
  return (
    <article style={{ ...card, borderLeft: `4px solid ${col}`, marginBottom: 12 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 8 }}>
        <span style={{ ...label, margin: 0, marginRight: 4 }}>{i.id}</span>
        <Pill bg={col} color="#fff">{i.persona}</Pill>
        <Pill bg="rgba(43,22,13,0.07)" color={C.muted}>{i.p}</Pill>
        <Pill bg="rgba(43,22,13,0.07)" color={C.muted}>{i.f}</Pill>
        <Pill bg="rgba(43,22,13,0.07)" color={C.muted}>{i.n}</Pill>
      </div>
      <p style={{ fontWeight: 600, fontSize: 16, color: C.text, margin: "0 0 10px", lineHeight: 1.4 }}>{i.hook}</p>
      <ol style={{ margin: "0 0 10px", paddingLeft: 20, fontSize: 13.5, color: C.text, lineHeight: 1.55 }}>
        {i.roteiro.map((s, k) => <li key={k}>{s}</li>)}
      </ol>
      <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: C.accent, fontWeight: 600, fontSize: 13.5, marginBottom: 8 }}>
        {open ? "Esconder legenda" : "Ver legenda pronta"}
      </button>
      {open && <div style={{ whiteSpace: "pre-wrap", fontSize: 13.5, color: C.text, lineHeight: 1.6, background: "rgba(43,22,13,0.04)", borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>{i.legenda}</div>}
      <p style={{ fontSize: 13.5, color: C.text, margin: "0 0 12px" }}><b>Chamada:</b> {i.cta}</p>
      <button onClick={onCopy} style={{ display: "flex", alignItems: "center", gap: 7, background: copied ? C.accent : C.dark, border: "none", borderRadius: 10, padding: "8px 14px", cursor: "pointer", color: "#FBF6EC", fontWeight: 600, fontSize: 13 }}>
        {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copiado" : "Copiar roteiro e legenda"}
      </button>
    </article>
  );
}


function StoryItem({ it }) {
  const [copied, setCopied] = useState(false);
  const col = whoColor(it.who);
  const text = `${it.label}\n\n${it.frames.join("\n")}`;
  const onCopy = async () => {
    if (await copyText(text)) { setCopied(true); setTimeout(() => setCopied(false), 1800); }
  };
  return (
    <div style={{ ...card, borderLeft: `4px solid ${col}`, marginBottom: 10 }}>
      <h3 style={h3}>{it.label}</h3>
      <ul style={{ margin: "0 0 12px", paddingLeft: 18, fontSize: 13.5, color: C.text, lineHeight: 1.55 }}>
        {it.frames.map((f, k) => <li key={k}>{f}</li>)}
      </ul>
      <button onClick={onCopy} style={{ display: "flex", alignItems: "center", gap: 7, background: copied ? C.accent : C.dark, border: "none", borderRadius: 10, padding: "8px 14px", cursor: "pointer", color: "#FBF6EC", fontWeight: 600, fontSize: 13 }}>
        {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

function StoriesLibrary() {
  const [open, setOpen] = useState("frameworks");
  return (
    <div style={{ marginBottom: 28 }}>
      {STORIES.map((b) => (
        <div key={b.id} style={{ ...card, padding: 0, marginBottom: 12, overflow: "hidden" }}>
          <button onClick={() => setOpen(open === b.id ? null : b.id)} style={{ width: "100%", textAlign: "left", background: "none", border: "none", padding: "15px 18px", cursor: "pointer" }}>
            <div style={{ fontWeight: 600, fontSize: 15, color: C.text }}>{b.titulo}</div>
            <div style={{ fontSize: 12.5, color: C.muted, marginTop: 2 }}>{b.sub} · {b.itens.length} itens</div>
          </button>
          {open === b.id && <div style={{ padding: "0 14px 6px" }}>{b.itens.map((it) => <StoryItem key={it.label} it={it} />)}</div>}
        </div>
      ))}
    </div>
  );
}

export default function PainelScreen({ isDesktop }) {
  const pad = isDesktop ? "32px" : "22px 16px";
  const taskKey = "essentia-tarefas-" + PAINEL.dataLabel;
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem(taskKey) || "{}"); } catch { return {}; }
  });
  const [who, setWho] = useState("todas");

  const toggle = (id) => {
    const next = { ...done, [id]: !done[id] };
    setDone(next);
    try { localStorage.setItem(taskKey, JSON.stringify(next)); } catch { /* ignora */ }
  };

  const chip = (tipo) => (tipo === "ok" ? { bg: "rgba(47,107,79,0.14)", c: GREEN } : tipo === "warn" ? { bg: "rgba(200,164,58,0.22)", c: "#7A5A00" } : { bg: "rgba(43,22,13,0.07)", c: C.muted });
  const tagColor = (t) => (t === "Ação" ? "#B3402B" : t === "Pacientes" ? PURPLE : t === "Prazo" ? "#7A5A00" : C.muted);
  const ideas = IDEAS.filter((i) => who === "todas" || i.who === who);
  const grid2 = isDesktop ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } : { display: "grid", gap: 12 };

  return (
    <div style={{ padding: pad, maxWidth: 880, margin: "0 auto" }}>
      <span style={label}>Essentia · Kelly Oliveira · {PAINEL.dataLabel}</span>
      <span style={{ fontWeight: 600, fontSize: 24, color: C.text, display: "block", marginBottom: 12, fontFamily: C.serif, letterSpacing: "-0.01em" }}>Painel Essentia</span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
        {PAINEL.resumo.map((r, k) => { const s = chip(r.tipo); return <Pill key={k} bg={s.bg} color={s.c}>{r.texto}</Pill>; })}
      </div>

      {/* Hoje */}
      <h2 style={h2}>O que te espera hoje</h2>
      <div style={{ ...grid2, marginBottom: 12 }}>
        <div style={card}>
          <h3 style={h3}>Agenda</h3>
          <p style={{ ...small, fontSize: 13.5 }}>{PAINEL.agenda}</p>
        </div>
        <div style={card}>
          <h3 style={h3}>Tarefas de hoje</h3>
          {PAINEL.tarefas.map((t) => <Task key={t.id} t={t} checked={!!done[t.id]} onChange={() => toggle(t.id)} />)}
        </div>
      </div>
      <div style={{ ...card, marginBottom: 28 }}>
        <h3 style={h3}>E-mails recentes não lidos</h3>
        {PAINEL.emails.map((e, k) => (
          <p key={k} style={{ fontSize: 13.5, color: C.text, lineHeight: 1.5, margin: "0 0 8px" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: tagColor(e.tag), marginRight: 6 }}>{e.tag.toUpperCase()}</span>
            <b>{e.nome}:</b> {e.texto}
          </p>
        ))}
      </div>

      {/* Radar */}
      <h2 style={h2}>Nutrição em oncologia no Instagram</h2>
      <div style={{ ...grid2, marginBottom: 12 }}>
        {PAINEL.personas.map((p) => (
          <div key={p.id} style={{ ...card, borderLeft: `4px solid ${whoColor(p.id)}` }}>
            <h3 style={h3}>{p.titulo}</h3>
            <p style={small}>{p.texto}</p>
          </div>
        ))}
      </div>
      <div style={{ ...grid2, marginBottom: 12 }}>
        {PAINEL.radar.map((r, k) => (
          <div key={k} style={card}>
            <h3 style={h3}>{r.titulo}</h3>
            <p style={{ fontSize: 13.5, color: C.text, lineHeight: 1.55, margin: "0 0 8px" }}>{r.texto}</p>
            <p style={{ fontSize: 13.5, color: C.accent, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>Fazer agora: {r.fazer}</p>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 12.5, color: C.muted, background: "rgba(165,106,46,0.10)", borderRadius: 12, padding: "12px 14px", lineHeight: 1.55, marginBottom: 28 }}>
        <b>Limite deste radar:</b> {PAINEL.limite}
      </div>

      {/* Copys */}
      <h2 style={h2}>12 posts de nutrição oncológica</h2>
      <p style={{ ...small, fontSize: 13.5, marginBottom: 12 }}>Escritas com o vocabulário e os níveis de consciência da Helena e da Cláudia. Abra a legenda, ajuste a sua voz e copie.</p>
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        {[["todas", "Todas"], ["h", "Helena"], ["c", "Cláudia"]].map(([id, nome]) => (
          <button key={id} onClick={() => setWho(id)} aria-pressed={who === id} style={{
            border: `1px solid ${who === id ? C.dark : C.border}`, background: who === id ? C.dark : C.card,
            color: who === id ? "#FBF6EC" : C.text, borderRadius: 999, padding: "7px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>{nome}</button>
        ))}
      </div>
      <div style={isDesktop ? { columnCount: 1 } : undefined}>
        {ideas.map((i) => <IdeaCard key={i.id} i={i} />)}
      </div>
      <div style={{ fontSize: 13, color: C.muted, borderTop: `1px solid ${C.border}`, paddingTop: 14, marginBottom: 28, lineHeight: 1.55 }}>
        Antes de postar, confira a Resolução CFN nº 856:
        <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>{PAINEL.regras.map((r, k) => <li key={k}>{r}</li>)}</ul>
      </div>

      {/* Biblioteca de stories */}
      <h2 style={h2}>Biblioteca de Stories</h2>
      <p style={{ ...small, fontSize: 13.5, marginBottom: 12 }}>Cinco blocos para montar os stories da semana, com a Helena (verde) e a Cláudia (roxo). Sem depoimento de paciente, conforme a CFN 856.</p>
      <StoriesLibrary />

      {/* Semana */}
      <span style={label}>{PAINEL.semanaLabel}</span>
      <h2 style={h2}>Calendário sugerido</h2>
      <div style={{ display: "grid", gridTemplateColumns: isDesktop ? "repeat(auto-fit, minmax(200px, 1fr))" : "1fr", gap: 12, marginBottom: 28 }}>
        {PAINEL.semana.map((d, k) => (
          <div key={k} style={{ ...card, borderLeft: `4px solid ${whoColor(d.who)}`, ...(d.who ? {} : { background: "transparent", borderStyle: "dashed" }) }}>
            <span style={label}>{d.dia}</span>
            <h3 style={{ ...h3, marginBottom: 4 }}>{d.titulo}</h3>
            <p style={small}>{d.sub}</p>
          </div>
        ))}
      </div>

      {/* Fontes */}
      <span style={label}>Fontes</span>
      <ul style={{ margin: "0 0 12px", paddingLeft: 18, fontSize: 13, lineHeight: 1.7 }}>
        {PAINEL.fontes.map(([t, u]) => <li key={u}><a href={u} target="_blank" rel="noreferrer" style={{ color: C.accent }}>{t}</a></li>)}
      </ul>
    </div>
  );
}
