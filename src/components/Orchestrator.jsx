import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Factory, Database, Shield, Lock, Cpu, ArrowRight,
  Users, Search, Layers, Briefcase, Workflow
} from 'lucide-react';


const StatusItem = ({ icon: Icon, label, status, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
    <Icon size={16} color={color} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 'bold' }}>{label}</span>
      <span style={{ fontSize: '0.7rem', color, fontWeight: 'bold' }}>{status}</span>
    </div>
  </div>
);

const KernelSpec = ({ label, value }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
    <span style={{ fontSize: '0.7rem', color: '#475569' }}>{label}</span>
    <span style={{ fontSize: '0.7rem', color: '#38bdf8' }}>{value}</span>
  </div>
);

const Orchestrator = ({ onZoomLayer1, onZoomLayer3, onAgentClick }) => {
  const methodologyItems = [
    { 
      id: 'meth-negocio', name: 'Negocio', icon: Briefcase, color: '#38bdf8',
      description: 'El humano en el centro con la IA como Copiloto. Simplificamos la complejidad del dato para decisiones estratégicas.'
    },
    { 
      id: 'meth-analisis', name: 'Análisis', icon: Search, color: '#a78bfa',
      description: 'Entendimiento profundo desde el cloud. La IA aporta información crítica para analistas y desarrolladores.'
    },
    { 
      id: 'meth-arquitectura', name: 'Arquitectura', icon: Layers, color: '#facc15',
      description: 'Orquestación total de plataformas, memorias y desarrollos bajo un núcleo de arquitectura inteligente.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(20px)' }}
      transition={{ duration: 1 }}
      style={{ 
        width: '100%', height: '100%', 
        display: 'flex', flexDirection: 'column', gap: '2rem',
        padding: '2rem',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        borderRadius: '24px',
        background: 'radial-gradient(circle at top right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 1) 100%)',
        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
      }}
    >
      {/* 0. WORK METHODOLOGY SECTION */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Workflow size={20} color="#64748b" />
          <h2 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '4px', color: '#64748b', margin: 0 }}>
            Metodología de Trabajo
          </h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #1e293b, transparent)' }} />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          {methodologyItems.map((item) => (
            <motion.div
              key={item.id}
              className="glass-panel"
              style={{ 
                padding: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1.2rem',
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)'
              }}
              whileHover={{ 
                y: -5, 
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderColor: `${item.color}44`,
                boxShadow: `0 10px 30px ${item.color}11`
              }}
              onClick={() => onAgentClick(item)}
            >
              <div style={{ 
                padding: '0.6rem', background: `${item.color}11`, borderRadius: '10px',
                border: `1px solid ${item.color}22`
              }}>
                <item.icon size={22} color={item.color} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1rem', margin: 0, color: '#f1f5f9' }}>{item.name}</h3>
                <p style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '0.2rem' }}>Explorar flujos...</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SDK Header / Status Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 1rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <StatusItem icon={Shield} label="SECURITY" status="ENCRYPTED" color="#10b981" />
          <StatusItem icon={Lock} label="COMPLIANCE" status="GDPR-READY" color="#38bdf8" />
          <StatusItem icon={Cpu} label="INFRA" status="ON-PREMISE" color="#a78bfa" />
        </div>
        <div style={{ fontSize: '0.7rem', color: '#475569', letterSpacing: '2px', fontWeight: 'bold' }}>
          EVIDENZE AGENTIC SDK v1.2.0 • SYSTEM KERNEL ACTIVE
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: '2rem' }}>
        {/* Missions Section */}
        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <motion.div 
            className="glass-panel"
            style={{ 
              flex: 1, padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', 
              cursor: 'pointer', borderLeft: '6px solid var(--accent-color)',
              background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%)'
            }}
            whileHover={{ x: 10, backgroundColor: 'rgba(56, 189, 248, 0.08)' }}
            onClick={onZoomLayer1}
          >
            <Database size={64} color="var(--accent-color)" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>EDS Autopilot</h3>
                <span className="pulse-dot" style={{ backgroundColor: 'var(--accent-color)' }}></span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
                Escuadrón de Ingesta & Refinería. Automatiza la adquisición de datos clínicos HL7/FHIR 
                y su transformación a estándares europeos OMOP CDM con anonimización irreversible.
              </p>
            </div>
            <ArrowRight size={32} color="#475569" />
          </motion.div>

          <motion.div 
            className="glass-panel"
            style={{ 
              flex: 1, padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', 
              cursor: 'pointer', borderLeft: '6px solid #facc15',
              background: 'linear-gradient(90deg, rgba(250, 204, 21, 0.05) 0%, transparent 100%)'
            }}
            whileHover={{ x: 10, backgroundColor: 'rgba(250, 204, 21, 0.08)' }}
            onClick={onZoomLayer3}
          >
            <Factory size={64} color="#facc15" />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>EDS Evidence Factory</h3>
                <span className="pulse-dot" style={{ backgroundColor: '#facc15' }}></span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
                Generación de Valor & Publicación. Transforma datos curados en evidencia científica 
                de mercado y orquesta la publicación proactiva en el Marketplace de Anjana.
              </p>
            </div>
            <ArrowRight size={32} color="#475569" />
          </motion.div>
        </div>

        {/* SDK Specs / Side Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className="pulse-node flex-center" style={{ width: '120px', height: '120px', borderRadius: '50%', border: '1px solid #38bdf8', marginBottom: '2rem' }}>
              <Brain size={60} color="#38bdf8" />
            </div>
            <h4 style={{ color: '#f1f5f9', fontSize: '1.2rem', marginBottom: '1rem' }}>SDK Orchestrator Kernel</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5' }}>
              El motor central de EVIDENZE gestiona el ciclo de vida de los agentes, 
              garantizando que cada operación se ejecute en el entorno seguro del hospital 
              sin fugas de información.
            </p>
            
            <div style={{ marginTop: '2rem', width: '100%', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <KernelSpec label="Audit Logs" value="ENCRYPTED" />
              <KernelSpec label="Inter-Agent Comm" value="SECURE BUS" />
              <KernelSpec label="State Management" value="ACTIVE" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};



export default Orchestrator;
