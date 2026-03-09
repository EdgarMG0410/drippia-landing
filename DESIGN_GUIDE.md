# Guía de Diseño - Drippia

## 🎨 Paleta de Colores

### Colores Principales
```css
--carbon-black: #1C1C1C;      /* Negro principal - Textos, fondos oscuros */
--alabaster-grey: #DADDD8;    /* Gris claro - Fondos secundarios */
--soft-linen: #ECEBE4;        /* Beige suave - Fondos de formularios */
--platinum: #EEF0F2;          /* Gris platino - Pills, badges */
--ghost-white: #FAFAFF;       /* Blanco fantasma - Fondo principal */
```

### Colores de Acento
```css
--accent-blue: #42A5F5;       /* Azul - Iconos de agua */
--accent-orange: #FFA726;     /* Naranja - Iconos de tiempo */
```

### Uso de Colores

**Fondos:**
- Fondo principal de la app: `ghost-white` (#FAFAFF)
- Cards y contenedores: `soft-linen` (#ECEBE4)
- Elementos destacados: `carbon-black` (#1C1C1C)

**Textos:**
- Texto principal: `carbon-black` (#1C1C1C)
- Texto secundario: `carbon-black` con 60% opacidad
- Texto sobre fondos oscuros: `#FFFFFF`

**Botones:**
- Primario: Fondo `carbon-black`, texto blanco
- Secundario: Borde `carbon-black`, texto `carbon-black`
- Deshabilitado: `alabaster-grey` con 50% opacidad

---

## 📐 Tipografía

### Jerarquía de Texto

```css
/* Headlines */
--headline-large: 32px / 700 / carbon-black
--headline-medium: 28px / 700 / carbon-black
--headline-small: 24px / 700 / carbon-black

/* Titles */
--title-large: 22px / 600 / carbon-black
--title-medium: 18px / 600 / carbon-black
--title-small: 16px / 600 / carbon-black

/* Body */
--body-large: 16px / 400 / carbon-black
--body-medium: 14px / 400 / carbon-black
--body-small: 12px / 400 / carbon-black

/* Labels */
--label-large: 14px / 600 / carbon-black
--label-medium: 12px / 600 / carbon-black
--label-small: 11px / 600 / carbon-black
```

### Fuentes Recomendadas
- **Sans-serif moderna:** Inter, SF Pro, Roboto
- **Alternativa:** Poppins, Montserrat

---

## 🔲 Espaciado y Layout

### Sistema de Espaciado (múltiplos de 4px)
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

### Padding de Componentes
- **Cards pequeñas:** 16px
- **Cards medianas:** 24px
- **Cards grandes:** 32px
- **Botones:** 16px vertical, 24px horizontal
- **Inputs:** 12px vertical, 16px horizontal

### Border Radius
```css
--radius-sm: 8px;    /* Pills pequeños */
--radius-md: 12px;   /* Inputs, badges */
--radius-lg: 16px;   /* Cards, botones */
--radius-xl: 20px;   /* Contenedores grandes */
--radius-2xl: 28px;  /* Cards destacadas */
```

---

## 🎯 Componentes Clave

### 1. Botones

**Primario:**
```css
background: #1C1C1C;
color: #FFFFFF;
padding: 16px 24px;
border-radius: 14px;
font-weight: 700;
font-size: 16px;
```

**Secundario:**
```css
background: transparent;
color: #1C1C1C;
border: 2px solid #1C1C1C;
padding: 16px 24px;
border-radius: 14px;
font-weight: 600;
font-size: 16px;
```

**Hover States:**
- Primario: Opacidad 90%
- Secundario: Fondo `soft-linen`

### 2. Cards

**Card Estándar:**
```css
background: #ECEBE4;
border-radius: 16px;
padding: 24px;
box-shadow: 0 2px 8px rgba(28, 28, 28, 0.08);
```

**Card Destacada (Negra):**
```css
background: #1C1C1C;
color: #FFFFFF;
border-radius: 28px;
padding: 32px;
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
```

### 3. Inputs

```css
background: #ECEBE4;
border: 1px solid rgba(28, 28, 28, 0.1);
border-radius: 14px;
padding: 12px 16px;
font-size: 16px;
color: #1C1C1C;

/* Focus */
border-color: #1C1C1C;
border-width: 2px;
```

### 4. Pills / Badges

```css
background: #EEF0F2;
color: #1C1C1C;
padding: 6px 12px;
border-radius: 20px;
font-size: 12px;
font-weight: 600;
```

---

## 🌊 Animaciones

### Transiciones Suaves
```css
transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
```

### Animaciones de Entrada
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

animation: fadeIn 400ms ease-out;
```

### Hover Effects
```css
/* Elevación sutil */
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(28, 28, 28, 0.12);
```

---

## 📱 Responsive Design

### Breakpoints
```css
--mobile: 320px - 767px;
--tablet: 768px - 1023px;
--desktop: 1024px+;
```

### Grid System
```css
/* Mobile: 1 columna */
grid-template-columns: 1fr;
gap: 16px;

/* Tablet: 2 columnas */
grid-template-columns: repeat(2, 1fr);
gap: 24px;

/* Desktop: 3-4 columnas */
grid-template-columns: repeat(3, 1fr);
gap: 32px;
```

---

## 🎨 Ejemplos de Uso

### Hero Section
```html
<section class="hero">
  <h1>Perfecciona tu café</h1>
  <p>Guías paso a paso con IA para preparaciones excepcionales</p>
  <button class="btn-primary">Comenzar gratis</button>
</section>

<style>
.hero {
  background: linear-gradient(135deg, #1C1C1C 0%, #3A3A3A 100%);
  color: #FFFFFF;
  padding: 80px 24px;
  text-align: center;
  border-radius: 0 0 32px 32px;
}

.hero h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
}

.hero p {
  font-size: 20px;
  opacity: 0.8;
  margin-bottom: 32px;
}
</style>
```

### Feature Card
```html
<div class="feature-card">
  <div class="icon">☕</div>
  <h3>Recetas con IA</h3>
  <p>Genera recetas personalizadas para cada café</p>
</div>

<style>
.feature-card {
  background: #ECEBE4;
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  transition: transform 300ms ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(28, 28, 28, 0.12);
}

.icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 16px;
  color: rgba(28, 28, 28, 0.7);
}
</style>
```

### CTA Section
```html
<section class="cta">
  <div class="cta-content">
    <h2>Listo para mejorar tu café?</h2>
    <p>Únete a miles de baristas que ya usan Drippia</p>
    <div class="cta-buttons">
      <button class="btn-primary">Descargar App</button>
      <button class="btn-secondary">Ver Demo</button>
    </div>
  </div>
</section>

<style>
.cta {
  background: #1C1C1C;
  color: #FFFFFF;
  padding: 64px 24px;
  text-align: center;
  margin: 80px 0;
  border-radius: 28px;
}

.cta h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
}

.cta p {
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
```

---

## ✨ Principios de Diseño

### 1. **Minimalismo Funcional**
- Elimina elementos innecesarios
- Cada elemento debe tener un propósito claro
- Espacios en blanco generosos

### 2. **Jerarquía Visual Clara**
- Usa tamaños de texto para establecer importancia
- Contraste para elementos clave
- Agrupación lógica de información

### 3. **Consistencia**
- Usa la misma paleta en toda la landing
- Mantén espaciados consistentes
- Reutiliza componentes

### 4. **Accesibilidad**
- Contraste mínimo 4.5:1 para texto
- Tamaños de fuente legibles (mínimo 16px para body)
- Áreas de click mínimo 44x44px

### 5. **Performance**
- Optimiza imágenes (WebP, lazy loading)
- Minimiza animaciones pesadas
- Carga progresiva de contenido

---

## 🚀 Stack Tecnológico Recomendado

### Para Landing Page:
- **Framework:** Next.js 14+ (React) o Astro
- **Styling:** TailwindCSS con configuración custom
- **Animaciones:** Framer Motion
- **Iconos:** Lucide Icons
- **Hosting:** Vercel o Netlify

### Configuración TailwindCSS:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'carbon-black': '#1C1C1C',
        'alabaster-grey': '#DADDD8',
        'soft-linen': '#ECEBE4',
        'platinum': '#EEF0F2',
        'ghost-white': '#FAFAFF',
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '28px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

---

## 📋 Checklist para Landing Page

- [ ] Hero section con propuesta de valor clara
- [ ] Sección de características (3-4 features principales)
- [ ] Screenshots o mockups de la app
- [ ] Testimonios o casos de uso
- [ ] Sección de pricing (si aplica)
- [ ] FAQ
- [ ] CTA clara y visible
- [ ] Footer con links importantes
- [ ] Responsive en mobile, tablet y desktop
- [ ] Performance optimizado (< 3s carga)
- [ ] SEO básico (meta tags, Open Graph)
- [ ] Analytics configurado

---

## 🎯 Recursos Adicionales

### Inspiración:
- Linear.app (minimalismo)
- Vercel.com (tipografía y espaciado)
- Stripe.com (gradientes sutiles)

### Herramientas:
- **Figma:** Para diseño y prototipos
- **Coolors.co:** Para paletas de colores
- **Google Fonts:** Para tipografías
- **Unsplash:** Para imágenes de café de alta calidad

---

**Última actualización:** Marzo 2026
**Versión:** 1.0
