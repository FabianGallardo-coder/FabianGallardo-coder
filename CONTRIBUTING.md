# Contribuyendo al Portafolio de Fabián Gallardo

Primero, ¡gracias por tu interés en contribuir! Este proyecto es un portafolio profesional de código abierto y valorizamos las contribuciones de la comunidad.

## Cómo Contribuir

### 1. Fork el Repositorio
```bash
# Haz un fork en GitHub
# Clona tu fork local
git clone https://github.com/TU-USUARIO/portfolio.git
cd portfolio/portfolio-app
```

### 2. Crea una Rama
```bash
# Crea una rama para tu feature
git checkout -b feature/nombre-descriptivo
# O para bugfixes
git checkout -b fix/descripcion-del-bug
```

### 3. Realiza tus Cambios
```bash
# Instala dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev

# Verifica que todo funciona
npm run build
npm run lint
```

### 4. Haz Commit
```bash
# Usa commits descriptivos
git commit -m "feat: Descripción clara del cambio"
# O
git commit -m "fix: Descripción del bug solucionado"
# O
git commit -m "docs: Actualización de documentación"
```

### 5. Push y Abre un PR
```bash
git push origin feature/nombre-descriptivo
```

Luego, abre un Pull Request en GitHub con una descripción clara.

## Convenciones de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Para nuevas características
- `fix:` Para corrección de bugs
- `docs:` Para cambios en documentación
- `style:` Para cambios de formato (no afectan funcionalidad)
- `refactor:` Para refactorización de código
- `test:` Para añadir o actualizar tests
- `chore:` Para cambios en configuración

**Ejemplo:**
```bash
git commit -m "feat: Add dark mode toggle to components"
git commit -m "fix: Resolve responsive layout issue on mobile"
git commit -m "docs: Update installation instructions"
```

## Estándares de Código

### TypeScript
- Usa tipado fuerte
- Evita `any` cuando sea posible
- Documenta funciones complejas

### React
- Componentes funcionales con hooks
- Props tipadas correctamente
- Componentes reutilizables

### Estilos
- Usa Tailwind CSS v4
- Mantén consistencia de clases
- Evita estilos inline

### Ejemplo de Componente
```tsx
// src/components/ExampleComponent.tsx
import { motion } from 'framer-motion';

interface ExampleProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary';
}

const ExampleComponent: React.FC<ExampleProps> = ({
  title,
  description,
  variant = 'primary'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg ${
        variant === 'primary' 
          ? 'bg-indigo-electric text-ghost-white'
          : 'bg-obsidian text-slate-muted'
      }`}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ExampleComponent;
```

## Testing

```bash
# Ejecutar linter
npm run lint

# Build de producción
npm run build

# Previsualizar build
npm run preview
```

## Reportar Bugs

Si encuentras un bug, abre una [Issue](https://github.com/FabianGallardo-coder/portfolio/issues) con:

1. **Descripción clara** del problema
2. **Pasos para reproducir**
3. **Comportamiento esperado**
4. **Comportamiento actual**
5. **Screenshots** (si aplica)
6. **Ambiente** (OS, navegador, versión)

**Template:**
```markdown
## Descripción
[Describe el bug aquí]

## Pasos para Reproducir
1. Ir a...
2. Hacer clic en...
3. Observar...

## Comportamiento Esperado
[Lo que debería pasar]

## Comportamiento Actual
[Lo que está pasando]

## Ambiente
- OS: [ej. Windows 11]
- Navegador: [ej. Chrome 120]
- Versión: [ej. 1.0.0]
```

## Solicitar Cambios

Antes de implementar cambios importantes, abre una [Discussion](https://github.com/FabianGallardo-coder/portfolio/discussions) para discutir la idea.

## Directrices de Pull Request

1. **Título descriptivo**
   ```
   feat: Agregar sección de testimonios
   ```

2. **Descripción clara**
   - Qué cambios realizas
   - Por qué los cambios
   - Cómo probaste

3. **Checklist**
   - [ ] El código sigue los estándares
   - [ ] He testeado los cambios
   - [ ] Actualizé la documentación
   - [ ] No hay conflictos de merge

## Estructura del Proyecto

```
portfolio-app/
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── lib/             # Utilidades y helpers
│   ├── App.tsx          # Componente raíz
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/              # Assets estáticos
├── dist/                # Build de producción
├── LICENSE              # Licencia MIT
├── CONTRIBUTING.md      # Este archivo
└── README.md            # Documentación
```

## Licencia

Por contribuir a este proyecto, aceptas que tus contribuciones se licencian bajo la licencia MIT.

## Preguntas

Si tienes preguntas:
- Abre una [Discussion](https://github.com/FabianGallardo-coder/portfolio/discussions)
- Contacta: gallardofabianvcpz@gmail.com

## Agradecimientos

¡Gracias por contribuir! Cada contribución nos ayuda a mejorar.

---

**Happy Coding! 🚀**
