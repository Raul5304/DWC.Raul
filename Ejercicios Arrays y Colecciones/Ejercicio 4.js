let tareas = [
    { texto: "Estudiar JavaScript", completada: false },
    { texto: "Revisar arrays", completada: false },
    { texto: "Preparar práctica", completada: true }
  ];

function mostrarTareas() {
    console.log("📋 Lista de tareas:");
    tareas.forEach(t => {
      const estado = t.completada ? "✅" : "❌";
      console.log(`${estado} ${t.texto}`);
    });
  }


function agregarTarea(texto) {
        tareas.push({ texto, completada: false });
        console.log(`➕ Tarea añadida: "${texto}"`);
      }

function completarTarea(texto) {
    const tarea = tareas.find(t => t.texto === texto);
    if (tarea) {
      tarea.completada = true;
      console.log(`✔️ Tarea completada: "${texto}"`);
    } else {
        console.log(`⚠️ No se encontró la tarea "${texto}"`);
    }
}

function mostrarPendientes() {
    const pendientes = tareas.filter(t => !t.completada);
    console.log("⏳ Tareas pendientes:");
    pendientes.forEach(t => console.log(`❌ ${t.texto}`));
    console.log(`Total pendientes: ${pendientes.length}`);
  }