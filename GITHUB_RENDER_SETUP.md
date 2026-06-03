# 📘 GUÍA: GITHUB + RENDER

## Paso 1: Preparar Repositorio en GitHub

### 1.1 Crear Repositorio
```bash
# Ve a https://github.com/new
# Nombre: portfolio
# Descripción: Portafolio de Alto Impacto - Backend Developer & QA Engineer

# Después de crear, en tu máquina local:
cd portfolio-app
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git branch -M main
git push -u origin main
```

### 1.2 Configuración del Repositorio
```bash
# Empujar todos los cambios
git add -A
git commit -m "docs: Update email and prepare for production deployment"
git push
```

---

## Paso 2: Desplegar en Render

### 2.1 Crear Cuenta en Render
1. Ve a https://render.com
2. Haz clic en "Sign Up"
3. Conecta con GitHub

### 2.2 Crear Nuevo Servicio
1. En Dashboard de Render → "New +"
2. Selecciona "Web Service"
3. Conecta tu repositorio `portfolio`

### 2.3 Configurar Servicio
| Campo | Valor |
|-------|-------|
| **Name** | fabian-gallardo-portfolio |
| **Environment** | Node |
| **Build Command** | `npm run build` |
| **Start Command** | `node server.js` |
| **Node Version** | 18+ |

### 2.4 Variables de Entorno
```bash
NODE_ENV = production
PORT = 10000
```

### 2.5 Deploy
```bash
# Click en "Deploy"
# Render desplegará automáticamente
# URL: https://fabian-gallardo-portfolio.onrender.com
```

---

## Paso 3: Configuración Post-Deploy

### 3.1 Custom Domain (Opcional)
1. En Render Dashboard → Tu servicio
2. Settings → Custom Domain
3. Añade tu dominio personalizado
4. Actualiza DNS según instrucciones

### 3.2 Auto-Deploy Desde GitHub
- Render detecta automáticamente cambios en GitHub
- Cada `push` a `main` redesplegará

---

## 📝 Descripción para GitHub

### Para el README.md del Repositorio

```markdown
# Fabián Gallardo - Portafolio de Alto Impacto

**Backend Developer | QA Engineer | Data Automation Specialist**

Portafolio profesional moderno con enfoque en Backend Development, Quality Assurance y Automatización de Datos. Diseño Minimalista Profesional con React 18, TypeScript y Tailwind CSS v4.

## 🎯 Features

- ✨ **7 Secciones Completas** - Hero, About, Skills, Experience, Projects, Certifications, Contact
- ⚛️ **React 18** - UI moderna y eficiente
- 🎨 **TypeScript** - Tipado seguro y confiable
- ⚡ **Vite** - Build ultrarrápido (646ms)
- 🎯 **Tailwind CSS v4** - Estilos optimizados
- ✨ **Framer Motion** - Animaciones fluidas y scroll-triggered
- 📱 **Responsive** - Mobile-first design
- 🔍 **SEO Ready** - Metadatos optimizados

## 📊 Stack Tecnológico

| Área | Tecnología |
|------|-----------|
| Frontend | React 18, TypeScript, Vite |
| Estilos | Tailwind CSS v4, PostCSS |
| Animaciones | Framer Motion 12+ |
| Iconografía | Lucide React |
| Linting | ESLint, TypeScript |
| Deploy | Render, Vercel, Netlify |

## 🚀 Despliegue

### Local
```bash
npm install
npm run dev        # Desarrollo
npm run build      # Producción
npm start          # Servidor
```

### Render
- URL: https://fabian-gallardo-portfolio.onrender.com
- Auto-deploy desde GitHub `main` branch

## 📋 Secciones

1. **Hero** - Tagline y CTA principal
2. **About** - Storytelling: Aviónica, Aikidō, Backend
3. **Tech Stack** - 3 categorías de skills
4. **Experience** - Timeline profesional
5. **Projects** - 4 proyectos destacados
6. **Certifications** - Validaciones técnicas
7. **Contact** - Aikidō, Gaming, contacto

## 📈 Performance

- ✅ Build: 646ms
- ✅ CSS Bundle: 19.87 kB (gzip: 4.46 kB)
- ✅ JS Bundle: 338.11 kB (gzip: 106.16 kB)
- ✅ TypeScript: 0 errores
- ✅ ESLint: 0 warnings

## 📞 Contacto

- **Email:** gallardofabianvcpz@gmail.com
- **GitHub:** [@FabianGallardo-coder](https://github.com/FabianGallardo-coder)
- **LinkedIn:** [fabian-gallardo](https://linkedin.com/in/fabian-gallardo)

## 📄 Documentación

- `MASTER_BRIEF.md` - Especificaciones
- `PORTFOLIO_AUDIT.md` - Análisis
- `QA_REPORT.md` - Pruebas QA
- `DEPLOYMENT.md` - Guía completa de despliegue

## 📦 Estructura

```
src/
├── components/      # 6 componentes principales
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   └── PersonalAndContact.tsx
├── App.tsx         # Componente raíz
├── main.tsx        # Punto de entrada
└── index.css       # Estilos globales
```

## 🛠️ Comandos

```bash
npm run dev        # Servidor de desarrollo (localhost:5173)
npm run build      # Build de producción
npm run lint       # Ejecutar ESLint
npm run preview    # Previsualizar build
npm start          # Iniciar servidor (Render)
```

## 📝 Licencia

© 2026 Fabián Gallardo. Todos los derechos reservados.

---

**Built with ❤️ using React, TypeScript & Tailwind CSS**
```

### Para la Descripción Corta en GitHub

```
Portafolio de Alto Impacto | Backend Developer & QA Engineer | React 18 + TypeScript + Tailwind
```

### Para Topics en GitHub

```
portfolio backend typescript react vite tailwindcss qa-engineer
```

---

## 📋 Checklist Pre-Deploy

- [ ] Correo actualizado: `gallardofabianvcpz@gmail.com`
- [ ] README.md actualizado
- [ ] package.json con info correcta
- [ ] Build exitoso: `npm run build`
- [ ] Linting pasado: `npm run lint`
- [ ] Git commits limpios
- [ ] Todos los archivos commiteados
- [ ] Repositorio en GitHub (público)
- [ ] Render configurado y deployando

---

## 🔗 URLs Importantes

| Servicio | URL |
|----------|-----|
| **GitHub** | https://github.com/FabianGallardo-coder/portfolio |
| **Render** | https://fabian-gallardo-portfolio.onrender.com |
| **Personal** | tudominio.dev (opcional) |

---

## ✅ Verificación Final

Una vez desplegado, verifica:

1. ✅ Página carga sin errores
2. ✅ Animaciones fluidas
3. ✅ Links funcionan (GitHub, LinkedIn, Email)
4. ✅ Responsive en mobile/tablet/desktop
5. ✅ Scroll suave
6. ✅ Performance > 90 en Lighthouse
7. ✅ No hay errores en console (F12)
8. ✅ CTA "Ver Proyectos" navega

---

**Listo para producción** ✨
