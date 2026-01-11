# 🖼️ Icons & Imagery - DSCamargo Design System

## Ícones

### Biblioteca Padrão: Font Awesome 6
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Tamanhos de Ícone

| Classe | Tamanho | Uso |
|--------|---------|-----|
| `.fa-sm` | 0.875em | Ícones inline com texto pequeno |
| (default) | 1em | **Padrão** - inline com texto |
| `.fa-lg` | 1.33em | Destaque leve |
| `.fa-xl` | 1.5em | Cards, listas |
| `.fa-2x` | 2em | Features, destaques |
| `.fa-3x` | 3em | Hero sections, headers |

### Estilos de Ícone

| Estilo | Prefixo | Uso |
|--------|---------|-----|
| Solid | `fas` | **Padrão** - ações, UI |
| Regular | `far` | Estados vazios, outlines |
| Brands | `fab` | Logos de marcas (GitHub, LinkedIn) |

### Cores de Ícone
```css
/* Ícone primário */
.icon-primary { color: var(--primary-600); }

/* Ícone em contexto escuro */
.icon-light { color: var(--white); }

/* Ícone secundário */
.icon-muted { color: var(--gray-500); }

/* Ícone de destaque */
.icon-accent { color: var(--cyan-500); }
```

### Ícones Frequentes

| Contexto | Ícone | Classe |
|----------|-------|--------|
| Home | 🏠 | `fa-home` |
| Portfolio | 💼 | `fa-briefcase` |
| Capellaris | 🚀 | `fa-rocket` |
| Papers | 📰 | `fa-newspaper` |
| Curriculum | 📋 | `fa-file-alt` |
| Contact | ✉️ | `fa-envelope` |
| Blog | ✏️ | `fa-edit` |
| Download | ⬇️ | `fa-download` |
| External Link | 🔗 | `fa-external-link-alt` |
| GitHub | | `fab fa-github` |
| LinkedIn | | `fab fa-linkedin` |
| WhatsApp | | `fab fa-whatsapp` |

---

## Imagens

### Formatos Recomendados

| Tipo | Formato | Uso |
|------|---------|-----|
| **Logos** | SVG | Vetorial, escalável |
| **Fotos** | WebP (fallback JPG) | Compressão otimizada |
| **Ilustrações** | SVG ou PNG | Transparência |
| **Ícones custom** | SVG | Inline ou sprite |

### Otimização

```html
<!-- Imagem responsiva com lazy loading -->
<img 
  src="image.webp" 
  alt="Descrição clara da imagem"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
>

<!-- Picture com fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Descrição" loading="lazy">
</picture>
```

### Aspect Ratios

| Nome | Ratio | Uso |
|------|-------|-----|
| Square | 1:1 | Avatares, ícones |
| Landscape | 16:9 | Hero images, banners |
| Portrait | 3:4 | Cards de perfil |
| Wide | 21:9 | Headers cinematográficos |

---

## Logos

### Logo Principal (DSCamargo)
- Arquivo: `assets/images/dsc_white.svg`
- Versões: Branco (para fundos escuros)
- Tamanho mínimo: 32px de altura

### Logo Capellaris
- Arquivo: `assets/images/capellaris_v3.svg`
- Aplicar mesmas regras do logo principal

### Uso de Logos
```css
.logo {
  height: 40px;
  width: auto;
}

.logo-sm { height: 32px; }
.logo-lg { height: 56px; }
```

---

## Tratamento de Imagens

### Estilo de Fotos
```css
.img-profile {
  border-radius: var(--radius-full);
  object-fit: cover;
  box-shadow: var(--shadow-md);
}

.img-card {
  border-radius: var(--radius-lg);
  object-fit: cover;
}

.img-hero {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

### Overlays
```css
/* Overlay escuro para texto sobre imagem */
.img-overlay-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

/* Overlay com cor da marca */
.img-overlay-brand::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(75, 121, 161, 0.8) 0%,
    rgba(40, 62, 81, 0.9) 100%
  );
}
```

---

## Ilustrações e Gráficos

### Estilo
- Linhas limpas e modernas
- Usar cores da paleta definida
- Preferir SVG para escalabilidade
- Manter consistência com o tom técnico/corporativo

### Particles.js (Background Hero)
```json
{
  "particles": {
    "color": {
      "value": ["#ffffff", "#00B0FF", "#64FFDA", "#E0E7FF"]
    },
    "line_linked": {
      "color": "#64FFDA",
      "opacity": 0.15
    },
    "move": {
      "speed": 1.2
    }
  }
}
```

---

## Regras de Uso

### ✅ Fazer
- Sempre incluir `alt` descritivo em imagens
- Usar `loading="lazy"` para imagens abaixo da dobra
- Preferir SVG para logos e ícones
- Manter proporções consistentes em grids de imagens

### ❌ Evitar
- Imagens pixeladas ou de baixa qualidade
- Textos importantes dentro de imagens (acessibilidade)
- Ícones decorativos sem significado semântico
- Imagens muito pesadas (>200KB para web)
