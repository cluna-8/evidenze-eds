import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileSpreadsheet, Globe, Share2, ArrowLeft } from 'lucide-react';

const factoryAgents = [
  { 
    id: 'proteccion-ip', 
    name: 'Protección de IP', 
    icon: ShieldCheck, 
    color: '#fbbf24',
    description: 'Clasifica datos sensibles y asegura la propiedad intelectual antes de la salida.'
  },
  { 
    id: 'rwe-generator', 
    name: 'Generador RWE', 
    icon: FileSpreadsheet, 
    color: '#f59e0b',
    description: 'Crea productos de datos (Data Products) listos para investigación y mercado.'
  },
  { 
    id: 'interfaz-federada', 
    name: 'Interfaz Federada', 
    icon: Globe, 
    color: '#d97706',
    description: 'Permite consultas externas seguras sin que el dato salga nunca del hospital.'
  },
  { 
    id: 'embajador-api', 
    name: 'Agente Embajador (Anjana)', 
    icon: Share2, 
    color: '#E8A317', // Anjana Golden Orange
    description: 'Publicador oficial en el Espacio de Datos Anjana para la red europea EHDS.',
    isHighlighted: true
  },
];

const LayerThree = ({ onBack, onAgentClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
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

      <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#facc15', textShadow: '0 0 20px rgba(250, 204, 21, 0.3)' }}>Capa 3: Valor y Publicación</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Sincronización con <strong>Anjana Data</strong> para el Gobierno y Explotación del Dato.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        {factoryAgents.map((agent, i) => {
          const Icon = agent.icon;
          const highlightedStyle = agent.isHighlighted ? {
            border: `2px solid ${agent.color}`,
            boxShadow: `0 0 30px ${agent.color}44`,
            transform: 'scale(1.1)',
            zIndex: 2,
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(232, 163, 23, 0.1) 100%)'
          } : {};

          return (
            <React.Fragment key={agent.id}>
              <motion.div
                className="glass-panel flex-center"
                style={{
                  width: '220px', minHeight: '220px', flexDirection: 'column', cursor: 'pointer',
                  borderTop: `4px solid ${agent.color}`, padding: '1.5rem', textAlign: 'center',
                  position: 'relative',
                  ...highlightedStyle
                }}
                whileHover={{ y: -10, scale: agent.isHighlighted ? 1.15 : 1.05, boxShadow: `0 20px 40px ${agent.color}33` }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, type: 'spring' }}
                onClick={() => onAgentClick(agent)}
              >
                {agent.isHighlighted && (
                  <div style={{ 
                    position: 'absolute', top: '-15px', background: agent.color, 
                    color: '#0b2147', padding: '0.2rem 0.8rem', borderRadius: '20px',
                    fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '1px'
                  }}>
                    FINAL PUSH
                  </div>
                )}
                <Icon size={52} color={agent.color} style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{agent.name}</h3>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.4' }}>{agent.description}</p>
                
                {agent.isHighlighted && (
                  <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <div className="pulse-dot" style={{ backgroundColor: '#10b981' }}></div>
                    <span style={{ fontSize: '0.7rem', color: '#10b981' }}>Connected to Anjana API</span>
                  </div>
                )}
              </motion.div>
              {i < factoryAgents.length - 1 && (
                <div style={{ color: '#334155' }}>
                  <Share2 size={24} style={{ opacity: 0.3 }} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
        <motion.div 
          className="glass-panel"
          style={{ padding: '1rem 3rem', borderColor: '#E8A317', borderStyle: 'dashed', opacity: 0.8 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1 }}
        >
          <p style={{ fontSize: '0.9rem', color: '#e8a317' }}>
            ESPACIO DE DATOS EUROPEO (EHDS) • REGULACIÓN GDPR COMPLIANT • ANJANA MARKETPLACE
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};


export default LayerThree;
