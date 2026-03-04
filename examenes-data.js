

const examenesDisponibles = {
    // Matemática Discreta
    'MD': {
        'PC1': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251'],  // MD-PC1-241.pdf existe
        'PC2': ['181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251', '252'],
        'PC3': ['061', '062', '071', '072', '081', '082', '181', '182', '191', '192', '212', '230', '231', '232', '241', '242', '251',],
        'PC4': ['212', '230', '231', '232', '241', '242', '251'], // MD-PC2-241.pdf ✅ NUEVO
        'EF': ['212', '232', '241', '242', '251'], // MD-PC2-241.pdf ✅ NUEVO

    },
    'AL': {
        'PC1': ['232'],
        'PC2': ['231', '232', '241', '252'],
        'PC3': ['232', '241'],
        'PC4': ['232', '241'],
        'EF': ['231', '232', '241'],

    },
    'F1': {
        'PC1': ['061', '062', '071', '072', '081', '082', '091', '092', '232', '241', '242', '251'],
        'PC2': ['061', '062', '071', '072', '081', '082', '091', '092', '142 1', '142 2', '201', '202', '232', '242', '251', '252'],
        'PC3': ['061', '062', '072', '081', '082', '091', '092', '232', '241', '242'],
        'PC4': ['051', '052', '071', '072', '081', '082', '091', '092', '232', '241', '242'],
        'EF': ['061', '062', '071', '072', '081', '082', '091', '092', '231', '232', '241', '242'],
        'LAB1': ['232'],
        'LAB2': ['202'],
        'LAB3': ['232'],
        'LAB4': ['232'],
        'LAB5': ['251'], // MD-PC1-241.pdf existe
        'LAB6': ['202'], // MD-PC2-241.pdf ✅ NUEVO
    },

    // Física 2 - Prof. Castro
    // Carpeta: pdfs/F2C/
    'F2C': {
        'PC1': ['232', '241', '242', '251', '250', '2502', '2503'],
        'PC2': ['202', '242', '240', '251', '252', '250', '2502'],
        'PC3': ['202', '241', '242', '251', '252', '250',],
        'PC4': ['131', '151', '162', '172', '200', '201', '241', '242', '251', '250', '2502'],
        'EF': ['151', '201', '250'],
        'LAB1': ['A', 'B'],
        'LAB2': ['A', 'B'],
        'LAB3': ['A', 'B'],
        'LAB4': ['A'],
        'LAB5': ['A'],
        'LAB6': ['A'],
    },

    // Física 2 - Prof. Tejada
    // Carpeta: pdfs/F2T/
    'F2T': {
        'PC1': ['231', '241', '242', '251'],
        'PC2': ['232', '242'],
        'PC3': ['242', '251', '252'],
        'PC4': ['241'],
        'EF': ['201'],
        'LAB1': ['A', 'B'],
        'LAB2': ['A', 'B'],
        'LAB3': ['A', 'B'],
        'LAB4': ['A'],
        'LAB5': ['A'],
        'LAB6': ['A'],
    },
    'GA': {
        'PC1': ['231', '2312', '241', '242', '251', '252'],
        'PC2': ['231', '2312', '241', '242', '251'],
        'PC3': ['231', '232', '241', '251'],
        'PC4': ['231', '232', '241', '242', '251'],
        'EF': ['231', '232', '241', '242', '251']
    },
    'EST2': {
        'PC1': ['251'],
        'PC2': ['251'],
        'PC3': ['251'],
        'PC4': ['251'],
        'EF': ['241']
    },
    // Microeconomía - Prof. Sánchez
    // Carpeta: pdfs/MICROS/
    'MICROS': {
        'PC1': ['252'],
        'PC2': ['252'],
        'EP': ['251', '252'],
        'EF': ['252'],
        'C1': ['252'],
        'C2': ['252'],
        'C3': ['252'],
        'C4': ['252'],
        'C5': ['252'],
        'C6': ['252'],
        'CE': ['252'],
    },

    // Microeconomía - Prof. Caparachín
    // Carpeta: pdfs/MICROC/
    'MICROC': {
        'C3': ['231'],
        'C4': ['181'],
        'EP': ['181', '231', '232', '241', '242'],
        'EF': ['121', '122', '132', '142', '151', '152', '171', '182', '231', '232', '241', '241A'],
    },
    // Cálculo I
    // Carpeta: pdfs/C1/
    'C1': {
        'PC1': ['231', '232', '251'],
        'PC2': ['232', '242', '251'],
        'PC3': ['232', '241', '242'],
        'PC4': ['232', '241', '242'],
        'EF': ['232', '241'],  // Todos los ciclos en un solo array
        // Agrega más tipos y ciclos conforme subas PDFs
        // 'PC2': ['241'],
        // 'EF': ['241']
    },
    'CG': {
        'PC1': ['231', '241', '242', '2422', '250', '251', '252', '260'],
        'PC2': ['241', '2412', '2422', '250', '2512', '260'],
        'PC3': ['232', '241', '2412', '242', '2423', '250', '260'],
        'EP': ['242', '250', '251', '2512', '260'],
        'EF': ['231', '232', '241', '242', '242A', '251', '251A', '260'],  // Todos los ciclos en un solo array
        // Agrega más tipos y ciclos conforme subas PDFs
        // 'PC2': ['241'],
        // 'EF': ['241']
    },
    'TBD': {

        'EP': ['252'],

    },

    'IO': {
        'PC1': ['111'],
        'PC2': [],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    'TGS': {
        'PC1': [],
        'PC2': ['202', '222'],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Geometría Analítica  
    // 'GA': {
    //     'PC1': ['241'],
    //     'EF': ['241']
    // },

    // Cálculo I
    // 'C1': {
    //     'PC1': ['241', '242'],
    //     'PC2': ['241'],
    //     'EF': ['241']
    // },

    // Agrega más cursos conforme subas PDFs...

    // ── Ingeniería Civil ─────────────────────────────────────────────────────

    // Dibujo y Diseño Gráfico
    // Carpeta: pdfs/DDG/
    'DDG': {
        'PC1': ['222'],
        'PC2': [],
        'PC3': [],
        'EP': [],
        'EF': ['222'],
    },

    // Introducción a la Economía
    // Carpeta: pdfs/IE/
    'IE': {
        'C1': [],
        'C2': [],
        'C3': [],
        'C4': ['212'],
        'EP': [],
        'EF': [],
    },

    // Cálculo II
    // Carpeta: pdfs/C2/
    'C2': {
        'PC1': [],
        'PC2': ['151'],
        'PC3': [],
        'EP': [],
        'EF': [],
    },

    // Tecnología de los Materiales
    // Carpeta: pdfs/TM/
    'TM': {
        'PC1': [],
        'PC2': ['181', '221'],
        'PC3': [],
        'EP': [],
        'EF': [],
    },

    // Construcción I
    // Carpeta: pdfs/CON1/
    'CON1': {
        'PC1': ['221'],
        'PC2': ['201', '211'],
        'PC3': ['211'],
        'PC4': ['221'],
        'EP': [],
        'EF': [],
    },

    // Dinámica
    // Carpeta: pdfs/DIN/
    'DIN': {
        'PC1': ['222'],
        'PC2': ['201', '202'],
        'PC3': ['202', '222'],
        'PC4': ['202'],
        'EP': ['212'],
        'EF': [],
    },

    // Estática
    // Carpeta: pdfs/ESTA/
    'ESTA': {
        'PC1': ['202'],
        'PC2': [],
        'PC3': [],
        'PC4': ['212'],
        'EP': [],
        'EF': [],
    },

    // Tecnología del Concreto
    // Carpeta: pdfs/TC/
    'TC': {
        'PC1': [],
        'PC2': ['221'],
        'PC3': ['221'],
        'PC4': ['211'],
        'EP': [],
        'EF': [],
    },

    // Ecuaciones Diferenciales
    // Carpeta: pdfs/ED/
    'ED': {
        'PC1': [],
        'PC2': [],
        'PC3': [],
        'EP': [],
        'EF': [],
    },

    // Resistencia de Materiales I
    // Carpeta: pdfs/RM1/
    'RM1': {
        'PC1': ['061', '171', '211', '212'],
        'PC2': [],
        'PC3': ['061', '062', '071', '072', '081'],
        'PC4': ['201'],
        'EP': [],
        'EF': [],
    },

    // Mecánica de Fluidos I
    // Carpeta: pdfs/MF1/
    'MF1': {
        'PC1': ['211'],
        'PC2': ['221'],
        'PC3': ['201', '202'],
        'PC4': ['202'],
        'EP': [],
        'EF': [],
    },

    // Resistencia de Materiales II
    // Carpeta: pdfs/RM2/
    'RM2': {
        'PC1': ['082', '091', '092', '101', '102', '202', '212'],
        'PC2': ['081', '082', '091', '092', '101', '102', '211'],
        'PC3': ['082', '091', '092', '101', '102'],
        'PC4': ['082', '091', '092', '101', '102', '201'],
        'EP': ['082', '091', '092', '101', '102'],
        'EF': ['082', '091', '092', '101', '102'],
    },

    // ── Ingeniería Civil — Ciclos 7 al 10 ────────────────────────────────────

    // Análisis Estructural I
    // Carpeta: pdfs/AE1/
    'AE1': {
        'PC1': ['210'],
        'PC2': ['202', '210', '220', '221', '230'],
        'PC3': ['202'],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Mecánica de Fluidos II
    // Carpeta: pdfs/MF2/
    'MF2': {
        'PC1': [],
        'PC2': ['202'],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Presupuesto y Programación de Obra
    // Carpeta: pdfs/PPO/
    'PPO': {
        'PC1': [],
        'PC2': [],
        'PC3': ['211'],
        'PC4': ['211'],
        'EP': [],
        'EF': [],
    },

    // Análisis Estructural II
    // Carpeta: pdfs/AE2/
    'AE2': {
        'PC1': ['211', '221'],
        'PC2': ['231', '241'],
        'PC3': ['241'],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Concreto Armado I
    // Carpeta: pdfs/CA1/
    'CA1': {
        'PC1': ['212'],
        'PC2': ['211'],
        'PC3': [],
        'PC4': ['202'],
        'EP': [],
        'EF': [],
    },

    // Instalaciones Sanitarias
    // Carpeta: pdfs/ISAL/
    'ISAL': {
        'PC1': [],
        'PC2': [],
        'PC3': ['202'],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Concreto Armado II
    // Carpeta: pdfs/CA2/
    'CA2': {
        'PC1': [],
        'PC2': [],
        'PC3': ['222'],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Hidráulica
    // Carpeta: pdfs/HIDR/
    'HIDR': {
        'PC1': ['212'],
        'PC2': ['202'],
        'PC3': [],
        'PC4': ['212'],
        'EP': [],
        'EF': [],
    },

    // Ingeniería Antisísmica
    // Carpeta: pdfs/IAS/
    'IAS': {
        'PC1': ['161', '202', '211', '212'],
        'PC2': ['202', '211'],
        'PC3': ['202', '212'],
        'PC4': ['202', '211'],
        'EP': [],
        'EF': [],
    },

    // Ingeniería de Valuaciones y Tasaciones
    // Carpeta: pdfs/IVT/
    'IVT': {
        'PC1': ['232'],
        'PC2': [],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Ética y Moral
    // Carpeta: pdfs/ETM/
    'ETM': {
        'PC1': ['231'],
        'PC2': [],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    // Puentes y Obras de Arte
    // Carpeta: pdfs/POA/
    'POA': {
        'PC1': ['202', '212'],
        'PC2': [],
        'PC3': [],
        'PC4': ['212'],
        'EP': [],
        'EF': [],
    },

    // Caminos II (Electiva)
    // Carpeta: pdfs/CAM2/
    'CAM2': {
        'PC1': ['202', '211'],
        'PC2': ['221'],
        'PC3': ['201', '211'],
        'PC4': ['202'],
        'EP': [],
        'EF': [],
    },

    // ── Arquitectura ─────────────────────────────────────────────────────

    'F1G': {
        'PC1': [],
        'PC2': ['201'],
        'PC3': ['211'],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    'ISE': {
        'PC1': ['212'],
        'PC2': [],
        'PC3': ['212'],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    'LO': {
        'PC1': [],
        'PC2': [],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': ['222'],
    },

    // ── Ingeniería Industrial ──────────────────────────────────────────────────────

    'IA': {
        'PC1': ['192'],
        'PC2': [],
        'PC3': [],
        'PC4': [],
        'EP': [],
        'EF': [],
    },

    'PM': {
        'PC1': ['152', '161', '162', '170'],
        'PC2': ['151', '152', '161', '162'],
        'EP': ['151', '152', '161', '162'],
        'EF': ['151', '152', '161', '162'],
    },

    'ICI': {
        'PC1': ['210', '21SAI', '211'],
        'PC2': [],
        'PC3': [],
        'PC4': ['201'],
        'EP': [],
        'EF': [],
    },

    'AIND': {
        'PC1': ['212'],
        'PC2': [],
        'PC3': ['202'],
        'PC4': [],
        'L4': ['202'],
        'EP': [],
        'EF': [],
    },


};



/**
 * Función helper para verificar si existe un PDF
 * @param {string} clave - Clave del curso (ej: 'MD')
 * @param {string} tipo - Tipo de examen (ej: 'PC1')
 * @param {string} ciclo - Ciclo académico (ej: '241')
 * @returns {boolean}
 */
function existeExamen(clave, tipo, ciclo) {
    return examenesDisponibles[clave]?.[tipo]?.includes(ciclo) || false;
}

/**
 * Obtiene la URL del PDF
 * Nueva estructura: pdfs/CLAVE/TIPO-CICLO.pdf
 * Ejemplo: pdfs/MD/PC1-241.pdf
 * @param {string} clave - Clave del curso (será la carpeta)
 * @param {string} tipo - Tipo de examen
 * @param {string} ciclo - Ciclo académico
 * @returns {string} URL del PDF
 */
function getPdfUrl(clave, tipo, ciclo) {
    return `pdfs/${clave}/${tipo}-${ciclo}.pdf`;
}

/**
 * Obtiene todos los tipos de examen disponibles para un curso
 * @param {string} clave - Clave del curso
 * @returns {string[]} Array de tipos disponibles
 */
function getTiposDisponibles(clave) {
    if (!examenesDisponibles[clave]) return [];
    return Object.keys(examenesDisponibles[clave]);
}

/**
 * Obtiene todos los ciclos disponibles para un curso y tipo
 * @param {string} clave - Clave del curso
 * @param {string} tipo - Tipo de examen
 * @returns {string[]} Array de ciclos disponibles
 */
function getCiclosDisponibles(clave, tipo) {
    return examenesDisponibles[clave]?.[tipo] || [];
}

/**
 * Obtiene todos los cursos que tienen exámenes disponibles
 * @returns {string[]} Array de claves de cursos
 */
function getCursosConExamenes() {
    return Object.keys(examenesDisponibles);
}
