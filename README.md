# Matrix Rotation - Rotador de Matriz NxN

Un proyecto de Next.js que implementa un algoritmo para rotar matrices cuadradas (NxN) 90 grados en sentido anti-horario con una interfaz web interactiva.

## 📋 Características Técnicas

### 🎯 Funcionalidades Principales
- **Rotación de Matrices**: Algoritmo optimizado para rotar matrices NxN 90° en sentido anti-horario
- **Validación Robusta**: Verificación automática de formato de matriz cuadrada
- **Interfaz Interactiva**: Input JSON para matrices con visualización en tiempo real
- **Responsive Design**: Adaptable a dispositivos móviles y desktop
- **Modo Oscuro**: Soporte completo para tema claro/oscuro

### 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── _components/
│   │   └── MatrixDisplay.tsx     # Componente de visualización de matrices
│   ├── _lib/
│   │   ├── matrix.ts             # Lógica core del algoritmo de rotación
│   │   └── matrix.test.ts        # Suite de pruebas unitarias
│   ├── globals.css               # Estilos globales con Tailwind CSS
│   ├── layout.tsx                # Layout principal de la aplicación
│   └── page.tsx                  # Página principal con interfaz de usuario
```

### 🔧 Stack Tecnológico

#### Frontend
- **Next.js 15.5.3** - Framework React con App Router
- **React 19.1.0** - Biblioteca de interfaces de usuario
- **TypeScript 5** - Tipado estático y desarrollo seguro
- **Tailwind CSS 4** - Framework de utilidades CSS
- **Turbopack** - Bundler de alta velocidad para desarrollo

#### Desarrollo y Testing
- **Vitest 3.2.4** - Framework de testing moderno
- **@testing-library/react** - Utilidades para testing de componentes
- **jsdom** - Entorno DOM para pruebas
- **Biome 2.2.0** - Linter y formateador unificado

#### Herramientas de Desarrollo
- **TypeScript** - Análisis estático de tipos
- **PostCSS** - Procesamiento de CSS
- **ESLint & Prettier** - Calidad y formato de código

## 🚀 Algoritmo de Rotación

### Complejidad
- **Tiempo**: O(n²) - donde n es la dimensión de la matriz
- **Espacio**: O(n²) - nueva matriz para el resultado

### Implementación
```typescript
export function rotateMatrixCounterClockwise(matrix: Matrix): Matrix {
    const n = matrix.length;
    const rotatedMatrix: Matrix = Array.from({ length: n }, () =>
        Array(n).fill(0),
    );

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotatedMatrix[n - 1 - j][i] = matrix[i][j];
        }
    }

    return rotatedMatrix;
}
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 20+ o Bun
- npm, yarn, pnpm o bun

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>
cd matrix-rotation

# Instalar dependencias
npm install
# o
bun install
```

## 📱 Uso del Proyecto

### Desarrollo
```bash
npm run dev
# o
bun dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

### Construcción para Producción
```bash
npm run build
npm start
```

### Testing
```bash
# Ejecutar pruebas
npm test
# o
npx vitest

# Ejecutar con interfaz visual
npx vitest --ui
```

### Linting y Formato
```bash
# Verificar código
npm run lint

# Formatear código
npm run format
```

## 📝 Uso de la Aplicación

1. **Input**: Ingresa una matriz cuadrada en formato JSON
   ```json
   [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   ```

2. **Procesamiento**: El algoritmo valida y rota la matriz -90°

3. **Output**: Visualización lado a lado de la matriz original y rotada

### Ejemplos de Entrada

#### Matriz 2x2
```json
[[1, 2], [3, 4]]
```
**Resultado**: `[[2, 4], [1, 3]]`

#### Matriz 3x3
```json
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```
**Resultado**: `[[3, 6, 9], [2, 5, 8], [1, 4, 7]]`

## 🧪 Testing

El proyecto incluye una suite completa de pruebas unitarias que cubren:
- ✅ Rotación correcta de matrices 2x2, 3x3 y NxN
- ✅ Validación de matrices cuadradas
- ✅ Manejo de casos edge (matriz 1x1)
- ✅ Gestión de errores para matrices no válidas

## 🎨 Características de UI/UX

- **Design System**: Componentes reutilizables con TypeScript
- **Accesibilidad**: Etiquetas ARIA y roles semánticos
- **Estado de Error**: Feedback visual para inputs inválidos
- **Responsive**: Grid adaptativo para diferentes pantallas
- **Dark Mode**: Detección automática del tema del sistema

## 📦 Dependencias Principales

### Producción
- `next`: Framework web principal
- `react` & `react-dom`: Biblioteca de UI
- `@vitejs/plugin-react`: Plugin de Vite para React

### Desarrollo
- `@biomejs/biome`: Herramientas de desarrollo unificadas
- `tailwindcss`: Framework CSS utilitario
- `vitest`: Framework de testing
- `typescript`: Compilador TypeScript

## 📄 Licencia

Este proyecto fue creado como demostración técnica del algoritmo de rotación de matrices.

---

**Tecnologías**: Next.js, React, TypeScript, Tailwind CSS, Vitest
