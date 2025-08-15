# 📁 Carpeta de Imágenes

Esta carpeta contiene todas las imágenes estáticas del proyecto LaNaranjaDigna.

## 🎨 Logo Actual

Actualmente estamos usando un componente SVG personalizado (`src/components/Logo.tsx`) que representa el logo de LaNaranjaDigna.

## 📋 Cómo Añadir Imágenes

### 1. **Imágenes PNG/JPG/WebP:**
- Coloca las imágenes en esta carpeta
- Usa nombres descriptivos (ej: `hero-background.jpg`, `product-oranges.png`)
- Optimiza las imágenes para web (compresión, tamaños apropiados)

### 2. **Logo Personalizado:**
Si quieres usar tu imagen real del logo:

1. Coloca tu archivo de logo en esta carpeta
2. Renómbralo como `logo-lanaranjadigna.png` (o el formato que uses)
3. Actualiza el Header.tsx para usar la imagen:

```tsx
import Image from 'next/image'

// En lugar de <Logo className="w-12 h-12" />
<Image
  src="/logo-lanaranjadigna.png"
  alt="LaNaranjaDigna Logo"
  width={48}
  height={48}
  className="object-contain"
  priority
/>
```

### 3. **Imágenes de Stock:**
- Para imágenes de productos, usa nombres como `product-{tipo}-{numero}.jpg`
- Para imágenes de fondo, usa nombres como `background-{seccion}.jpg`

## 🚀 Optimización

- **Formatos recomendados**: WebP, PNG para logos, JPG para fotos
- **Tamaños**: Optimiza para diferentes dispositivos (desktop, tablet, móvil)
- **Compresión**: Usa herramientas como TinyPNG o ImageOptim

## 📱 Responsive

Las imágenes se adaptan automáticamente a diferentes tamaños de pantalla usando las clases de Tailwind CSS. 