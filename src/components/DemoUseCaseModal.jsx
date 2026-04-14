import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Zap, Shield, Layers, Database, FileJson, 
  CheckCircle2, AlertCircle, Box, ArrowRight,
  TrendingUp, Globe, Lock, Brain
} from 'lucide-react';

const DemoUseCaseModal = ({ onClose }) => {
  const containerSovereignData = [
    { field: "data_product_id", value: "EDS-3CF6C329EDF1", meaning: "Este dato tiene identidad única, trazable y auditable" },
    { field: "tipo", value: "FEASIBILITY_COHORT", meaning: "Es una cohorte lista para consultas de viabilidad de ensayos" },
    { field: "pipeline_hash_sha256", value: "SHA256:d8e8b...9f2", meaning: "El pipeline es inmutable — cualquier cambio se detecta" },
    { field: "omop_cdm_v54", value: "CONFORME", meaning: "Compatible con cualquier red OMOP del mundo" },
    { field: "rgpd + ehds_2025_327", value: "CONFORME", meaning: "Legalmente usable en Europa" },
    { field: "datos_salen_perimetro", value: "false", meaning: "El dato original nunca salió del hospital" },
    { field: "dsa_requerido", value: "true", meaning: "Para acceder hay que firmar un contrato de datos" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(16px)',
        zIndex: 500, display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="glass-panel"
        style={{
          width: '100%', maxWidth: '1100px', maxHeight: '90vh', overflowY: 'auto',
          padding: 0, position: 'relative',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          boxShadow: '0 0 100px rgba(56, 189, 248, 0.15)',
          background: 'rgba(15, 23, 42, 0.95)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
        >
          <X size={32} />
        </button>

        <div style={{ padding: '4rem' }}>
          {/* Header */}
          <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <Zap size={40} color="#38bdf8" />
              </div>
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #f8fafc, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Narrativa del Caso de Uso
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Contenedor Soberano: De Dato Crudo a Activo Federado
            </p>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            
            {/* 1. El Problema */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <AlertCircle color="#f43f5e" size={24} />
                <h3 style={{ fontSize: '1.2rem', color: '#f1f5f9', margin: 0 }}>El Problema (El "Por qué")</h3>
              </div>
              <div style={{ 
                padding: '2rem', background: 'rgba(244, 63, 94, 0.05)', border: '1px solid rgba(244, 63, 94, 0.1)', 
                borderRadius: '16px', fontSize: '1.4rem', color: '#e2e8f0', lineHeight: 1.6, fontStyle: 'italic',
                borderLeft: '4px solid #f43f5e'
              }}>
                "Un hospital tiene datos clínicos valiosos, pero no puede compartirlos. Están en formatos distintos, contienen datos personales, y no cumplen los estándares europeos. Hoy ese dato no existe para la ciencia."
              </div>
            </section>

            {/* 2. La Solución */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <Brain color="#38bdf8" size={24} />
                <h3 style={{ fontSize: '1.2rem', color: '#f1f5f9', margin: 0 }}>Lo que hicimos (El "Qué")</h3>
              </div>
              <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Construiste un <strong>Contenedor Soberano</strong>: un pipeline agéntico que toma datos crudos de un hospital y los transforma en un activo <span style={{ color: '#38bdf8' }}>FAIR, federado y conforme</span> — sin que el dato salga nunca del perímetro del hospital.
              </p>
            </section>

            {/* 3. Pipeline Layers */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <Layers color="#a78bfa" size={24} />
                <h3 style={{ fontSize: '1.2rem', color: '#f1f5f9', margin: 0 }}>El Pipeline en 3 Capas</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid #38bdf8' }}>
                  <h4 style={{ color: '#38bdf8', marginBottom: '1.5rem' }}>Capa 1: Adquisición</h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>ZONA_BRONZE: REGISTRADA</div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                    <li>• Agente Enlace</li>
                    <li>• Agente Introspección</li>
                    <li>• Agente Visión</li>
                    <li>• Agente IoT</li>
                  </ul>
                  <p style={{ fontSize: '0.8rem', marginTop: '1.5rem', color: '#64748b' }}>El dato entra en crudo. Aún es "sucio".</p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid #a78bfa' }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '1.5rem' }}>Capa 2: Refinería</h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>SELLO: SELLO_PLATA</div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                    <li>• Agente Normalizador</li>
                    <li>• Agente Guardián (RGPD)</li>
                    <li>• Agente Imagen DICOM</li>
                    <li>• Agente Calidad</li>
                  </ul>
                  <p style={{ fontSize: '0.8rem', marginTop: '1.5rem', color: '#64748b' }}>Traspaso a zona silver. Seguro y estructurado.</p>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid #facc15' }}>
                  <h4 style={{ color: '#facc15', marginBottom: '1.5rem' }}>Capa 3: Valor</h4>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>ESTADO: PUBLICADO_EHDS</div>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                    <li>• Agente IP (Identidad)</li>
                    <li>• Agente RWE (Evidencia)</li>
                    <li>• Agente Federada (Hub)</li>
                  </ul>
                  <p style={{ fontSize: '0.8rem', marginTop: '1.5rem', color: '#64748b' }}>Activo consultable desde la red europea.</p>
                </div>
              </div>
            </section>

            {/* 4. Resultado Concreto (JSON) */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                <FileJson color="#10b981" size={24} />
                <h3 style={{ fontSize: '1.2rem', color: '#f1f5f9', margin: 0 }}>El Resultado Concreto (Metadata Asset)</h3>
              </div>
              
              <div style={{ background: '#020617', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(56, 189, 248, 0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                      <th style={{ padding: '1.2rem', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Campo</th>
                      <th style={{ padding: '1.2rem', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Valor Generado</th>
                      <th style={{ padding: '1.2rem', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Significado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {containerSovereignData.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <td style={{ padding: '1.2rem', color: '#38bdf8', fontFamily: 'monospace', fontSize: '0.9rem' }}>{row.field}</td>
                        <td style={{ padding: '1.2rem', color: '#e2e8f0', fontWeight: 'bold', fontSize: '0.9rem' }}>{row.value}</td>
                        <td style={{ padding: '1.2rem', color: '#94a3b8', fontSize: '0.9rem' }}>{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. So What */}
            <section style={{ textAlign: 'center', padding: '4rem 2rem', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 100%)', borderRadius: '32px' }}>
              <TrendingUp size={48} color="#38bdf8" style={{ marginBottom: '2rem' }} />
              <div style={{ fontSize: '1.8rem', color: '#f1f5f9', lineHeight: 1.4, maxWidth: '800px', margin: '0 auto' }}>
                "En menos de <span style={{ color: '#38bdf8' }}>30 segundos</span>, un dato hospitalario que era inaccesible se convirtió en un activo federado, conforme con EHDS, consultable desde cualquier nodo europeo — y el paciente <span style={{ borderBottom: '2px solid #38bdf8' }}>nunca perdió la soberanía</span> sobre sus datos."
              </div>
            </section>

          </div>
          
          <footer style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.8rem' }}>
                <Shield size={14} /> SECURITY: VERIFIED
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.8rem' }}>
                <CheckCircle2 size={14} /> EHDS COMPLIANT
              </div>
            </div>
            <div style={{ color: '#38bdf8', fontSize: '0.9rem', fontWeight: 'bold' }}>
              EVIDENZE AGENTIC SDK • CASE_STUDY_01
            </div>
          </footer>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DemoUseCaseModal;
