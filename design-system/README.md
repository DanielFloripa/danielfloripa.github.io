# 🎨 DSCamargo Design System

Sistema de design unificado para todas as propriedades web de Daniel Scheidemantel Camargo.

## 📁 Estrutura

```
design-system/
├── README.md                 # Este arquivo
├── variables.css             # Todas as variáveis CSS prontas para uso
├── 1-BRAND-FOUNDATION.md     # Missão, valores, tom de voz
├── 2-COLOR-PALETTE.md        # Cores primárias, secundárias, semânticas
├── 3-TYPOGRAPHY.md           # Famílias de fontes, escalas, pesos
├── 4-SPACING-LAYOUT.md       # Grid, espaçamentos, breakpoints
├── 5-COMPONENTS.md           # Botões, cards, forms, navegação
├── 6-ANIMATIONS.md           # Efeitos, transições, durações
└── 7-ICONS-IMAGERY.md        # Estilo de ícones, uso de imagens
```

---

## 🚀 Quick Start

### 1. Importar as variáveis CSS

```html
<!-- No <head> do HTML -->
<link rel="stylesheet" href="design-system/variables.css">
```

Ou via CSS:
```css
@import url('design-system/variables.css');
```

### 2. Fontes (System Font Stack)

Não é necessário importar fontes externas. Usa as fontes nativas de cada sistema:

```css
/* Já incluído no variables.css */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### 3. Usar as variáveis

```css
.meu-botao {
  background: var(--primary-600);
  color: var(--white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-family-primary);
  transition: all var(--duration-normal) var(--ease-out);
}

.meu-botao:hover {
  background: var(--primary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

---

## 🎯 Resumo Rápido

### Cores Principais
| Uso | Variável | Hex |
|-----|----------|-----|
| **Principal** | `--primary-600` | #4B79A1 |
| **Inovação** | `--cyan-500` | #06B6D4 |
| **Humanidade** | `--violet-500` | #8B5CF6 |
| **Texto** | `--gray-800` | #1F2937 |
| **Fundo** | `--gray-50` | #F9FAFB |

### Fontes
- **Principal:** `var(--font-family-primary)` → System Font Stack
- **Código:** `var(--font-family-mono)` → System Mono Stack

### Espaçamento Comum
- `--space-4` (16px) - Padding padrão
- `--space-6` (24px) - Gap entre cards
- `--space-20` (80px) - Padding de seções

### Border Radius (REGRA OBRIGATÓRIA)
| Elemento | Variável |
|----------|----------|
| **Botões** | `--radius-full` (redondo) |
| **Cards/Containers** | `--radius-xl` (16px) |
| **Inputs** | `--radius-md` (8px) |

---

## 📋 Checklist de Implementação

Ao criar nova página, verificar:

- [ ] Importou `variables.css`?
- [ ] Está usando `var(--font-family-primary)`?
- [ ] Cores seguem a paleta definida?
- [ ] Botões usam `--radius-md`?
- [ ] Cards usam `--radius-lg`?
- [ ] Transições usam `--duration-normal`?
- [ ] GSAP ScrollTrigger está configurado?
- [ ] Elementos têm classes `gsap-fade-up`?
- [ ] Imagens têm `loading="lazy"`?
- [ ] Layout é mobile-first?

---

## 🤖 Para IAs

### Contexto
Este Design System define a identidade visual de **DSCamargo**, um desenvolvedor de software brasileiro. O estilo é:
- **Tom:** Formal, técnico, corporativo
- **Visual:** Moderno, detalhado, profissional
- **Cores:** Azul como base, ciano para inovação, violeta para humanidade
- **Fonte:** System Font Stack (nativa de cada SO)
- **Animações:** Sutis, baseadas em scroll (GSAP)
- **Layout:** Mobile-first, cantos arredondados

### Regras Importantes
1. **NÃO usar:** laranja, amarelo, vermelho (exceto erros)
2. **Gradientes:** apenas em CTAs e destaques
3. **Contraste:** sempre alto (WCAG AA mínimo)
4. **Animações:** suaves, max 800ms
5. **Capellaris:** segue mesma identidade

### Variáveis Mais Usadas
```css
/* Cores */
var(--primary-600)      /* Ações principais */
var(--gradient-innovation)  /* CTAs especiais */

/* Tipografia */
var(--font-family-primary)
var(--font-weight-bold)

/* Espaçamento */
var(--space-4)   /* padding padrão */
var(--space-20)  /* padding seções */

/* Outros */
var(--radius-lg)        /* cards */
var(--shadow-lg)        /* elevação */
var(--duration-normal)  /* transições */
```

---

## 📝 Changelog

### v1.0.0 (Janeiro 2026)
- Criação inicial do Design System
- Definição de paleta de cores
- Especificação tipográfica (Ubuntu)
- Sistema de espaçamento
- Componentes base
- Guia de animações
- Documentação completa

---

**Criado por:** Daniel Scheidemantel Camargo  
**Última atualização:** Janeiro 2026
