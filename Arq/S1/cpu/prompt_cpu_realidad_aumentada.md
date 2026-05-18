# Prompt para crear una página HTML de Realidad Aumentada sin gafas sobre la Anatomía Interna de la CPU

## Objetivo del proyecto

Crea una página web educativa en un único archivo `index.html`, usando **HTML, CSS y JavaScript puro**, que simule una experiencia de **realidad aumentada sin gafas** para explicar de manera dinámica, visual e interactiva la **anatomía y los componentes internos de la CPU**.

La página debe permitir que un estudiante entienda cómo interactúan los componentes internos del procesador cuando una instrucción entra, se procesa y sale como resultado.

El enfoque principal debe ser mostrar el recorrido interno de una instrucción dentro de la CPU, especialmente el ciclo:

**Fetch → Decode → Execute → Store / Output**

La experiencia debe sentirse como una maqueta digital interactiva, tipo laboratorio tecnológico, donde el usuario pueda ver una CPU abierta en 3D o pseudo-3D, con sus componentes internos resaltados, animaciones, líneas de flujo de datos, señales de control y ventanas emergentes explicativas.

---

## Estilo visual general

Diseña la web con un estilo moderno, tecnológico y educativo.

Debe tener:

- Fondo oscuro futurista o estilo laboratorio digital.
- CPU central en vista isométrica, 3D simulada o pseudo-3D.
- Componentes internos claramente identificados.
- Tarjetas flotantes tipo holograma.
- Líneas animadas que representen buses, señales de control y flujo de datos.
- Colores diferenciados para cada tipo de elemento:
  - Azul o cian para buses de datos.
  - Amarillo o naranja para señales de control.
  - Verde para resultados.
  - Morado o violeta para instrucciones.
  - Rojo suave para alertas o flags.
- Animaciones suaves y educativas.
- Diseño responsive para pantalla de laptop y proyector.
- Botones grandes y fáciles de usar para estudiantes.

La página debe tener una apariencia profesional, clara y didáctica, no sobrecargada.

---

## Estructura principal de la página

La web debe incluir las siguientes secciones:

1. **Encabezado**
   - Título principal:  
     `Anatomía Interna de la CPU`
   - Subtítulo:  
     `Explora cómo una instrucción entra, se procesa y sale del procesador`
   - Breve descripción del objetivo de la simulación.

2. **Escena principal de realidad aumentada sin gafas**
   - Mostrar una CPU abierta o transparente.
   - Dentro de la CPU deben verse los componentes:
     - Unidad de Control.
     - ALU o ULA.
     - Registros.
     - Contador de Programa.
     - Registro de Instrucción.
     - MAR.
     - MDR.
     - Acumulador.
     - FLAGS.
     - Buses internos.
     - Memoria principal externa a la CPU.
     - Entrada de instrucciones.
     - Salida de resultados.
   - Los componentes deben estar ubicados de forma lógica dentro del procesador.
   - Deben tener etiquetas visibles.
   - Cada componente debe ser clickeable.

3. **Panel lateral de explicación**
   - Debe mostrar información del componente seleccionado.
   - Debe actualizarse dinámicamente cuando el usuario haga clic en un componente.
   - Debe incluir:
     - Nombre del componente.
     - Definición.
     - Función dentro de la CPU.
     - Participación en el ciclo Fetch-Decode-Execute.
     - Analogía sencilla.
     - Imagen o ilustración correspondiente.
     - Ejemplo simple de uso.

4. **Controles de simulación**
   - Botón: `Iniciar simulación automática`.
   - Botón: `Pausar`.
   - Botón: `Reiniciar`.
   - Botón: `Siguiente paso`.
   - Botón: `Paso anterior`.
   - Selector de instrucción de ejemplo:
     - `ADD A, B`
     - `SUB A, B`
     - `LOAD A`
     - `STORE A`
     - `CMP A, B`

5. **Línea de tiempo del ciclo de instrucción**
   - Mostrar visualmente las fases:
     - 1. Fetch
     - 2. Decode
     - 3. Execute
     - 4. Store / Output
   - La fase activa debe iluminarse.
   - Al hacer clic en cada fase debe aparecer una explicación.

6. **Panel de valores internos**
   - Mostrar valores simulados de:
     - PC
     - IR
     - MAR
     - MDR
     - ACC
     - FLAGS
   - Los valores deben cambiar durante la simulación.
   - Usar valores didácticos, por ejemplo:
     - PC = 0x0040
     - IR = ADD A, B
     - MAR = 0x1000
     - MDR = 5
     - ACC = 8
     - FLAGS = Z=0, N=0, C=0

---

## Componentes obligatorios y explicación

Incluye estos componentes como objetos visuales clickeables dentro de la escena.

---

### Unidad de Control, UC

Debe representarse como el centro de mando del procesador.

Explicación que debe aparecer al hacer clic:

La **Unidad de Control** es el centro de mando de la CPU. No realiza cálculos directamente, sino que coordina el trabajo de todos los componentes internos.

Su función principal es gestionar el ciclo de instrucción:

1. Buscar la instrucción en memoria.
2. Decodificar qué operación se debe realizar.
3. Generar señales de control.
4. Coordinar a la ALU, los registros, la memoria y los buses.

Analogía: funciona como el director de orquesta, porque indica cuándo y cómo debe actuar cada componente.

Durante la simulación, la Unidad de Control debe iluminarse cuando la instrucción se decodifica y cuando se envían señales hacia otros componentes.

---

### Unidad Aritmético-Lógica, ULA o ALU

Debe representarse como el módulo de cálculo de la CPU.

Explicación que debe aparecer al hacer clic:

La **Unidad Aritmético-Lógica**, también llamada **ALU** o **ULA**, es el componente encargado de realizar operaciones matemáticas y lógicas.

Puede realizar operaciones como:

- Suma.
- Resta.
- Incrementos.
- Comparaciones.
- Operaciones lógicas AND, OR y NOT.

La ALU trabaja con datos que llegan desde los registros. Después de ejecutar una operación, envía el resultado al acumulador o a otro registro.

También actualiza las banderas o FLAGS, por ejemplo:

- Z: indica si el resultado fue cero.
- N: indica si el resultado fue negativo.
- C: indica si hubo acarreo.
- V: indica si hubo desbordamiento.

Analogía: funciona como la calculadora interna del procesador.

Durante la simulación, la ALU debe iluminarse en la fase Execute.

---

### Registros

Deben mostrarse como pequeños bloques de memoria ultrarrápida dentro de la CPU.

Explicación que debe aparecer al hacer clic:

Los **registros** son pequeñas unidades de almacenamiento ubicadas dentro de la CPU. Son mucho más rápidos que la memoria RAM porque están físicamente dentro del procesador y pueden ser accedidos en muy pocos ciclos de reloj.

Los registros guardan temporalmente instrucciones, direcciones, datos y resultados intermedios.

Son esenciales porque permiten que la CPU trabaje rápidamente sin tener que consultar la memoria principal en cada operación.

Analogía: son como notas rápidas que el procesador usa mientras trabaja.

---

### Contador de Programa, PC

Debe mostrarse como un registro especial conectado a la memoria.

Explicación que debe aparecer al hacer clic:

El **Contador de Programa**, o **PC**, almacena la dirección de memoria de la próxima instrucción que la CPU debe ejecutar.

Cada vez que la CPU obtiene una instrucción, el PC se actualiza para apuntar a la siguiente instrucción.

Ejemplo:

Si el PC contiene la dirección `0x0040`, la CPU buscará la instrucción ubicada en esa dirección. Luego el PC puede avanzar a `0x0044`.

Analogía: funciona como un marcador de lectura que indica por dónde va el programa.

Durante la fase Fetch, el PC debe enviar la dirección hacia el MAR.

---

### Registro de Instrucción, IR

Debe mostrarse como un registro conectado con la Unidad de Control.

Explicación que debe aparecer al hacer clic:

El **Registro de Instrucción**, o **IR**, guarda temporalmente la instrucción que la CPU acaba de traer desde la memoria.

Una vez que la instrucción está en el IR, la Unidad de Control la analiza para saber qué operación debe realizar.

Ejemplo:

Si la instrucción es `ADD A, B`, el IR la guarda para que la Unidad de Control la decodifique.

Analogía: es como una hoja de indicaciones que la CPU lee antes de actuar.

Durante la fase Decode, el IR debe iluminarse junto con la Unidad de Control.

---

### MAR, Registro de Dirección de Memoria

Debe mostrarse conectado entre la CPU y la memoria principal.

Explicación que debe aparecer al hacer clic:

El **MAR**, o **Memory Address Register**, almacena la dirección de memoria donde la CPU quiere leer o escribir información.

Cuando la CPU necesita buscar una instrucción o acceder a un dato, coloca la dirección correspondiente en el MAR.

Ejemplo:

Si la CPU necesita leer la dirección `0x1000`, esa dirección se coloca primero en el MAR.

Analogía: funciona como la dirección de una casa antes de enviar o recibir un paquete.

Durante la fase Fetch, el MAR debe recibir la dirección desde el PC y enviarla hacia la memoria.

---

### MDR, Registro de Datos de Memoria

Debe mostrarse junto al MAR, conectado al bus de datos.

Explicación que debe aparecer al hacer clic:

El **MDR**, o **Memory Data Register**, almacena temporalmente el dato que entra o sale de la memoria.

Si la CPU lee desde memoria, el dato recibido pasa por el MDR.  
Si la CPU escribe en memoria, el dato a guardar se coloca primero en el MDR.

Ejemplo:

Si en memoria se encuentra el valor `5`, ese valor puede pasar al MDR antes de llegar a un registro interno.

Analogía: funciona como una bandeja de entrada y salida para los datos.

Durante la simulación, el MDR debe iluminarse cuando los datos viajen entre memoria y CPU.

---

### Acumulador, ACC

Debe mostrarse como un registro conectado directamente con la ALU.

Explicación que debe aparecer al hacer clic:

El **Acumulador**, o **ACC**, es un registro especial que guarda resultados temporales de las operaciones realizadas por la ALU.

Cuando la ALU suma, resta o compara valores, el resultado puede almacenarse en el acumulador.

Ejemplo:

Si la instrucción es `ADD A, B`, y los valores son `A = 5` y `B = 3`, el acumulador puede guardar el resultado `8`.

Analogía: funciona como una libreta donde la calculadora interna guarda el resultado antes de usarlo o enviarlo.

Durante la fase Execute y Store, el ACC debe recibir el resultado desde la ALU.

---

### FLAGS, Registro de Estado

Debe mostrarse como un bloque pequeño con indicadores binarios.

Explicación que debe aparecer al hacer clic:

El **Registro de Estado**, también conocido como **FLAGS**, almacena bits que describen el resultado de una operación.

Algunos flags comunes son:

- Z, Zero: indica si el resultado fue cero.
- N, Negative: indica si el resultado fue negativo.
- C, Carry: indica si hubo acarreo.
- V, Overflow: indica si ocurrió desbordamiento.

Estos indicadores ayudan a la CPU a tomar decisiones, por ejemplo, en saltos condicionales.

Ejemplo:

Si una resta da como resultado `0`, el flag Z puede cambiar a `1`.

Analogía: son como luces de advertencia que indican qué ocurrió después de una operación.

Durante la fase Execute, los FLAGS deben actualizarse según el resultado de la ALU.

---

## Simulación obligatoria del ciclo de instrucción

La página debe incluir una simulación animada paso a paso de cómo se ejecuta una instrucción.

Usar como ejemplo principal:

`ADD A, B`

Valores iniciales:

- PC = 0x0040
- Memoria[0x0040] = ADD A, B
- A = 5
- B = 3
- ACC = 0
- FLAGS = Z=0, N=0, C=0

---

### Paso 1: Fetch

Mostrar animación:

1. El PC se ilumina.
2. El PC envía la dirección `0x0040` al MAR.
3. El MAR envía la dirección hacia la memoria.
4. La memoria devuelve la instrucción `ADD A, B`.
5. La instrucción viaja por el bus de datos hacia el MDR.
6. El MDR envía la instrucción al IR.
7. El PC se actualiza a `0x0044`.

Texto explicativo:

En la fase Fetch, la CPU busca en memoria la próxima instrucción que debe ejecutar. El PC indica la dirección, el MAR la almacena y la memoria devuelve la instrucción hacia la CPU.

---

### Paso 2: Decode

Mostrar animación:

1. El IR se ilumina.
2. La Unidad de Control lee la instrucción `ADD A, B`.
3. La Unidad de Control identifica que se trata de una suma.
4. Se generan señales de control hacia los registros y la ALU.

Texto explicativo:

En la fase Decode, la Unidad de Control interpreta la instrucción guardada en el IR y prepara a los componentes necesarios para ejecutarla.

---

### Paso 3: Execute

Mostrar animación:

1. Los valores A = 5 y B = 3 viajan desde los registros hacia la ALU.
2. La ALU se ilumina.
3. La ALU realiza la suma.
4. Se muestra visualmente la operación: `5 + 3 = 8`.
5. El resultado viaja hacia el ACC.
6. Los FLAGS se actualizan.

Texto explicativo:

En la fase Execute, la ALU realiza la operación indicada. En este caso, suma los valores A y B, genera el resultado 8 y actualiza los indicadores de estado.

---

### Paso 4: Store / Output

Mostrar animación:

1. El resultado en ACC se mantiene como salida interna.
2. Si la instrucción requiere guardar el resultado, el valor puede viajar hacia el MDR.
3. El MDR puede enviar el dato a memoria.
4. Mostrar una salida visual: `Resultado final: 8`.

Texto explicativo:

En la fase Store u Output, el resultado de la operación se guarda temporalmente en un registro, se escribe en memoria o se entrega como salida del procesador.

---

## Interactividad requerida

La página debe permitir:

- Hacer clic en cada componente de la CPU.
- Mostrar un popup o panel lateral con explicación detallada.
- Mostrar una imagen o ilustración del componente seleccionado.
- Resaltar visualmente el componente seleccionado.
- Iniciar una simulación automática.
- Avanzar manualmente paso a paso.
- Retroceder al paso anterior.
- Reiniciar la simulación.
- Cambiar la instrucción de ejemplo.
- Ver los valores internos de los registros actualizados.
- Ver una línea de tiempo del ciclo de instrucción.
- Ver tooltips breves al pasar el mouse por cada componente.

---

## Imágenes o ilustraciones

Como el archivo debe funcionar de forma local, utiliza una de estas opciones:

1. Usar imágenes en línea mediante URLs libres y confiables.
2. Usar íconos SVG embebidos directamente en el HTML.
3. Usar ilustraciones generadas con CSS o SVG.

Cada componente debe tener una imagen, ícono o representación visual correspondiente.

Ejemplos:

- Unidad de Control: ícono de cerebro, director o centro de control.
- ALU: ícono de calculadora o circuito lógico.
- Registros: pequeños bloques de memoria.
- PC: marcador o flecha de secuencia.
- IR: documento de instrucción.
- MAR: dirección o mapa.
- MDR: paquete de datos.
- ACC: contenedor de resultado.
- FLAGS: indicadores o luces de estado.

---

## Requisitos técnicos

Genera todo en un solo archivo:

`index.html`

El archivo debe contener:

- HTML estructurado.
- CSS interno dentro de `<style>`.
- JavaScript interno dentro de `<script>`.
- No usar frameworks externos obligatorios.
- No depender de instalaciones adicionales.
- Debe abrirse directamente en el navegador.
- Debe ser responsive.
- Debe funcionar en Chrome, Edge y Firefox.
- El código debe estar comentado para que pueda ser explicado en clase.

---

## Requisitos de diseño educativo

La página debe estar pensada para estudiantes universitarios o de instituto que están aprendiendo arquitectura de computadoras.

Debe explicar de forma clara:

- Qué es una CPU.
- Qué componentes internos tiene.
- Qué hace cada componente.
- Cómo viaja una instrucción dentro del procesador.
- Cómo se relacionan la Unidad de Control, la ALU, los registros y la memoria.
- Qué ocurre durante Fetch, Decode, Execute y Store.
- Por qué los registros son importantes.
- Cómo se actualizan los FLAGS.

Usar lenguaje técnico, pero acompañado de analogías simples.

---

## Comportamiento esperado de la simulación

Cuando el usuario presione `Iniciar simulación automática`, la web debe:

1. Iluminar el PC.
2. Animar el envío de la dirección al MAR.
3. Animar el acceso a memoria.
4. Mostrar la instrucción regresando al MDR.
5. Enviar la instrucción al IR.
6. Activar la Unidad de Control.
7. Enviar señales de control hacia ALU y registros.
8. Enviar los datos A y B hacia la ALU.
9. Mostrar la operación aritmética.
10. Guardar el resultado en ACC.
11. Actualizar los FLAGS.
12. Mostrar el resultado final.

Cada paso debe tener texto explicativo visible y animaciones claras.

---

## Detalles visuales sugeridos

Usa una estructura visual parecida a esta:

- CPU central como un rectángulo grande con bordes brillantes.
- Dentro de la CPU:
  - UC en la parte superior o centro.
  - ALU en el centro.
  - Registros a un lado.
  - PC, IR, MAR, MDR, ACC y FLAGS como tarjetas pequeñas.
- Memoria RAM fuera de la CPU, a la izquierda o derecha.
- Entrada de instrucción desde memoria.
- Salida de resultado hacia un panel externo.
- Buses como líneas animadas entre componentes.
- Señales de control como líneas punteadas.

---

## Datos internos de ejemplo para JavaScript

Usa una estructura de datos similar:

```javascript
const cpuState = {
  PC: "0x0040",
  IR: "",
  MAR: "",
  MDR: "",
  ACC: 0,
  A: 5,
  B: 3,
  FLAGS: {
    Z: 0,
    N: 0,
    C: 0,
    V: 0
  },
  instruction: "ADD A, B"
};
```

También crea un arreglo de pasos:

```javascript
const steps = [
  {
    phase: "Fetch",
    description: "El PC envía la dirección de la próxima instrucción al MAR.",
    activeComponents: ["PC", "MAR", "Memory"]
  },
  {
    phase: "Fetch",
    description: "La memoria devuelve la instrucción hacia el MDR.",
    activeComponents: ["Memory", "MDR"]
  },
  {
    phase: "Decode",
    description: "El IR guarda la instrucción y la Unidad de Control la decodifica.",
    activeComponents: ["IR", "UC"]
  },
  {
    phase: "Execute",
    description: "La ALU suma A y B.",
    activeComponents: ["ALU", "ACC", "FLAGS"]
  },
  {
    phase: "Store / Output",
    description: "El resultado se almacena en el acumulador y se muestra como salida.",
    activeComponents: ["ACC", "Output"]
  }
];
```

---

## Funciones JavaScript necesarias

Implementa funciones como:

- `startSimulation()`
- `pauseSimulation()`
- `resetSimulation()`
- `nextStep()`
- `previousStep()`
- `highlightComponents()`
- `updateRegisterPanel()`
- `showComponentInfo(componentName)`
- `updateTimeline(phase)`
- `animateDataFlow(from, to)`
- `executeInstruction(instruction)`

---

## Resultado final esperado

El resultado debe ser un archivo `index.html` completamente funcional, visualmente atractivo y educativo.

Debe permitir que el estudiante vea y comprenda:

- Cómo una instrucción entra a la CPU.
- Cómo la Unidad de Control la interpreta.
- Cómo la ALU ejecuta operaciones.
- Cómo los registros almacenan información temporal.
- Cómo el resultado se guarda o sale de la CPU.
- Cómo se actualizan los FLAGS.
- Cómo todos los componentes trabajan juntos.

La página debe sentirse como una experiencia interactiva de realidad aumentada virtual, sin necesidad de cámara ni gafas.

---

## Instrucción final para el generador de código

Genera el archivo completo `index.html` con todo el código necesario.  
No entregues explicaciones externas.  
Incluye únicamente el código final funcional, organizado, comentado y listo para abrir en el navegador.
