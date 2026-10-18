import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Copy, Check, Search } from "lucide-react";
import { C } from "../theme";
import { SCRIPT_GROUPS, SCRIPTS_INTRO } from "../scripts";
import Markdown from "../components/Markdown";

// Copia o texto; se o navegador bloquear, usa um campo temporário
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

function ScriptCard({ item }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    const ok = await copyText(item.text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };
  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px", marginBottom: 10 }}>
      <div style={{ fontSize: 12.5, fontWeight: 600, color: C.accent, marginBottom: 6 }}>{item.label}</div>
      <p style={{ margin: "0 0 12px", fontSize: 14, color: C.text, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{item.text}</p>
      <button onClick={onCopy} style={{
        display: "flex", alignItems: "center", gap: 7, background: copied ? C.accent : C.dark, border: "none",
        borderRadius: 10, padding: "8px 14px", cursor: "pointer", color: "#FBF6EC", fontWeight: 600, fontSize: 13,
      }}>
        {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}

function Category({ cat, open, onToggle }) {
  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, marginBottom: 12, boxShadow: C.sh, overflow: "hidden" }}>
      <button onClick={onToggle} style={{
        width: "100%", display: "flex", alignItems: "center", gap: 10, background: "none", border: "none",
        padding: "15px 16px", cursor: "pointer", textAlign: "left",
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: 15, color: C.text }}>{cat.title}</div>
          <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{cat.items.length} {cat.items.length === 1 ? "script" : "scripts"}</div>
        </div>
        {open ? <ChevronDown size={18} color={C.muted} /> : <ChevronRight size={18} color={C.muted} />}
      </button>
      {open && (
        <div style={{ padding: "0 14px 6px" }}>
          {cat.note && (
            <div style={{ fontSize: 12.5, color: C.muted, background: "rgba(165,106,46,0.10)", borderRadius: 10, padding: "10px 12px", marginBottom: 10, lineHeight: 1.5 }}>{cat.note}</div>
          )}
          {cat.items.map((it) => <ScriptCard key={it.label} item={it} />)}
        </div>
      )}
    </div>
  );
}

export default function ScriptsScreen({ isDesktop, onBack }) {
  const [groupId, setGroupId] = useState(null);
  const [openCat, setOpenCat] = useState(null);
  const [query, setQuery] = useState("");
  const group = SCRIPT_GROUPS.find((g) => g.id === groupId);
  const pad = isDesktop ? "32px" : "22px 16px";
  const q = query.trim().toLowerCase();

  // Busca em todos os scripts
  const results = q
    ? SCRIPT_GROUPS.flatMap((g) => g.categories.flatMap((c) =>
        c.items
          .filter((it) => (it.label + " " + it.text + " " + c.title).toLowerCase().includes(q))
          .map((it) => ({ ...it, label: `${c.title} · ${it.label}` }))
      ))
    : [];

  const backBtn = (fn, label) => (
    <button onClick={fn} style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: C.muted, fontSize: 14, padding: 0, marginBottom: 16 }}>
      <ChevronLeft size={18} /> {label}
    </button>
  );

  if (group && !q) {
    return (
      <div style={{ padding: pad, maxWidth: 820, margin: "0 auto" }}>
        {backBtn(() => { setGroupId(null); setOpenCat(null); }, "Biblioteca")}
        <span style={{ fontWeight: 600, fontSize: 22, color: C.text, display: "block", marginBottom: 4, fontFamily: C.serif }}>{group.title}</span>
        <p style={{ fontSize: 13.5, color: C.muted, marginTop: 0, marginBottom: 18 }}>{group.subtitle}</p>
        {group.categories.map((c) => (
          <Category key={c.id} cat={c} open={openCat === c.id} onToggle={() => setOpenCat(openCat === c.id ? null : c.id)} />
        ))}
      </div>
    );
  }

  return (
    <div style={{ padding: pad, maxWidth: 820, margin: "0 auto" }}>
      {backBtn(onBack, "Skills")}
      <span style={{ fontWeight: 600, fontSize: 22, color: C.text, display: "block", marginBottom: 8, fontFamily: C.serif }}>Biblioteca de Scripts</span>

      <div style={{ position: "relative", marginBottom: 16 }}>
        <Search size={16} color={C.muted} style={{ position: "absolute", left: 13, top: 13 }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar um script (ex.: lembrete, desconto, Natal)"
          style={{ width: "100%", boxSizing: "border-box", border: `1px solid ${C.border}`, background: C.card, borderRadius: 12, padding: "11px 12px 11px 36px", fontSize: 14, color: C.text, outline: "none" }}
        />
      </div>

      {q ? (
        results.length === 0
          ? <p style={{ fontSize: 14, color: C.muted }}>Nenhum script encontrado.</p>
          : results.map((it, i) => <ScriptCard key={i} item={it} />)
      ) : (
        <>
          {SCRIPT_GROUPS.map((g) => (
            <button key={g.id} onClick={() => setGroupId(g.id)} style={{
              width: "100%", textAlign: "left", background: C.card, border: `1px solid ${C.border}`, borderRadius: 16,
              padding: "16px", cursor: "pointer", boxShadow: C.sh, marginBottom: 12, display: "flex", gap: 13, alignItems: "center",
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: C.text, marginBottom: 2 }}>{g.title}</div>
                <div style={{ fontSize: 12.5, color: C.muted }}>{g.subtitle} · {g.categories.length} categorias</div>
              </div>
              <ChevronRight size={18} color={C.muted} style={{ flexShrink: 0 }} />
            </button>
          ))}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: "4px 18px 6px", boxShadow: C.sh, marginTop: 18 }}>
            <Markdown text={SCRIPTS_INTRO} />
          </div>
        </>
      )}
    </div>
  );
}
