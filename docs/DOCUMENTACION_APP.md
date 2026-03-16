# 📱 Drippia - Documentación Completa de la Aplicación

## 🎯 Descripción General
Drippia es una aplicación móvil para amantes del café de especialidad que permite gestionar cafés, crear y seguir recetas de preparación (brews), registrar historial de preparaciones, y recibir asesoría de un Coach IA especializado en café.

---

## 📋 Estructura de la Aplicación

La aplicación está organizada en **5 secciones principales** accesibles desde una barra de navegación inferior:

1. **Brewlog** (Historial)
2. **Cafés** (Mi colección)
3. **Brew** (Preparación - Centro)
4. **Coach IA** (Asistente inteligente)
5. **Perfil** (Usuario)

---

## 🔍 Secciones Detalladas

### 1️⃣ **BREWLOG - Historial de Preparaciones**

**Ubicación:** Primera pestaña (icono de reloj)

**Funcionalidad Principal:**
- Muestra un historial completo de todas las preparaciones de café realizadas
- Cada entrada registra información detallada de la preparación

**Características:**
- **Visualización de Brews:**
  - Nombre del café utilizado
  - Método de preparación (V60, Chemex, French Press, etc.)
  - Fecha y hora de la preparación
  - Calificación (estrellas)
  - Notas personales

- **Filtros y Búsqueda:**
  - Ordenar por fecha (más reciente/antiguo)
  - Filtrar por método de preparación
  - Filtrar por café específico
  - Buscar por notas o comentarios

- **Acciones:**
  - Ver detalles completos de cada brew
  - Recrear una receta anterior
  - Compartir preparación con otros usuarios
  - Eliminar entradas del historial

- **Integración con Coach IA:**
  - Botón "Consultar al Coach" para analizar una preparación específica
  - El Coach puede dar feedback sobre qué mejorar

**Datos Registrados por Brew:**
- Café utilizado (nombre, origen, proceso)
- Método de preparación
- Molinillo y calibración utilizada
- Cantidad de café (gramos)
- Cantidad de agua (ml)
- Ratio café:agua
- Pasos de la receta con tiempos
- Temperatura del agua
- Tiempo total de preparación
- Calificación final
- Notas de cata y observaciones

---

### 2️⃣ **CAFÉS - Mi Colección de Cafés**

**Ubicación:** Segunda pestaña (icono de hoja)

**Funcionalidad Principal:**
- Gestión completa de tu colección personal de cafés de especialidad
- Base de datos de todos tus cafés con información detallada

**Características:**

#### **Visualización de Cafés:**
- Lista de todos los cafés guardados
- Tarjetas con información resumida:
  - Foto del café
  - Nombre
  - Origen/Región
  - Proceso
  - Nivel de tueste
  - Calificación personal

#### **Agregar Nuevo Café:**
Botón "Agregar Café" que abre un formulario completo con:
- **Información Básica:**
  - Nombre del café (requerido)
  - Foto (desde galería o cámara)
  - Varietal (ej: Caturra, Bourbon, Geisha)
  - Región/Origen
  - Finca/Productor
  - Altitud de cultivo

- **Procesamiento:**
  - Tipo de proceso (Natural, Lavado, Honey, Anaeróbico, etc.)
  - Nivel de tueste (Claro, Medio, Oscuro)
  - Fecha de tueste
  - Tostador

- **Perfil de Sabor:**
  - Notas de cata (ej: "Chocolate, caramelo, frutas rojas")
  - Descripción detallada
  - Calificación personal (1-5 estrellas)

#### **Importar Café:**
- **Por Código:** Ingresar código de 6 caracteres compartido por otro usuario
- **Por QR:** Escanear código QR para importar café instantáneamente
- **Vista Previa:** Antes de guardar, se muestra toda la información del café importado
- **Confirmación:** Opción de guardar o cancelar la importación

#### **Detalles del Café:**
Al tocar un café, se abre una página detallada con:
- **Imagen Grande:** Vista ampliada de la foto del café
- **Información Completa:** Todos los datos del café organizados
- **Acciones Disponibles:**
  - **Editar:** Modificar cualquier información del café
  - **Eliminar:** Borrar el café de la colección
  - **Compartir:** Generar código QR o código de 6 caracteres para compartir
  - **Sugerir Receta con IA:** 🌟 Botón especial que:
    - Envía toda la información del café al Coach IA
    - Pregunta automáticamente: "¿Cómo preparo mi café [nombre]?"
    - Navega al Coach con la pregunta ya enviada
    - El Coach responde con una receta personalizada basada en las características del café

#### **Compartir Cafés:**
- **Generar QR:** Crea código QR escaneables
- **Código de 6 Caracteres:** Genera código alfanumérico corto
- **Subida a la Nube:** Los cafés compartidos se almacenan en Supabase
- **Duración:** Los códigos tienen validez temporal

---

### 3️⃣ **BREW - Preparación de Café (Centro)**

**Ubicación:** Pestaña central (icono de taza - más grande)

**Funcionalidad Principal:**
- Crear y ejecutar preparaciones de café paso a paso
- Asistente guiado para hacer el brew perfecto

**Proceso de Preparación en 4 Pasos:**

#### **PASO 1: Seleccionar Café**
- Lista de todos los cafés disponibles en tu colección
- Búsqueda rápida por nombre
- Vista previa con foto y datos principales
- Opción de agregar nuevo café si no está en la lista
- Botón "Continuar" para avanzar

#### **PASO 2: Molinillo y Molienda**
- **Seleccionar Molinillo:**
  - Lista de molinillos guardados
  - Opción de agregar nuevo molinillo
  - Información: marca, modelo, tipo (manual/eléctrico)

- **Calibración de Molienda:**
  - Slider para ajustar el número de clics/setting
  - Rango personalizable según el molinillo
  - Referencia visual del grosor de molienda
  - Recomendaciones según el método de preparación

- **Gestión de Molinillos:**
  - Agregar nuevo molinillo con nombre y rango de calibración
  - Editar molinillos existentes
  - Eliminar molinillos

#### **PASO 3: Ratio y Cantidades**
- **Cantidad de Café:**
  - Selector de gramos de café (5-50g típicamente)
  - Botones rápidos: +1g, +5g, -1g, -5g
  - Input manual para cantidad exacta

- **Cantidad de Agua:**
  - Calculada automáticamente según el ratio
  - Ajustable manualmente
  - Mostrada en mililitros

- **Ratio Café:Agua:**
  - Selector de ratio común (1:15, 1:16, 1:17, etc.)
  - Ajuste fino con slider
  - Cálculo automático de cantidades
  - Recomendaciones según método

#### **PASO 4: Receta y Ejecución**
- **Método de Preparación:**
  - Selección de método (V60, Chemex, Aeropress, French Press, etc.)
  - Cada método tiene pasos predefinidos

- **Pasos de la Receta:**
  - Lista de pasos con tiempos
  - Ejemplo para V60:
    1. Bloom: 0:00 - 0:45 (50ml)
    2. Primera vertida: 0:45 - 1:15 (100ml)
    3. Segunda vertida: 1:15 - 1:45 (75ml)
    4. Tercera vertida: 1:45 - 2:30 (resto)
  - Cada paso muestra:
    - Tiempo de inicio y fin
    - Cantidad de agua a verter
    - Instrucciones específicas

- **Importar Receta:**
  - Por código de 6 caracteres
  - Por QR escaneado
  - Vista previa antes de usar
  - Adaptar a tus recursos (café y molinillo)

- **Compartir Receta:**
  - Generar código QR
  - Generar código de 6 caracteres
  - Incluye todos los pasos y cantidades

- **Ejecutar Brew:**
  - Temporizador integrado
  - Notificaciones por paso
  - Seguimiento en tiempo real
  - Al finalizar: guardar en Brewlog con notas y calificación

**Botones de Acción Rápida:**
- **Importar Café:** Agregar café nuevo desde código/QR
- **Importar Receta:** Cargar receta compartida
- **Agregar Café:** Crear nuevo café manualmente

---

### 4️⃣ **COACH IA - Asistente Inteligente**

**Ubicación:** Cuarta pestaña (icono de estrella/IA)

**Funcionalidad Principal:**
- Chatbot especializado en café de especialidad
- Asistente personal para mejorar tus preparaciones
- Powered by Google Gemini AI

**Características:**

#### **Interfaz de Chat:**
- Diseño limpio estilo mensajería
- Burbujas de mensaje diferenciadas:
  - Usuario: fondo oscuro, alineado a la derecha
  - Coach: fondo blanco, alineado a la izquierda con icono IA

#### **Capacidades del Coach:**

**1. Asesoría sobre Preparación:**
- Responde preguntas sobre métodos de preparación
- Explica diferencias entre métodos (V60 vs Chemex vs Aeropress)
- Recomienda ajustes según resultados
- Soluciona problemas comunes:
  - "Mi café salió muy ácido"
  - "Mi café salió amargo"
  - "El tiempo de extracción fue muy rápido/lento"

**2. Recomendaciones Personalizadas:**
- Analiza características de un café específico
- Sugiere el mejor método de preparación
- Recomienda ratio, molienda y temperatura
- Da receta paso a paso personalizada

**3. Educación sobre Café:**
- Explica conceptos de café de especialidad
- Información sobre orígenes y procesos
- Diferencias entre varietales
- Impacto del tueste en el sabor

**4. Análisis de Brews:**
- Revisa preparaciones anteriores
- Identifica áreas de mejora
- Sugiere ajustes específicos

#### **Integración Especial:**
- **Desde Detalles de Café:**
  - Botón "Sugerir receta con IA"
  - Envía automáticamente toda la información del café
  - Pregunta: "¿Cómo preparo mi café [nombre]?"
  - Coach responde con receta detallada basada en:
    - Varietal
    - Región y altitud
    - Proceso (natural, lavado, etc.)
    - Nivel de tueste
    - Notas de cata
    - Descripción del productor

#### **Funciones del Chat:**
- **Input de Texto:** Campo para escribir preguntas
- **Botón de Envío:** Envía mensaje al Coach
- **Indicador de Carga:** "Pensando..." mientras el Coach procesa
- **Botón Reset:** Limpiar conversación y empezar de nuevo
- **Scroll Automático:** Se desplaza al último mensaje

#### **Contexto Inteligente:**
- El Coach recuerda el contexto de la conversación
- Puede hacer seguimiento de preguntas anteriores
- Mantiene coherencia en recomendaciones

---

### 5️⃣ **PERFIL - Configuración de Usuario**

**Ubicación:** Quinta pestaña (icono de persona)

**Funcionalidad Principal:**
- Gestión de cuenta y preferencias personales
- Configuración de la aplicación

**Características:**

#### **Información de Usuario:**
- Foto de perfil
- Nombre de usuario
- Email registrado
- Fecha de registro

#### **Estadísticas Personales:**
- Total de cafés en colección
- Total de brews realizados
- Café favorito (más usado)
- Método de preparación favorito
- Promedio de calificación de brews

#### **Configuración:**
- **Preferencias de Preparación:**
  - Método predeterminado
  - Ratio predeterminado
  - Unidades (gramos/onzas, ml/oz)

- **Notificaciones:**
  - Recordatorios de preparación
  - Notificaciones del Coach
  - Actualizaciones de la app

- **Cuenta:**
  - Cambiar contraseña
  - Editar perfil
  - Cerrar sesión
  - Eliminar cuenta

#### **Gestión de Datos:**
- **Exportar Datos:**
  - Exportar colección de cafés
  - Exportar historial de brews
  - Formato JSON o CSV

- **Importar Datos:**
  - Restaurar desde backup
  - Migrar desde otra app

- **Sincronización:**
  - Estado de sincronización con la nube
  - Última sincronización
  - Forzar sincronización manual

#### **Información de la App:**
- Versión actual
- Notas de la versión
- Términos y condiciones
- Política de privacidad
- Contacto y soporte

---

## 🔐 Autenticación y Onboarding

### **Splash Screen:**
- Logo de Drippia
- Verificación de sesión activa
- Redirección automática a Home o Login

### **Registro de Usuario:**
- Formulario con:
  - Nombre completo
  - Email
  - Contraseña (con confirmación)
- Validación de campos
- Verificación de email
- Creación de cuenta en Supabase

### **Inicio de Sesión:**
- Email y contraseña
- Opción "Recordarme"
- Recuperación de contraseña
- Manejo de errores (credenciales incorrectas)

### **Onboarding (Primera vez):**
- Bienvenida a Drippia
- Tutorial de funcionalidades principales
- Configuración inicial de preferencias
- Opción de importar datos existentes

---

## 🛠️ Tecnologías y Características Técnicas

### **Framework:**
- **Flutter:** Desarrollo multiplataforma (iOS y Android)
- **Dart:** Lenguaje de programación

### **Gestión de Estado:**
- **Riverpod:** State management reactivo y eficiente

### **Backend y Base de Datos:**
- **Supabase:**
  - Autenticación de usuarios
  - Base de datos PostgreSQL
  - Storage para imágenes
  - Real-time sync

### **Inteligencia Artificial:**
- **Google Gemini AI:**
  - Procesamiento de lenguaje natural
  - Generación de respuestas contextuales
  - Análisis de características de café

### **Funcionalidades Adicionales:**
- **QR Scanner:** Escaneo de códigos QR para importar
- **Cámara:** Captura de fotos de cafés
- **Galería:** Selección de imágenes existentes
- **Generación de QR:** Crear códigos QR para compartir
- **Almacenamiento Local:** Cache de datos offline
- **Sincronización:** Sync automático con la nube

---

## 📊 Flujos de Usuario Principales

### **Flujo 1: Agregar y Preparar un Café Nuevo**
1. Ir a pestaña "Cafés"
2. Tap en "Agregar Café"
3. Llenar formulario con información del café
4. Guardar café
5. Ir a pestaña "Brew" (centro)
6. Seleccionar el café recién agregado
7. Configurar molinillo y molienda
8. Ajustar ratio y cantidades
9. Seleccionar método y seguir receta
10. Ejecutar brew con temporizador
11. Guardar en Brewlog con notas

### **Flujo 2: Importar Café y Pedir Sugerencia al Coach**
1. Ir a pestaña "Cafés"
2. Tap en "Importar Café"
3. Escanear QR o ingresar código
4. Revisar vista previa del café
5. Confirmar y guardar
6. Tap en el café importado
7. Tap en "Sugerir receta con IA"
8. Automáticamente se abre Coach con pregunta enviada
9. Leer receta personalizada del Coach
10. Seguir recomendaciones para preparar

### **Flujo 3: Consultar Coach sobre Problema**
1. Ir a pestaña "Coach IA"
2. Escribir pregunta: "Mi café salió muy ácido, ¿qué hago?"
3. Enviar mensaje
4. Leer respuesta del Coach con sugerencias
5. Hacer preguntas de seguimiento si es necesario
6. Aplicar recomendaciones en siguiente brew

### **Flujo 4: Compartir Receta Exitosa**
1. Ir a pestaña "Brewlog"
2. Seleccionar brew exitoso
3. Tap en "Compartir"
4. Generar código QR o código de 6 caracteres
5. Compartir con amigos
6. Ellos pueden importar la receta exacta

---

## 🎨 Diseño y UX

### **Paleta de Colores:**
- **Ghost White:** Fondo principal (#F8F8F8)
- **Carbon Black:** Textos y elementos principales (#1A1A1A)
- **Acentos:** Tonos cálidos para café (marrones, beiges)

### **Tipografía:**
- Fuentes modernas y legibles
- Jerarquía clara de información
- Tamaños adaptables

### **Navegación:**
- Barra inferior fija con 5 pestañas
- Transiciones suaves entre secciones
- Animaciones fluidas

### **Responsive:**
- Adaptable a diferentes tamaños de pantalla
- Scroll optimizado
- Layouts flexibles

---

## 🚀 Funcionalidades Destacadas

### **1. Sistema de Compartir Inteligente:**
- Códigos cortos de 6 caracteres fáciles de compartir
- QR codes para compartir instantáneo
- Almacenamiento temporal en la nube
- Vista previa antes de importar

### **2. Coach IA Contextual:**
- Comprende características específicas de cada café
- Genera recetas personalizadas
- Responde preguntas en lenguaje natural
- Mantiene contexto de conversación

### **3. Gestión Completa de Brews:**
- Registro detallado de cada preparación
- Historial completo con búsqueda y filtros
- Capacidad de recrear recetas exitosas
- Análisis de tendencias y mejoras

### **4. Colección de Cafés Organizada:**
- Base de datos personal de cafés
- Información detallada de origen y proceso
- Fotos y calificaciones
- Importación/exportación fácil

---

## 📝 Notas Importantes

### **Requisitos:**
- Conexión a internet para funciones de IA y sincronización
- Cámara para escanear QR y tomar fotos
- Permisos de almacenamiento para guardar imágenes

### **Limitaciones:**
- API de Gemini tiene límites de uso gratuito
- Códigos compartidos tienen duración limitada
- Sincronización requiere cuenta activa

### **Mejores Prácticas:**
- Registrar brews inmediatamente después de preparar
- Mantener información de cafés actualizada
- Usar fotos claras para mejor identificación
- Aprovechar el Coach IA para aprender y mejorar

---

## 🎯 Objetivo de la App

Drippia busca ser el **compañero perfecto para entusiastas del café de especialidad**, proporcionando:
- Organización completa de tu colección de cafés
- Guía paso a paso para preparaciones perfectas
- Registro detallado de tu evolución
- Asesoría inteligente personalizada
- Comunidad para compartir descubrimientos

**La app combina tecnología moderna con la pasión por el café de especialidad para elevar tu experiencia de preparación a un nivel profesional.**

---

*Documento creado: Marzo 2026*
*Versión de la app: 1.0*
