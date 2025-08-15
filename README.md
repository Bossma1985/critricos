# LaNaranjaDigna - Web Moderna

Una web moderna y responsive para LaNaranjaDigna, empresa de cítricos al por mayor de la Valldigna.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones fluidas
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Supabase** - Base de datos y backend
- **Lucide React** - Iconos modernos

## 📋 Características

- ✅ **Completamente Responsive** - Optimizada para PC y móvil
- ✅ **SEO Optimizado** - Metadatos completos y estructura semántica
- ✅ **Animaciones Suaves** - Transiciones y efectos visuales
- ✅ **Formularios Validados** - Validación en tiempo real
- ✅ **Integración con Supabase** - Base de datos escalable
- ✅ **Google Maps Integrado** - Ubicación de la empresa
- ✅ **Testimonios Dinámicos** - Sección de clientes satisfechos
- ✅ **Footer Profesional** - Información completa y enlaces

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd citricos
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Editar `.env.local` con tus credenciales:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_clave_de_google_maps
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con metadatos
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación y header
│   ├── Hero.tsx            # Sección hero principal
│   ├── SolucionHosteleria.tsx  # Solución para hostelería
│   ├── VentaMayor.tsx      # Venta al por mayor
│   ├── QuienesSomos.tsx    # Sobre nosotros
│   ├── Testimonios.tsx     # Testimonios de clientes
│   ├── DondeEstamos.tsx    # Ubicación y mapa
│   ├── ContactForm.tsx     # Formulario de contacto
│   └── Footer.tsx          # Footer profesional
└── lib/
    └── supabase.ts         # Configuración de Supabase
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en Tailwind:
- **Verde**: `green-600`, `green-700`, `green-800` (colores principales)
- **Naranja**: `orange-500`, `orange-600` (llamadas a la acción)
- **Gris**: `gray-50`, `gray-600`, `gray-900` (textos y fondos)

### Imágenes
- Las imágenes están usando Unsplash como placeholder
- Reemplaza las URLs con tus propias imágenes
- Optimiza las imágenes para web (formato WebP recomendado)

### Contenido
- Edita los textos en cada componente
- Actualiza la información de contacto
- Personaliza los testimonios

## 🔧 Configuración de Supabase

1. **Crear proyecto en Supabase**
   - Ve a [supabase.com](https://supabase.com)
   - Crea un nuevo proyecto
   - Copia la URL y la clave anónima

2. **Crear tabla de contactos**
   ```sql
   CREATE TABLE contacts (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT,
     business TEXT,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

3. **Configurar RLS (Row Level Security)**
   ```sql
   ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
   
   CREATE POLICY "Allow inserts" ON contacts
     FOR INSERT WITH CHECK (true);
   ```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otros proveedores
- **Netlify**: Configura build command `npm run build`
- **Railway**: Conecta directamente desde GitHub
- **DigitalOcean App Platform**: Despliegue simple

## 📱 Responsive Design

La web está optimizada para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔍 SEO

- Metadatos completos configurados
- Open Graph para redes sociales
- Twitter Cards
- Estructura semántica HTML
- URLs amigables
- Sitemap automático (Next.js)

## 🛡️ Seguridad

- Validación de formularios con Zod
- Sanitización de inputs
- HTTPS obligatorio en producción
- Headers de seguridad configurados

## 📈 Escalabilidad

La estructura está preparada para:
- Carrito de compras
- Sistema de usuarios
- Panel de administración
- Blog integrado
- Sistema de notificaciones

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📞 Soporte

Para soporte técnico o preguntas:
- Email: info@lanaranjadigna.com
- Teléfono: 653 963 899

---

**Desarrollado con ❤️ para LaNaranjaDigna**
