import React from 'react'

export default function IndexPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#ffffff', fontFamily: 'Montserrat, sans-serif'}}>
      <header className="border-b border-gray-200 px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex gap-1.5 mt-1.5">
              <div className="w-3 h-3 rounded-sm" style={{backgroundColor: '#E8251C'}}></div>
              <div className="w-3 h-3 rounded-sm" style={{backgroundColor: '#F4C318'}}></div>
              <div className="w-3 h-3 rounded-sm" style={{backgroundColor: '#3DB9E8'}}></div>
              <div className="w-3 h-3 rounded-sm" style={{backgroundColor: '#7B4CB8'}}></div>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">Pontificia Universidad Católica de Valparaíso</p>
              <h1 className="text-gray-900 text-2xl md:text-3xl font-black leading-tight">
                Guías Interactivas<br />
                <span style={{color: '#3DB9E8'}}>de Evaluación</span>
              </h1>
            </div>
          </div>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Colección de 20 guías de alineación evaluativa para pregrado. Cada guía recorre la cadena desde el Perfil de Egreso hasta los Instrumentos concretos de evaluación.
          </p>
          <div className="flex gap-6 mt-4">
            <div className="text-center">
              <p className="text-2xl font-black" style={{color: '#E8251C'}}>20</p>
              <p className="text-gray-400 text-xs">Asignaturas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black" style={{color: '#F4C318'}}>10</p>
              <p className="text-gray-400 text-xs">Unidades</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black" style={{color: '#3DB9E8'}}>6</p>
              <p className="text-gray-400 text-xs">Niveles por guía</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 py-10 md:px-12 max-w-6xl mx-auto">
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#3DB9E8'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Facultad de Ciencias</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="bio1133" href="#/bio1133"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>BIO 1133</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Biología Molecular</span>
            </a>
          <a key="bio250" href="#/bio250"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>BIO 250</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Biología de Microorganismos</span>
            </a>
          <a key="ecm610" href="#/ecm610"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>ECM 610</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Reproducción de Peces Marinos</span>
            </a>
          <a key="kin480" href="#/kin480"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>KIN 480</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Agentes Físicos y Regeneración Tisular</span>
            </a>
          <a key="qui234" href="#/qui234"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>QUI 234</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Química Orgánica 2</span>
            </a>
          <a key="qui1526" href="#/qui1526"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>QUI 1526</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Química Aplicada 1</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#E8251C'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Facultad de Ingeniería</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="eie326" href="#/eie326"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#E8251C'}}>EIE 326</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Teoría de Circuitos 2</span>
            </a>
          <a key="ici3244" href="#/ici3244"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#E8251C'}}>ICI 3244</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Inteligencia Artificial</span>
            </a>
          <a key="tra491" href="#/tra491"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#E8251C'}}>TRA 491</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Modelos de Transporte</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#00B2C8'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Facultad de Ciencias Agronómicas y de los Alimentos</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="agr475" href="#/agr475"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#00B2C8'}}>AGR 475</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Dirección de Empresas</span>
            </a>
          <a key="ali498" href="#/ali498"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#00B2C8'}}>ALI 498</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Compuestos Bioactivos en los Alimentos</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#F4C318'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Facultad de Filosofía y Educación</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="art155" href="#/art155"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#F4C318'}}>ART 155</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Taller de Poesía</span>
            </a>
          <a key="ing9001" href="#/ing9001"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#F4C318'}}>ING 9001</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Inglés I (Beginner)</span>
            </a>
          <a key="lcl213" href="#/lcl213"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#F4C318'}}>LCL 213</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Gramática Descriptiva 1</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#7B4CB8'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Facultad de Ciencias del Mar y Geografía</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="geo1052" href="#/geo1052"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#7B4CB8'}}>GEO 1052</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Geografía Urbana y Metropolitana</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#9AC8E8'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Facultad de Ciencias Económicas y Administrativas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="tsl271" href="#/tsl271"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#9AC8E8'}}>TSL 271</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Teoría Política</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#E8251C'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Escuela de Derecho</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="der1021" href="#/der1021"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#E8251C'}}>DER 1021</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Familia y Patrimonio en el Derecho Romano</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#3DB9E8'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Instituto de Matemáticas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="mat1004" href="#/mat1004"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#3DB9E8'}}>MAT 1004</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Álgebra Lineal</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#F4C318'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Instituto de Música</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="mus2438" href="#/mus2438"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#F4C318'}}>MUS 2438</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Acústica y Organología</span>
            </a>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 rounded-full" style={{backgroundColor: '#00B2C8'}}></div>
            <h2 className="text-gray-500 text-xs font-bold tracking-widest uppercase">Escuela de Periodismo</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <a key="per1125" href="#/per1125"
              className="group block bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-lg p-4 transition-all duration-200 hover:-translate-y-0.5">
              <span className="block text-xs font-bold tracking-widest mb-1" style={{color: '#00B2C8'}}>PER 1125</span>
              <span className="block text-gray-800 text-sm font-medium leading-snug">Pensamiento Político Contemporáneo</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 px-6 py-6 md:px-12 text-center">
        <p className="text-gray-400 text-xs">
          Dirección de Desarrollo Docente · <a href="https://desarrollodocente.pucv.cl" className="hover:text-gray-600 transition-colors">desarrollodocente.pucv.cl</a>
        </p>
      </footer>
    </div>
  )
}
