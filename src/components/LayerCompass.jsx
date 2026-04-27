import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, ArrowLeft, CheckCircle2, Target, 
  Map, Activity, Users, ShieldAlert 
} from 'lucide-react';

const StrategyNode = ({ icon: Icon, title, points, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="glass-panel"
    style={{ 
      padding: '1.5rem', 
      borderLeft: `4px solid ${color}`,
      background: 'rgba(255,255,255,0.02)',
      flex: 1
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
      <div style={{ padding: '0.5rem', background: `${color}22`, borderRadius: '8px' }}>
        <Icon size={24} color={color} />
      </div>
      <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#f1f5f9' }}>{title}</h3>
    </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {points.map((point, i) => (
        <li key={i} style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', color: '#94a3b8', marginBottom: '0.6rem' }}>
          <CheckCircle2 size={14} color={color} style={{ marginTop: '3px', flexShrink: 0 }} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const LayerCompass = ({ onBack }) => {
  const roadmap = [
    {
      icon: Target,
      title: 'Diagnóstico AS IS',
      color: '#38bdf8',
      points: [
        'Auditoría de gobernanza del dato',
        'Evaluación de madurez tecnológica',
        'Mapa de interoperabilidad actual'
      ]
    },
    {
      icon: Map,
      title: 'Definición TO BE',
      color: '#818cf8',
      points: [
        'Modelo operativo EHDS-Ready',
        'Diseño de roles y responsabilidades',
        'Arquitectura de nodos soberanos'
      ]
    },
    {
      icon: Activity,
      title: 'Hoja de Ruta TO DO',
      color: '#facc15',
      points: [
        'Priorización de Quick Wins',
        'Plan de despliegue por fases',
        'Definición de KPIs estratégicos'
      ]
    },
    {
      icon: Users,
      title: 'Gestión del Cambio',
      color: '#10b981',
      points: [
        'Alineación de stakeholders',
        'Capacitación en regulación europea',
        'Cultura de datos soberanos'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{ width: '100%', height: '100%', color: '#f1f5f9' }}
    >
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={onBack} className="back-button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}>
          <ArrowLeft size={20} /> Volver al Orquestador
        </button>
        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
      </div>

      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Compass size={48} color="#818cf8" />
          <h1 style={{ fontSize: '3rem', margin: 0, background: 'linear-gradient(to right, #818cf8, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            EDS Compass®
          </h1>
        </div>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
          Transformando la regulación del EHDS en un modelo operativo accionable. 
          De la estrategia a la ejecución soberana.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {roadmap.map((node, i) => (
          <StrategyNode key={i} {...node} delay={i * 0.15} />
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(129, 140, 248, 0.1) 0%, transparent 100%)', border: '1px solid rgba(129, 140, 248, 0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ShieldAlert size={40} color="#818cf8" />
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Cumplimiento EHDS / AI Act</h3>
            <p style={{ color: '#94a3b8', margin: 0 }}>
              Nuestro modelo garantiza que cada paso de la estrategia esté alineado con el European Health Data Space 
              y la Ley de Inteligencia Artificial, minimizando riesgos legales y maximizando el valor científico.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LayerCompass;
