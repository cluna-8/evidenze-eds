import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Search, Eye, Activity, Box, 
  Settings, ShieldAlert, Cpu, CheckCircle, ArrowLeft 
} from 'lucide-react';

const acquisitionAgents = [
  { id: 'enlace', name: 'Agente Enlace Clínico', icon: Database, color: '#38bdf8', description: 'Conexión SQL, CSV y HL7/FHIR.' },
  { id: 'introspeccion', name: 'Agente Introspección', icon: Search, color: '#60a5fa', description: 'Escaneo de estructuras sin leer contenido.' },
  { id: 'vision', name: 'Agente Visión', icon: Eye, color: '#0ea5e9', description: 'Extracción de metadatos DICOM.' },
  { id: 'iot', name: 'Agente IoT', icon: Activity, color: '#0284c7', description: 'Captura de señales médicas en tiempo real.' },
  { id: 'inmutable', name: 'Registro Inmutable', icon: Box, color: '#0369a1', description: 'Resguardo en Zona Bronze (Original).' },
];

const refineryAgents = [
  { id: 'normalizador', name: 'Agente Normalizador', icon: Settings, color: '#a78bfa', description: 'Traducción a OMOP CDM (SNOMED/LOINC).' },
  { id: 'guardian', name: 'Agente Guardián', icon: ShieldAlert, color: '#f43f5e', description: 'Anonimización y K-Anonimidad.' },
  { id: 'img-proc', name: 'Procesado de Imagen', icon: Cpu, color: '#c084fc', description: 'Limpieza de píxeles sensibles en imágenes.' },
  { id: 'calidad', name: 'Control de Calidad', icon: CheckCircle, color: '#34d399', description: 'Validación clínica y Sello de Calidad.' },
];

const LayerOne = ({ onBack, onAgentClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      style={{ height: '100%', position: 'relative' }}
    >
      <button 
        onClick={onBack}
        className="back-button"
        style={{ position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}
      >
        <ArrowLeft size={20} /> Volver a Visión Macro
      </button>

      <div style={{ textAlign: 'center', marginBottom: '2rem', paddingTop: '1.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#f8fafc' }}>EDS Autopilot</h2>
        <p style={{ color: '#94a3b8' }}>Ingesta y Refinería: El ciclo vital del dato clínico.</p>
      </div>

      <div className="autopilot-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        {/* Capa 1 Adquisición */}
        <div className="layer-section">
          <h3 style={{ color: '#38bdf8', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.3rem', borderBottom: '1px solid #38bdf844', paddingBottom: '0.5rem' }}>
            Capa 1: Adquisición y Conectividad
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {acquisitionAgents.map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} delay={i * 0.1} onClick={() => onAgentClick(agent)} />
            ))}
          </div>
        </div>

        {/* Capa 2 Refinería */}
        <div className="layer-section">
          <h3 style={{ color: '#a78bfa', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.3rem', borderBottom: '1px solid #a78bfa44', paddingBottom: '0.5rem' }}>
            Capa 2: Refinería y Seguridad
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {refineryAgents.map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} delay={(i + 4) * 0.1} onClick={() => onAgentClick(agent)} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AgentCard = ({ agent, delay, onClick }) => {
  const Icon = agent.icon;
  return (
    <motion.div
      className="glass-panel flex-center"
      style={{
        padding: '1.2rem', flexDirection: 'column', cursor: 'pointer',
        borderTop: `3px solid ${agent.color}`, textAlign: 'center', height: '100%', minHeight: '160px'
      }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: `0 10px 30px ${agent.color}15` }}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, type: 'spring' }}
      onClick={onClick}
    >
      <Icon size={32} color={agent.color} style={{ marginBottom: '0.8rem' }} />
      <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{agent.name}</h4>
      <p style={{ fontSize: '0.7rem', color: '#64748b' }}>{agent.description}</p>
    </motion.div>
  );
};

export default LayerOne;

