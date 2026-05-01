// ===== DATA =====
const TIMELINE_DATA = {
  '1960': {
    era:'Años 60 — Era del Mainframe',title:'El Nacimiento de la Virtualización',
    thumb:'images/era_1960.png',
    img:'images/era_1960.png',
    gallery:[
      {url:'images/era_1960.png',cap:'Sala de Mainframes IBM, años 60'},
      {url:'images/era_1972.png',cap:'IBM System/370 — evolution of mainframe computing'},
      {url:'images/era_1990.png',cap:'From mainframes to microchips — the hardware revolution'}
    ],
    body:`<p>En los años 60, investigadores de IBM desarrollaron el <strong>CP-40</strong> (1967), el primer sistema en implementar virtualización completa. El objetivo era revolucionario: permitir que múltiples usuarios compartieran simultáneamente un costoso mainframe.</p>
<p>Le siguió el <strong>IBM CP-67/CMS</strong> en el System/360 Modelo 67. Este sistema introdujo el concepto de <em>Programa de Control</em> — lo que hoy llamamos hypervisor — que gestionaba múltiples <em>Máquinas Virtuales</em> aisladas en un único host físico.</p>
<p>Estos sistemas demostraron que el hardware podía abstraerse y compartirse eficientemente, sembrando la semilla de todo lo que vendría en las próximas seis décadas.</p>`,
    facts:[{l:'Año',v:'1967'},{l:'Sistema',v:'IBM CP-40'},{l:'Tipo',v:'Mainframe'},{l:'Persona Clave',v:'R.J. Creasy'}],
    tags:['IBM','CP-40','CP-67','CMS','Mainframe','Máquina Virtual']
  },
  '1972': {
    era:'1972 — IBM VM/370',title:'El Primer Hypervisor Comercial',
    thumb:'images/era_1972.png',
    img:'images/era_1972.png',
    gallery:[
      {url:'images/era_1972.png',cap:'IBM System/370 — plataforma VM/370'},
      {url:'images/era_1960.png',cap:'Legado del mainframe IBM — raíces de la virtualización'},
      {url:'images/era_1990.png',cap:'Evolución del hardware: del System/370 al x86'}
    ],
    body:`<p>IBM lanzó <strong>VM/370</strong> en 1972 como parte del System/370. Fue el primer producto hypervisor disponible comercialmente, formalizando la virtualización para uso empresarial.</p>
<p>VM/370 podía ejecutar múltiples copias de <strong>OS/360</strong> o <strong>CMS</strong> simultáneamente. Cada VM recibía su propio entorno aislado con CPU virtual, memoria y dispositivos de E/S dedicados.</p>
<p>El sistema introdujo conceptos que aún se usan hoy: <strong>niveles de privilegio</strong>, ejecución <strong>trap-and-emulate</strong> y <strong>memory ballooning</strong>. La línea VM de IBM evolucionó durante décadas; z/VM sigue corriendo en mainframes IBM Z.</p>`,
    facts:[{l:'Año',v:'1972'},{l:'Sistema',v:'VM/370'},{l:'Plataforma',v:'IBM System/370'},{l:'Estado',v:'Activo como z/VM'}],
    tags:['IBM','VM/370','z/VM','Comercial','Empresarial','Tipo 1']
  },
  '1990': {
    era:'Años 90 — El Problema del x86',title:'Por Qué el x86 Resistía la Virtualización',
    thumb:'images/era_1990.png',
    img:'images/era_1990.png',
    gallery:[
      {url:'images/era_1990.png',cap:'Intel Pentium — la CPU que no podía virtualizarse'},
      {url:'images/era_2005.png',cap:'Intel VT-x — la solución hardware que llegó después'},
      {url:'images/era_1998.png',cap:'VMware Workstation — la solución por software'}
    ],
    body:`<p>A medida que la arquitectura x86 dominó el mercado de PC en los años 90, los ingenieros descubrieron un problema crítico: <strong>el x86 no fue diseñado para ser virtualizable</strong>.</p>
<p>El teorema de Popek y Goldberg (1974) definía los requisitos de una arquitectura virtualizable. El x86 los violaba porque <strong>17 instrucciones sensibles</strong> se comportaban diferente en modo usuario vs. kernel sin generar traps, haciendo imposible que un hypervisor las interceptara correctamente.</p>
<p>Este problema desconcertó a la industria por años. Las soluciones propuestas incluyeron traducción binaria, paravirtualización y esperar a que los fabricantes arreglaran la CPU.</p>`,
    facts:[{l:'Era',v:'1985–1998'},{l:'Problema',v:'17 instrucciones no virtualizables'},{l:'Arquitectura',v:'Intel x86'},{l:'Solución',v:'Traducción Binaria (1998)'}],
    tags:['x86','Intel','CPU Rings','Popek-Goldberg','Traducción Binaria']
  },
  '1998': {
    era:'1998 — La Revolución VMware',title:'Resolviendo la Virtualización x86',
    thumb:'images/era_1998.png',
    img:'images/era_1998.png',
    gallery:[
      {url:'images/era_1998.png',cap:'VMware Workstation — primer producto de virtualización x86'},
      {url:'images/era_2003.png',cap:'VMware ESX Server — edición para datacenter empresarial'},
      {url:'images/era_1990.png',cap:'El chip x86 que VMware finalmente conquistó'}
    ],
    body:`<p>En 1998, Mendel Rosenblum, Edouard Bugnion, Scott Devine y Diane Greene fundaron <strong>VMware</strong> y resolvieron el problema del x86 mediante <strong>traducción binaria (TB)</strong>.</p>
<p><strong>VMware Workstation 1.0</strong> se lanzó en 1999, permitiendo ejecutar Windows dentro de Linux o viceversa. La técnica reescribía dinámicamente las instrucciones problemáticas del x86 en tiempo de ejecución, sustituyéndolas por equivalentes seguros.</p>
<p>Fue un momento decisivo. De repente la arquitectura CPU más popular del mundo podía alojar máquinas virtuales. VMware dominó la virtualización empresarial durante las dos décadas siguientes.</p>`,
    facts:[{l:'Fundada',v:'1998'},{l:'Fundadores',v:'Rosenblum, Greene y otros'},{l:'Técnica',v:'Traducción Binaria'},{l:'Producto',v:'VMware Workstation 1.0 (1999)'}],
    tags:['VMware','Traducción Binaria','x86','Workstation','Revolución','1998']
  },
  '2003': {
    era:'2003–2008 — Auge Empresarial',title:'La Virtualización Conquista el Datacenter',
    thumb:'images/era_2003.png',
    img:'images/era_2003.png',
    gallery:[
      {url:'images/era_2003.png',cap:'Datacenter empresarial — consolidación con VMware ESX'},
      {url:'images/era_2008.png',cap:'Infraestructura escalable — anticipo de la era cloud'},
      {url:'images/era_1998.png',cap:'VMware vSphere gestionando el datacenter'}
    ],
    body:`<p>VMware lanzó <strong>ESX Server</strong> en 2001 y luego <strong>ESXi</strong> — un hypervisor Tipo 1 bare-metal que corría directamente sobre el hardware del servidor sin SO anfitrión. Esto transformó los datacenters mundiales.</p>
<p>La consolidación de servidores se convirtió en el caso de uso definitivo: en lugar de una aplicación por servidor físico (~10% utilización CPU), las empresas podían ejecutar decenas de VMs por host con un ROI inmediato y masivo.</p>
<p>Mientras tanto, el <strong>hypervisor Xen</strong> (2003) de la Universidad de Cambridge introdujo la <strong>paravirtualización</strong> — donde el SO invitado coopera con el hypervisor logrando rendimiento casi nativo. Xen impulsó los primeros servicios de Amazon Web Services.</p>`,
    facts:[{l:'VMware ESX',v:'2001'},{l:'Proyecto Xen',v:'2003'},{l:'Técnica',v:'Paravirtualización'},{l:'Impacto',v:'Consolidación de Servidores'}],
    tags:['VMware ESX','ESXi','Xen','Paravirtualización','Datacenter','Consolidación Servidores']
  },
  '2005': {
    era:'2005–2006 — Asistencia por Hardware',title:'Intel VT-x y AMD-V lo Cambian Todo',
    thumb:'images/era_2005.png',
    img:'images/era_2005.png',
    gallery:[
      {url:'images/era_2005.png',cap:'Intel VT-x y AMD-V — soporte de virtualización a nivel hardware'},
      {url:'images/era_1990.png',cap:'La evolución: del Pentium no virtualizable al VT-x'},
      {url:'images/era_2003.png',cap:'Datacenters que se beneficiaron de la asistencia hardware'}
    ],
    body:`<p>Intel lanzó la <strong>Tecnología Vanderpool (VT-x)</strong> en 2005, y AMD le siguió con <strong>AMD-V (SVM)</strong> en 2006. Estas extensiones de CPU añadieron un nuevo nivel de privilegio — <strong>modo VMX root</strong> — diseñado específicamente para hypervisores.</p>
<p>Con la virtualización asistida por hardware, la propia CPU gestiona las entradas y salidas de VM, capturando instrucciones sensibles automáticamente. La traducción binaria y la paravirtualización dejaron de ser necesarias.</p>
<p>Esto permitió que <strong>KVM (Máquina Virtual basada en Kernel)</strong> se integrara al kernel de Linux en 2007, convirtiendo cada servidor Linux en un potencial host hypervisor. La barrera de entrada a la virtualización cayó casi a cero.</p>`,
    facts:[{l:'Intel VT-x',v:'2005'},{l:'AMD-V',v:'2006'},{l:'KVM Integrado',v:'Linux 2.6.20 (2007)'},{l:'Modos VMX',v:'Root / No-root'}],
    tags:['Intel VT-x','AMD-V','Virtualización HW','KVM','VMCS','VMX']
  },
  '2008': {
    era:'2008–2015 — Era Cloud',title:'Los Hypervisores Impulsan la Revolución Cloud',
    thumb:'images/era_2008.png',
    img:'images/era_2008.png',
    gallery:[
      {url:'images/era_2008.png',cap:'Datacenter hyperescala de AWS — infraestructura cloud con Xen'},
      {url:'images/era_2003.png',cap:'Datacenters empresariales migrando a la nube'},
      {url:'images/era_2020.png',cap:'Silicon cloud moderno — AWS Nitro siguiente generación'}
    ],
    body:`<p><strong>Amazon Web Services EC2</strong> (lanzado en 2006, escalado masivamente desde 2008) usó Xen para ofrecer servidores virtuales bajo demanda. Demostró que el hypervisor podía ser la base de una industria de billones de dólares.</p>
<p>Microsoft lanzó <strong>Hyper-V</strong> en 2008 como rol de Windows Server — un hypervisor Tipo 1 que llevó la virtualización empresarial al ecosistema Windows. Google construyó su nube sobre KVM.</p>
<p>El hypervisor de la "era cloud" requirió nuevas capacidades: <strong>migración en vivo</strong>, <strong>sobrecompromiso de memoria</strong>, <strong>redes SR-IOV</strong> y <strong>virtualización de almacenamiento</strong>. Los hypervisores se convirtieron en la columna vertebral invisible de internet.</p>`,
    facts:[{l:'AWS EC2',v:'2006–2008'},{l:'Hyper-V',v:'2008'},{l:'Plataforma',v:'Xen / KVM / Hyper-V'},{l:'Característica',v:'Migración en Vivo'}],
    tags:['AWS','EC2','Hyper-V','Microsoft','Cloud','Migración en Vivo','Multi-tenencia']
  },
  '2015': {
    era:'2015–2020 — Revolución Contenedores',title:'Docker y la Era de la Virtualización Ligera',
    thumb:'images/era_2015.png',
    img:'images/era_2015.png',
    gallery:[
      {url:'images/era_2015.png',cap:'Docker y Kubernetes — orquestación de contenedores'},
      {url:'images/era_2008.png',cap:'Infraestructura cloud ejecutando cargas en contenedores'},
      {url:'images/era_2020.png',cap:'MicroVMs — el puente entre contenedores y VMs'}
    ],
    body:`<p><strong>Docker</strong> (2013) popularizó los contenedores Linux — un mecanismo de aislamiento más ligero que usa namespaces del kernel y cgroups en lugar de máquinas virtuales completas. Los contenedores arrancan en milisegundos y usan mucha menos memoria que las VMs.</p>
<p><strong>Kubernetes</strong> (2014, liberado por Google) proporcionó orquestación de contenedores a escala. Surgió la pregunta: "¿Seguimos necesitando hypervisores?"</p>
<p>La respuesta fue matizada. Los contenedores sacrificaron aislamiento fuerte por velocidad. Los hypervisores siguieron siendo críticos para fronteras de seguridad y nubes multi-inquilino. La industria avanzó hacia <strong>modelos híbridos</strong> — contenedores dentro de VMs.</p>`,
    facts:[{l:'Docker',v:'2013'},{l:'Kubernetes',v:'2014 (Google)'},{l:'Tecnología',v:'Namespaces + cgroups'},{l:'vs VMs',v:'10x más ligero, menor aislamiento'}],
    tags:['Docker','Kubernetes','LXC','Contenedores','Namespaces','cgroups','OCI']
  },
  '2020': {
    era:'2020+ — Hypervisores Cloud Modernos',title:'MicroVMs, Nitro y Computación Confidencial',
    thumb:'images/era_2020.png',
    img:'images/era_2020.png',
    gallery:[
      {url:'images/era_2020.png',cap:'Silicon personalizado AWS Nitro — el futuro de los hypervisores'},
      {url:'images/era_2008.png',cap:'Infraestructura cloud hyperescala impulsada por Nitro'},
      {url:'images/era_2015.png',cap:'MicroVMs Firecracker ejecutando contenedores Lambda'}
    ],
    body:`<p>AWS lanzó el <strong>Hypervisor Nitro</strong> (2017) — un hypervisor basado en KVM radicalmente simplificado que delega las E/S a tarjetas Nitro dedicadas (ASICs personalizados). El hypervisor usa menos del 3% de CPU, dejando más recursos para los clientes.</p>
<p><strong>Firecracker</strong> (2018, liberado por AWS) introdujo las <strong>microVMs</strong> — VMs mínimas que arrancan en 125ms con un VMM escrito en Rust. Usado en AWS Lambda y Fargate, proporciona aislamiento a nivel de VM con la sobrecarga de un contenedor.</p>
<p>La frontera ahora es la <strong>Computación Confidencial</strong>: Intel TDX, AMD SEV-SNP y ARM CCA crean enclaves de VM cifrados donde ni el proveedor cloud puede leer la memoria del invitado.</p>`,
    facts:[{l:'AWS Nitro',v:'2017'},{l:'Firecracker',v:'2018 (Rust)'},{l:'Arranque MicroVM',v:'< 125ms'},{l:'Próximo',v:'Computación Confidencial'}],
    tags:['AWS Nitro','Firecracker','MicroVM','Confidential Computing','AMD SEV','Intel TDX','Rust']
  }
};

const ARCH_DATA = {
  type1:{
    title:'Tipo 1 — Hypervisor Bare Metal',
    desc:'Se ejecuta directamente sobre el hardware físico sin sistema operativo anfitrión. El hypervisor ES el SO de la capa de hardware, brindando máximo rendimiento y seguridad para cargas de producción.',
    layers:[
      {label:'Aplicaciones',cls:''},
      {label:'SO Invitado',cls:''},
      {label:'Máquina Virtual',cls:''},
      {label:'Hypervisor Tipo 1',cls:'highlight'},
      {label:'Hardware Físico',cls:'dim'},
    ],
    tags:['Alto Rendimiento','Producción','Bare Metal','Acceso Directo HW'],
    examples:'VMware ESXi, Microsoft Hyper-V, Xen, KVM, AWS Nitro'
  },
  type2:{
    title:'Tipo 2 — Hypervisor Hospedado',
    desc:'Se ejecuta como aplicación sobre un SO anfitrión convencional. Más fácil de instalar, ideal para desarrolladores y estaciones de trabajo, pero con la sobrecarga de dos capas de SO.',
    layers:[
      {label:'Aplicaciones Invitadas',cls:''},
      {label:'SO Invitado',cls:'highlight'},
      {label:'Hypervisor Tipo 2',cls:'highlight'},
      {label:'SO Anfitrión',cls:''},
      {label:'Hardware Físico',cls:'dim'},
    ],
    tags:['Uso en Desarrollo','Fácil Instalación','Mayor Sobrecarga','Workstation'],
    examples:'VMware Workstation, VirtualBox, Parallels Desktop, QEMU'
  },
  para:{
    title:'Paravirtualización',
    desc:'El SO invitado se modifica para ser "consciente del hypervisor", reemplazando instrucciones no virtualizables con hiperllamadas explícitas. Logra rendimiento casi nativo sin soporte de hardware.',
    layers:[
      {label:'Apps Invitadas',cls:''},
      {label:'SO Invitado Modificado (hiperllamadas)',cls:'highlight'},
      {label:'Hypervisor Paravirtual',cls:'highlight'},
      {label:'Hardware',cls:'dim'},
    ],
    tags:['Rend. Casi Nativo','SO Invitado Modificado','Sin Asist. HW','Hiperllamadas'],
    examples:'Xen (modo paravirt), primeras VMware tools, UML (User Mode Linux)'
  },
  hwassist:{
    title:'Virtualización Asistida por Hardware',
    desc:'Las extensiones de CPU (Intel VT-x / AMD-V) añaden un modo VMX root dedicado al hypervisor. La CPU gestiona la entrada/salida de VM automáticamente, eliminando la necesidad de traducción binaria.',
    layers:[
      {label:'Apps Invitadas',cls:''},
      {label:'SO Invitado sin modificar',cls:''},
      {label:'Hypervisor (VMX root)',cls:'highlight'},
      {label:'CPU VT-x / AMD-V',cls:'highlight'},
      {label:'Hardware',cls:'dim'},
    ],
    tags:['Intel VT-x','AMD-V','VMCS','Sin Modificar SO','Mejor Compatibilidad'],
    examples:'KVM, VMware (moderno), Hyper-V, VirtualBox (modo acelerado)'
  },
  microvm:{
    title:'MicroVM — Virtualización Ligera',
    desc:'VMM ultra-mínimo que expone solo los dispositivos virtuales esenciales. Arranca en milisegundos, usa muy poca memoria y provee aislamiento a nivel de VM para cargas serverless y contenedores.',
    layers:[
      {label:'Función / Contenedor',cls:'highlight'},
      {label:'Kernel Invitado Mínimo',cls:'highlight'},
      {label:'MicroVM (Firecracker/gVisor)',cls:'highlight'},
      {label:'KVM / Hardware',cls:'dim'},
    ],
    tags:['< 125ms Arranque','~5MB Memoria','Serverless','VMM en Rust','Superficie Mínima'],
    examples:'AWS Firecracker, Google gVisor, Cloud Hypervisor, QEMU microvm'
  }
};

const COMPARATOR_DATA = [
  {name:'VMware ESXi',icon:'🔷',type:'Tipo 1 Bare Metal',
   stats:{Rendimiento:92,Aislamiento:95,'Velocidad Arranque':40,'Nativo Cloud':55,Seguridad:93},
   badges:['Empresarial','vSphere','vMotion','Licenciado'],
   desc:'El estándar de la industria para virtualización empresarial. Un hypervisor Tipo 1 (bare-metal) altamente optimizado.',
   details:'<p>Lanzado inicialmente en 2001, ESXi no depende de un sistema operativo subyacente. Su VMkernel propio maneja los recursos de hardware directamente, ofreciendo una estabilidad y aislamiento incomparables.</p><p>Es el núcleo de la suite VMware vSphere y destaca por características como vMotion (migración en vivo sin interrupciones), alta disponibilidad (HA) y tolerancia a fallos. Durante décadas ha sido la base de los datacenters de las Fortune 500.</p>',
   img:'images/comp_vmware.png'},
  {name:'Xen',icon:'🐝',type:'Tipo 1 / Paravirt',
   stats:{Rendimiento:88,Aislamiento:90,'Velocidad Arranque':50,'Nativo Cloud':70,Seguridad:88},
   badges:['Código Abierto','AWS (legado)','Paravirt','XCP-ng'],
   desc:'Pionero en la paravirtualización y tecnología fundamental detrás de los primeros años de Amazon Web Services (AWS).',
   details:'<p>Desarrollado originalmente en la Universidad de Cambridge (2003), Xen permite que múltiples SO compartan el hardware. Su característica distintiva fue la <strong>paravirtualización</strong>, donde el SO invitado se modifica para cooperar con el hypervisor, logrando un rendimiento casi nativo sin asistencia de hardware.</p><p>Hoy en día sigue vivo en distribuciones empresariales como XCP-ng y Citrix Hypervisor, siendo vital para la historia de la nube pública.</p>',
   img:'images/era_2003.png'},
  {name:'KVM',icon:'🐧',type:'Tipo 1 (kernel Linux)',
   stats:{Rendimiento:94,Aislamiento:91,'Velocidad Arranque':55,'Nativo Cloud':85,Seguridad:90},
   badges:['Código Abierto','Linux','QEMU','Google Cloud'],
   desc:'Kernel-based Virtual Machine. Convierte el kernel nativo de Linux en un hypervisor moderno y escalable.',
   details:'<p>Al estar integrado directamente en el kernel de Linux desde 2007, KVM hereda toda la gestión de memoria, planificación de procesos y soporte de hardware de Linux, ejecutando cada VM como un proceso regular.</p><p>Requiere procesadores con extensiones de virtualización (Intel VT-x o AMD-V). Hoy en día es la base de las nubes modernas, impulsando gran parte de Google Cloud Platform (GCP) y ecosistemas OpenStack.</p>',
   img:'images/era_2005.png'},
  {name:'Hyper-V',icon:'🪟',type:'Tipo 1 Bare Metal',
   stats:{Rendimiento:89,Aislamiento:92,'Velocidad Arranque':45,'Nativo Cloud':75,Seguridad:91},
   badges:['Microsoft','Azure','Windows','WSL2'],
   desc:'La solución de virtualización nativa de Microsoft, que impulsa desde servidores locales hasta la nube de Azure.',
   details:'<p>Aunque a menudo se gestiona desde Windows, Hyper-V es un hypervisor Tipo 1 real que corre sobre el hardware. La partición principal (el host) se ejecuta en realidad encima del hypervisor, igual que los invitados.</p><p>Es el motor exclusivo de Microsoft Azure, y en el mundo del consumidor, potencia el Subsistema de Windows para Linux (WSL2) y características de seguridad basadas en virtualización (VBS).</p>',
   img:'images/era_2008.png'},
  {name:'AWS Nitro',icon:'🔶',type:'KVM Personalizado',
   stats:{Rendimiento:98,Aislamiento:97,'Velocidad Arranque':65,'Nativo Cloud':98,Seguridad:97},
   badges:['AWS','ASIC Propio','Offload','Propietario'],
   desc:'Un cambio de paradigma en hypervisores: combina un software minimalista con tarjetas de silicio (hardware) personalizadas de AWS.',
   details:'<p>El sistema Nitro revolucionó la nube. AWS trasladó casi toda la carga del hypervisor (redes VPC, almacenamiento EBS, seguridad y gestión) a tarjetas PCIe dedicadas con chips ASIC diseñados a medida (Annapurna Labs).</p><p>Esto significa que el hypervisor principal usa menos del 1% de los recursos del sistema, entregando un rendimiento de "bare metal" (sin sobrecarga) y seguridad física aislada para las instancias EC2 modernas.</p>',
   img:'images/era_2020.png'},
  {name:'Firecracker',icon:'🔥',type:'MicroVM (Rust)',
   stats:{Rendimiento:90,Aislamiento:88,'Velocidad Arranque':99,'Nativo Cloud':99,Seguridad:93},
   badges:['Código Abierto','Serverless','Rust','Lambda/Fargate'],
   desc:'Un monitor de máquinas virtuales (VMM) ultra-ligero y seguro escrito en Rust para workloads serverless efímeros.',
   details:'<p>Creado por AWS y liberado como código abierto en 2018, Firecracker proporciona el fuerte aislamiento de seguridad de las VMs tradicionales, pero arranca en menos de 125 milisegundos con una huella de memoria de solo ~5MB.</p><p>Es el motor secreto que hace posible servicios a hiperescala como AWS Lambda, permitiendo iniciar, ejecutar código y destruir millones de micro-máquinas virtuales de forma segura cada segundo sin que el usuario lo note.</p>',
   img:'images/era_2015.png'}
];

const IMPACT_DATA = [
  {icon:'☁️',title:'Cloud Computing',desc:'Cada VM en AWS, Azure y GCP corre sobre un hypervisor. El cloud computing es virtualización a escala planetaria.'},
  {icon:'🏢',title:'Multi-Tenencia',desc:'Cientos de clientes comparten servidores físicos de forma segura gracias al aislamiento del hypervisor — el modelo de negocio de la nube.'},
  {icon:'📦',title:'Contenedores',desc:'Docker y Kubernetes evolucionaron DESDE la tecnología de VMs. Los hypervisores siguen siendo la capa de aislamiento bajo los contenedores.'},
  {icon:'⚡',title:'Serverless',desc:'AWS Lambda usa microVMs de Firecracker para ejecutar millones de funciones aisladas por segundo.'},
  {icon:'🔒',title:'Seguridad',desc:'Los hypervisores son la frontera de seguridad en la nube. La Computación Confidencial cifra la memoria de las VMs incluso del propio proveedor.'},
  {icon:'🤖',title:'Infraestructura de IA',desc:'Cada nube GPU (clusters A100, H100) está virtualizada. El entrenamiento de IA a escala depende de la orquestación del hypervisor.'},
  {icon:'🌐',title:'Edge Computing',desc:'Hypervisores ligeros ejecutan VMs en nodos de borde, estaciones base y pasarelas IoT en todo el mundo.'},
  {icon:'🚀',title:'SaaS Moderno',desc:'Cada aplicación SaaS — desde Gmail hasta Salesforce — corre sobre infraestructura virtualizada impulsada por hypervisores.'}
];

// ===== PARTICLES =====
function initParticles(){
  const canvas=document.getElementById('particle-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let W=canvas.width=window.innerWidth,H=canvas.height=window.innerHeight;
  const pts=Array.from({length:60},()=>({
    x:Math.random()*W,y:Math.random()*H,
    vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,
    r:Math.random()*2+1
  }));
  window.addEventListener('resize',()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight});
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0)p.x=W;if(p.x>W)p.x=0;
      if(p.y<0)p.y=H;if(p.y>H)p.y=0;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(0,212,255,0.5)';ctx.fill();
    });
    pts.forEach((a,i)=>pts.slice(i+1).forEach(b=>{
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<120){
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(0,212,255,${.15*(1-d/120)})`;ctx.lineWidth=.5;ctx.stroke();
      }
    }));
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== MODAL =====
let currentTimelineKey = null;

function openModal(id){
  const d=TIMELINE_DATA[id];if(!d)return;
  currentTimelineKey = id;
  const facts=d.facts.map(f=>`<div class="modal-fact"><div class="fact-label">${f.l}</div><div class="fact-val">${f.v}</div></div>`).join('');
  const tags=d.tags.map(t=>`<span class="modal-tag">${t}</span>`).join('');
  const gallery=(d.gallery||[]).map((g,i)=>`
    <div class="mgal-item${i===0?' active':''}" onclick="setModalImg('${g.url}','${g.cap.replace(/'/g,"&#39;")}')">
      <img src="${g.url}" alt="${g.cap}" onerror="this.parentElement.style.display='none'">
    </div>`).join('');
  const mainImg=d.gallery&&d.gallery[0]?d.gallery[0].url:d.img;
  const mainCap=d.gallery&&d.gallery[0]?d.gallery[0].cap:d.title;
  document.getElementById('modal-content').innerHTML=`
    <div class="modal-era">${d.era}</div>
    <div class="modal-title">${d.title}</div>
    <div class="modal-img-wrap">
      <img class="modal-img" id="modal-main-img" src="${mainImg}" alt="${d.title}" onerror="this.style.display='none'">
      <div class="modal-img-cap" id="modal-img-cap">${mainCap}</div>
    </div>
    <div class="modal-gallery">${gallery}</div>
    <div class="modal-body">${d.body}</div>
    <div class="modal-facts">${facts}</div>
    <div class="modal-tags">${tags}</div>`;
  
  const prevBtn = document.getElementById('modal-nav-prev');
  const nextBtn = document.getElementById('modal-nav-next');
  if(prevBtn) prevBtn.style.display = 'block';
  if(nextBtn) nextBtn.style.display = 'block';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function prevModal(event) {
  if(event) event.stopPropagation();
  if(!currentTimelineKey) return;
  const keys = Object.keys(TIMELINE_DATA);
  const idx = keys.indexOf(currentTimelineKey);
  if (idx > 0) {
    openModal(keys[idx - 1]);
  } else if (idx === 0) {
    openModal(keys[keys.length - 1]);
  }
}

function nextModal(event) {
  if(event) event.stopPropagation();
  if(!currentTimelineKey) return;
  const keys = Object.keys(TIMELINE_DATA);
  const idx = keys.indexOf(currentTimelineKey);
  if (idx >= 0 && idx < keys.length - 1) {
    openModal(keys[idx + 1]);
  } else if (idx === keys.length - 1) {
    openModal(keys[0]);
  }
}
function setModalImg(url,cap){
  const img=document.getElementById('modal-main-img');
  const capEl=document.getElementById('modal-img-cap');
  if(img){img.style.opacity='0';setTimeout(()=>{img.src=url;img.style.opacity='1'},180)}
  if(capEl)capEl.textContent=cap;
  document.querySelectorAll('.mgal-item').forEach(el=>el.classList.remove('active'));
  event.currentTarget.classList.add('active');
}
function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

// ===== ARCHITECTURE =====
function showArch(key){
  const d=ARCH_DATA[key];if(!d)return;
  document.querySelectorAll('.arch-btn').forEach(b=>b.classList.toggle('active',b.dataset.arch===key));
  const layers=d.layers.map(l=>`<div class="arch-layer ${l.cls}">${l.label}</div>`).join('');
  const tags=d.tags.map(t=>`<span class="arch-tag">${t}</span>`).join('');
  document.getElementById('arch-display').innerHTML=`
    <div class="arch-inner">
      <div class="arch-stack">${layers}</div>
      <div class="arch-info">
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
        <div class="arch-tags">${tags}</div>
        <div class="arch-examples"><strong>Ejemplos:</strong> ${d.examples}</div>
      </div>
    </div>`;
}

// ===== COMPARATOR =====
function buildComparator(){
  const el=document.getElementById('comparator-grid');
  if(!el)return;
  el.innerHTML=COMPARATOR_DATA.map((c, idx)=>{
    const stats=Object.entries(c.stats).map(([k,v])=>`
      <div class="stat-row">
        <div class="stat-label">${k}</div>
        <div class="stat-bar-wrap">
          <div class="stat-bar"><div class="stat-fill" style="width:0%" data-w="${v}%"></div></div>
          <div class="stat-val">${v}</div>
        </div>
      </div>`).join('');
    const badges=c.badges.map(b=>`<span class="comp-badge">${b}</span>`).join('');
    return`<div class="comp-card" onclick="openCompModal(${idx})" style="cursor:pointer" title="Haz clic para ver detalles de ${c.name}">
      <div class="comp-header">
        <div class="comp-icon">${c.icon}</div>
        <div><div class="comp-name">${c.name}</div><div class="comp-type">${c.type}</div></div>
      </div>
      <div class="comp-stats">${stats}</div>
      <div class="comp-badges">${badges}</div>
    </div>`;
  }).join('');
  // animate bars when visible
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.querySelectorAll('.stat-fill').forEach(f=>{f.style.width=f.dataset.w});
        obs.unobserve(e.target);
      }
    });
  },{threshold:.2});
  document.querySelectorAll('.comp-card').forEach(c=>obs.observe(c));
}

// ===== MODAL DE COMPARADOR =====
function openCompModal(idx){
  const d=COMPARATOR_DATA[idx];if(!d)return;
  
  const stats=Object.entries(d.stats).map(([k,v])=>`
      <div class="stat-row">
        <div class="stat-label">${k}</div>
        <div class="stat-bar-wrap" style="flex:1; margin-left:15px; margin-right:15px;">
          <div class="stat-bar"><div class="stat-fill" style="width:${v}%; background:var(--cyan)"></div></div>
        </div>
        <div class="stat-val" style="width:30px; text-align:right;">${v}</div>
      </div>`).join('');
      
  const badges=d.badges.map(b=>`<span class="modal-tag">${b}</span>`).join('');
  
  document.getElementById('modal-content').innerHTML=`
    <div class="modal-era">${d.type}</div>
    <div class="modal-title">${d.name}</div>
    <div class="modal-img-wrap">
      <img class="modal-img" src="${d.img}" alt="${d.name}" onerror="this.style.display='none'">
      <div class="modal-img-cap">${d.name} — Arquitectura e Implementación</div>
    </div>
    <div class="modal-body">
      <p style="font-size: 1.15rem; color: var(--cyan); margin-bottom: 20px; font-weight: 500;">${d.desc}</p>
      ${d.details}
    </div>
    <div style="margin-top:30px; margin-bottom:20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top:25px;">
      <h4 style="margin-bottom:20px; font-weight:600; font-size:1.1rem; color: #fff;">Métricas de Referencia</h4>
      <div class="comp-stats" style="max-width:400px; margin:0 auto;">${stats}</div>
    </div>
    <div class="modal-tags">${badges}</div>`;
    
  const prevBtn = document.getElementById('modal-nav-prev');
  const nextBtn = document.getElementById('modal-nav-next');
  if(prevBtn) prevBtn.style.display = 'none';
  if(nextBtn) nextBtn.style.display = 'none';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

// ===== IMPACT =====
function buildImpact(){
  const el=document.getElementById('impact-grid');
  if(!el)return;
  el.innerHTML=IMPACT_DATA.map(i=>`
    <div class="impact-card">
      <div class="impact-icon">${i.icon}</div>
      <h4>${i.title}</h4>
      <p>${i.desc}</p>
    </div>`).join('');
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}
    });
  },{threshold:.1});
  document.querySelectorAll('.section-header,.impact-card,.comp-card,.tl-node').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(20px)';
    el.style.transition='opacity .6s ease, transform .6s ease';
    obs.observe(el);
  });
}

// ===== NAV HIGHLIGHT =====
function initNavHighlight(){
  const sections=document.querySelectorAll('section[id]');
  const links=document.querySelectorAll('.nav-links a');
  
  const updateNav = () => {
    let current = '';
    // Si estamos al principio de la página, forzar la primera sección
    if (window.scrollY < 50 && sections.length > 0) {
      current = sections[0].getAttribute('id');
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute('id');
        }
      });
    }

    links.forEach(l => {
      l.style.color = l.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
    });
  };

  window.addEventListener('scroll', updateNav);
  updateNav(); // Configurar al cargar
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded',()=>{
  initParticles();
  // showArch('type1'); // Removido porque la sección de Arquitectura ahora usa React
  buildComparator();
  buildImpact();
  initScrollAnimations();
  initNavHighlight();
});

