# 📐 Spacing & Layout - DSCamargo Design System

## Filosofia
- **Mobile First:** Desenvolver primeiro para mobile, depois expandir
- **Consistência:** Usar escala de espaçamento baseada em 4px
- **Respiração:** Espaço generoso entre seções para clareza visual

---

## Escala de Espaçamento

Base: **4px** (0.25rem)

| Token | Valor | Pixels | Uso Comum |
|-------|-------|--------|-----------|
| `--space-0` | 0 | 0px | Reset |
| `--space-1` | 0.25rem | 4px | Gaps mínimos |
| `--space-2` | 0.5rem | 8px | Padding interno pequeno |
| `--space-3` | 0.75rem | 12px | Gaps entre elementos inline |
| `--space-4` | 1rem | 16px | **Padrão - padding/margin** |
| `--space-5` | 1.25rem | 20px | Padding de cards |
| `--space-6` | 1.5rem | 24px | Gap entre cards |
| `--space-8` | 2rem | 32px | Margem entre blocos |
| `--space-10` | 2.5rem | 40px | Padding de seções |
| `--space-12` | 3rem | 48px | Separação de seções |
| `--space-16` | 4rem | 64px | Margem de seções grandes |
| `--space-20` | 5rem | 80px | **Padding de seções principais** |
| `--space-24` | 6rem | 96px | Hero sections |

---

## Breakpoints (Mobile First)

| Nome | Valor | Descrição |
|------|-------|-----------|
| `--breakpoint-sm` | 576px | Smartphones landscape |
| `--breakpoint-md` | 768px | Tablets |
| `--breakpoint-lg` | 992px | Laptops |
| `--breakpoint-xl` | 1200px | Desktops |
| `--breakpoint-2xl` | 1400px | Telas grandes |

### Media Queries (Mobile First)
```css
/* Base: Mobile (< 576px) */

/* Small devices (landscape phones) */
@media (min-width: 576px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) { }

/* Large devices (laptops) */
@media (min-width: 992px) { }

/* Extra large devices (desktops) */
@media (min-width: 1200px) { }

/* XXL devices (large desktops) */
@media (min-width: 1400px) { }
```

---

## Grid System

### Container
| Breakpoint | Max-Width |
|------------|-----------|
| < 576px | 100% (padding: 16px) |
| ≥ 576px | 540px |
| ≥ 768px | 720px |
| ≥ 992px | 960px |
| ≥ 1200px | 1140px |
| ≥ 1400px | 1320px |

### Colunas
- Sistema de **12 colunas** (compatível com Bootstrap)
- Gap padrão: `--space-6` (24px)
- Gap mobile: `--space-4` (16px)

---

## Border Radius

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-none` | 0 | Sem arredondamento |
| `--radius-sm` | 0.25rem (4px) | Badges pequenos |
| `--radius-md` | 0.5rem (8px) | Inputs de formulário |
| `--radius-lg` | 0.75rem (12px) | Elementos menores |
| `--radius-xl` | 1rem (16px) | **Cards, caixas, containers** |
| `--radius-2xl` | 1.5rem (24px) | Seções grandes |
| `--radius-full` | 9999px | **BOTÕES (obrigatório)** |

### ⚠️ Regra de Border Radius (OBRIGATÓRIA)

| Tipo de Elemento | Border Radius |
|------------------|---------------|
| **Botões (todos)** | `--radius-full` |
| **Cards/Containers** | `--radius-xl` |
| **Inputs** | `--radius-md` |

> 🎯 **Botões SEMPRE redondos** (`--radius-full`), **Caixas com cantos suaves** (`--radius-xl`).

---

## Shadows

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Hover sutil |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 25px rgba(0,0,0,0.1)` | **Cards em destaque** |
| `--shadow-xl` | `0 20px 40px rgba(0,0,0,0.12)` | Modais, popovers |
| `--shadow-glow` | `0 0 30px rgba(75,121,161,0.3)` | Efeito glow azul |
| `--shadow-glow-cyan` | `0 0 30px rgba(6,182,212,0.3)` | Efeito glow inovação |

---

## Z-Index Scale

| Token | Valor | Uso |
|-------|-------|-----|
| `--z-base` | 0 | Elementos base |
| `--z-dropdown` | 100 | Dropdowns, tooltips |
| `--z-sticky` | 200 | Headers sticky |
| `--z-fixed` | 300 | Elementos fixos |
| `--z-modal-backdrop` | 400 | Backdrop de modais |
| `--z-modal` | 500 | Modais |
| `--z-popover` | 600 | Popovers |
| `--z-toast` | 700 | Notificações toast |

---

## CSS Variables

```css
:root {
  /* Spacing Scale */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 40px rgba(0,0,0,0.12);
  
  /* Container */
  --container-padding: var(--space-4);
  --section-padding: var(--space-20);
}

@media (min-width: 768px) {
  :root {
    --container-padding: var(--space-6);
  }
}
```
