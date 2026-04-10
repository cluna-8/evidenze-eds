import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Network, Link, Lock, Search, Globe, 
  Database, FileText, Flame, Activity, Zap, 
  ShieldCheck, Cpu, Eye, Box, Share2, ClipboardList,
  RefreshCw, Award, Terminal, ShieldAlert,
  FileSpreadsheet, BarChart3, Fingerprint, HardDrive,
  Users, Cloud, Bot, Monitor, Server, MessageSquare
} from 'lucide-react';

/* --- SUB-COMPONENTS (Hoisted) --- */

const SkillCard = ({ icon: Icon, color, title, desc }) => (
  <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', color: '#f8fafc' }}>
      <Icon size={20} color={color} /> <strong>{title}</strong>
    </div>
    <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.5 }}>{desc}</p>
  </div>
);

/* CAPA 1 - ACQUISITION VISUALS */

const ConnectorVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '300px', height: '200px' }}>
    <motion.div 
      style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%', zIndex: 2 }}
      animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
    >
      <Database size={80} color={color} style={{ filter: `drop-shadow(0 0 15px ${color}66)` }} />
    </motion.div>
    {[
      { icon: FileText, pos: { top: 0, left: 0 } },
      { icon: Flame, pos: { top: 0, right: 0 } },
      { icon: Activity, pos: { bottom: 0, left: 0 } },
      { icon: Zap, pos: { bottom: 0, right: 0 } }
    ].map((source, i) => (
      <div key={i} style={{ position: 'absolute', ...source.pos }}>
        <source.icon size={32} color="#475569" />
        <motion.div
          style={{ 
            position: 'absolute', width: '4px', height: '4px', borderRadius: '50%', backgroundColor: color,
            top: '50%', left: '50%'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            x: source.pos.left !== undefined ? 150 : -150,
            y: source.pos.top !== undefined ? 100 : -100,
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
        />
      </div>
    ))}
  </div>
);

const IntrospectionVisual = ({ color }) => (
  <div style={{ width: '250px', height: '150px', position: 'relative', border: `1px solid ${color}33`, borderRadius: '8px' }}>
    <motion.div
      style={{ 
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px', 
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        boxShadow: `0 0 15px ${color}`
      }}
      animate={{ top: ['0%', '100%', '0%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
    />
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '20px', opacity: 0.3 }}>
      {Array(12).fill(0).map((_, i) => (
        <div key={i} style={{ height: '15px', border: `1px dashed ${color}`, borderRadius: '2px' }} />
      ))}
    </div>
  </div>
);

const VisionVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '300px', height: '200px' }}>
    <Eye size={100} color={color} style={{ opacity: 0.1 }} />
    <motion.div
      style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%' }}
      animate={{ scale: [0.9, 1], opacity: [0.3, 0.6] }}
      transition={{ duration: 2, repeat: Infinity, alternate: true }}
    >
      <div style={{ width: '120px', height: '150px', border: `2px solid ${color}44`, borderRadius: '4px' }} />
    </motion.div>
    {['PatientID', 'Modality', 'StudyDate', 'SOPClass'].map((tag, i) => (
      <motion.div
        key={tag}
        style={{ position: 'absolute', fontSize: '0.6rem', color, fontWeight: 'bold', background: `${color}11`, padding: '2px 6px', borderRadius: '4px', border: `1px solid ${color}33` }}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 100, y: (i - 1.5) * 40, opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
      >
        {tag}
      </motion.div>
    ))}
  </div>
);

const IoTVisual = ({ color }) => (
  <div style={{ width: '300px', height: '100px', overflow: 'hidden', position: 'relative' }}>
    <svg width="300" height="100" viewBox="0 0 300 100">
      <motion.path
        d="M 0 50 Q 25 10 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50"
        fill="none"
        stroke={color}
        strokeWidth="2"
        animate={{ strokeDashoffset: [0, -100] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        strokeDasharray="10 5"
      />
      <motion.circle r="4" fill={color}>
        <animateMotion path="M 0 50 Q 25 10 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50" dur="2s" repeatCount="indefinite" />
      </motion.circle>
    </svg>
    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: `${color}22` }} />
  </div>
);

const ImmutableVisual = ({ color }) => (
  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
    {[0, 1, 2].map(i => (
      <motion.div
        key={i}
        style={{ width: '40px', height: '40px', background: `${color}22`, border: `2px solid ${color}`, borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.5 }}
      >
        <Box size={20} color={color} />
        {i > 0 && (
          <motion.div 
            style={{ position: 'absolute', left: '-17px', top: '50%', width: '15px', height: '2px', background: color }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: i * 0.5 + 0.2 }}
          />
        )}
        <Lock size={10} color={color} style={{ position: 'absolute', top: -5, right: -5, background: '#0f172a', borderRadius: '50%' }} />
      </motion.div>
    ))}
  </div>
);

/* CAPA 2 - REFINERY VISUALS */

const NormalizerVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '350px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {['Code:A10', 'Lab:BC_2', 'Temp:38.2'].map((tag, i) => (
        <motion.div
          key={i}
          style={{ fontSize: '0.6rem', color: '#475569', border: '1px solid #47556933', padding: '2px 5px', borderRadius: '3px' }}
          animate={{ x: [0, 50], opacity: [1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        >
          {tag}
        </motion.div>
      ))}
    </div>
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
      <RefreshCw size={50} color={color} />
    </motion.div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {['OMOP:40231', 'LOINC:2341-2', 'SNOMED:723'].map((tag, i) => (
        <motion.div
          key={i}
          style={{ fontSize: '0.6rem', color, border: `1px solid ${color}44`, padding: '2px 5px', borderRadius: '3px', background: `${color}11` }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 + 1 }}
        >
          {tag}
        </motion.div>
      ))}
    </div>
  </div>
);

const GuardianVisual = ({ color }) => (
  <div style={{ width: '300px', height: '150px', position: 'relative', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '20px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ height: '10px', width: '80%', background: '#47556933', borderRadius: '5px' }} />
      <div style={{ height: '10px', width: '60%', background: '#47556933', borderRadius: '5px' }} />
      <div style={{ height: '10px', width: '90%', background: '#47556933', borderRadius: '5px' }} />
    </div>
    {[
      { top: 20, left: 40, width: 60 },
      { top: 50, left: 100, width: 80 },
      { top: 80, left: 20, width: 100 }
    ].map((m, i) => (
      <motion.div
        key={i}
        style={{ 
          position: 'absolute', top: m.top, left: m.left, width: m.width, height: '12px', 
          background: color, borderRadius: '2px', boxShadow: `0 0 10px ${color}aa`
        }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5 }}
      />
    ))}
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <ShieldAlert size={24} color={color} />
    </div>
  </div>
);

const ImageProcVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '220px', height: '220px', background: '#000', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
    <div style={{ width: '100%', height: '100%', opacity: 0.3, background: 'radial-gradient(circle, #334155 0%, #000 70%)' }} />
    <motion.div
      style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: color, zIndex: 5, boxShadow: `0 0 15px ${color}` }}
      animate={{ top: ['0%', '100%', '0%'] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      style={{ position: 'absolute', top: '40%', left: '30%', width: '40px', height: '40px', background: color, filter: 'blur(8px)', opacity: 0.6 }}
      animate={{ opacity: [0, 0.6, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    />
    <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '0.5rem', color: '#475569' }}>ANONYMIZING_PIXELS...</div>
  </div>
);

const QualityVisual = ({ color }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
    <div style={{ position: 'relative', width: '200px', height: '20px', background: '#1e293b', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
      <motion.div
        style={{ height: '100%', background: `linear-gradient(90deg, ${color}66, ${color})`, borderRadius: '10px' }}
        animate={{ width: ['0%', '100%', '0%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
    <div style={{ display: 'flex', gap: '15px' }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: i * 0.8, repeat: Infinity, repeatDelay: 3 }}
        >
          <Award size={32} color={color} style={{ filter: `drop-shadow(0 0 8px ${color}44)` }} />
        </motion.div>
      ))}
    </div>
  </div>
);

/* CAPA 3 - EVIDENCE FACTORY VISUALS */

const ProtectionVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '300px', height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div style={{ position: 'relative', padding: '20px', background: `${color}11`, border: `2px solid ${color}44`, borderRadius: '12px' }}>
        <FileText size={60} color={color} />
        <motion.div
          style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: color, padding: '5px', borderRadius: '50%' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Fingerprint size={24} color="#000" />
        </motion.div>
      </div>
    </motion.div>
    <motion.div
      style={{ marginTop: '20px', width: '200px', height: '4px', background: '#334155', borderRadius: '2px', overflow: 'hidden' }}
    >
      <motion.div
        style={{ height: '100%', background: color }}
        animate={{ width: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
    <div style={{ fontSize: '0.6rem', color, marginTop: '10px', letterSpacing: '2px' }}>IP_ENCRYPTION_ACTIVE</div>
  </div>
);

const RWEVisual = ({ color }) => (
  <div style={{ width: '300px', height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px', padding: '20px' }}>
    {[40, 70, 55, 90, 65, 80].map((h, i) => (
      <motion.div
        key={i}
        style={{ width: '30px', background: `linear-gradient(to top, ${color}22, ${color})`, borderRadius: '4px 4px 0 0' }}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      />
    ))}
    <motion.div
      style={{ position: 'absolute', top: '40px', right: '40px' }}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <BarChart3 size={40} color={color} />
    </motion.div>
  </div>
);

const FederatedVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '250px', height: '250px' }}>
    <motion.div
      style={{ position: 'absolute', inset: 0, border: `1px solid ${color}22`, borderRadius: '50%' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      style={{ position: 'absolute', inset: '40px', border: `1px dashed ${color}44`, borderRadius: '50%' }}
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    />
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Globe size={60} color={color} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
    </div>
    {[0, 90, 180, 270].map(deg => (
      <motion.div
        key={deg}
        style={{ 
          position: 'absolute', top: '50%', left: '50%', width: '100px', height: '2px', 
          background: `linear-gradient(90deg, ${color}, transparent)`,
          transformOrigin: 'left center',
          rotate: deg
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: deg/360 }}
      />
    ))}
  </div>
);

const AmbassadorVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '300px', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <motion.div
      style={{ 
        width: '180px', height: '180px', borderRadius: '50%', 
        border: `3px solid ${color}`,
        boxShadow: `0 0 30px ${color}66, inset 0 0 30px ${color}33`,
        position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}
      animate={{ scale: [1, 1.05, 1], rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
    >
      <div style={{ width: '140px', height: '140px', border: `1px dashed ${color}88`, borderRadius: '50%' }} />
    </motion.div>
    <div style={{ position: 'absolute', zIndex: 2, background: '#0b2147', padding: '15px', borderRadius: '15px', border: `1px solid ${color}` }}>
      <Share2 size={50} color={color} />
    </div>
    <motion.div
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{ 
            position: 'absolute', top: '50%', left: '50%', 
            width: '8px', height: '8px', background: color, borderRadius: '50%',
            filter: `blur(2px)`
          }}
          animate={{ 
            x: Math.cos(i * 45 * Math.PI / 180) * 150,
            y: Math.sin(i * 45 * Math.PI / 180) * 150,
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </motion.div>
  </div>
);

/* METHODOLOGY VISUALS */

const NegocioVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '300px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', inset: -20, border: `1px solid ${color}33`, borderRadius: '50%' }}
      />
      <Bot size={50} color={color} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
    </div>
    
    {[0, 72, 144, 216, 288].map((deg, i) => (
      <motion.div
        key={i}
        style={{ position: 'absolute' }}
        animate={{ 
          x: Math.cos(deg * Math.PI / 180) * 110,
          y: Math.sin(deg * Math.PI / 180) * 110
        }}
      >
        <Users size={24} color="#475569" />
        <motion.div
          style={{ position: 'absolute', top: '50%', left: '50%', width: '40px', height: '1px', background: `linear-gradient(90deg, ${color}, transparent)`, transformOrigin: 'left' }}
          initial={{ rotate: deg + 180, scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      </motion.div>
    ))}
    
    <motion.div
      style={{ position: 'absolute', bottom: -20, fontSize: '0.6rem', color, letterSpacing: '2px' }}
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      AI_COPILOT_STRATEGY_SYNC
    </motion.div>
  </div>
);

const AnalisisVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '350px', height: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Cloud size={80} color={color} style={{ opacity: 0.8 }} />
    </motion.div>
    
    <div style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Users size={30} color="#475569" />
          <motion.div
            style={{ position: 'absolute', top: -45, width: '2px', height: '40px', background: `linear-gradient(to top, ${color}, transparent)` }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
          />
          <motion.div
            style={{ position: 'absolute', top: -60 }}
            animate={{ y: [0, -10], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
          >
            <MessageSquare size={14} color={color} />
          </motion.div>
        </div>
      ))}
    </div>
    
    <div style={{ position: 'absolute', top: 20, right: 20 }}>
      <Search size={30} color={color} style={{ opacity: 0.3 }} />
    </div>
  </div>
);

const ArquitecturaVisual = ({ color }) => (
  <div style={{ position: 'relative', width: '300px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      style={{ position: 'absolute', width: '200px', height: '200px', border: `1px dashed ${color}22`, borderRadius: '50%' }}
    />
    
    <div style={{ position: 'relative', padding: '20px', background: `${color}11`, borderRadius: '20px', border: `1px solid ${color}44` }}>
      <Cpu size={60} color={color} />
      <div className="pulse-dot" style={{ position: 'absolute', top: -5, right: -5, backgroundColor: color }} />
    </div>
    
    {[
      { icon: Database, pos: { top: 10, left: 10 } },
      { icon: Server, pos: { top: 10, right: 10 } },
      { icon: HardDrive, pos: { bottom: 10, left: 10 } },
      { icon: Monitor, pos: { bottom: 10, right: 10 } }
    ].map((item, i) => (
      <motion.div
        key={i}
        style={{ position: 'absolute', ...item.pos, padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
      >
        <item.icon size={24} color="#475569" />
        <motion.div
          style={{ position: 'absolute', top: '50%', left: '50%', width: '60px', height: '1px', background: color, opacity: 0.2, transformOrigin: 'center' }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    ))}
  </div>
);

const AgentVisualizer = ({ agent }) => {
  switch (agent.id) {
    case 'enlace': return <ConnectorVisual color={agent.color} />;
    case 'introspeccion': return <IntrospectionVisual color={agent.color} />;
    case 'vision': return <VisionVisual color={agent.color} />;
    case 'iot': return <IoTVisual color={agent.color} />;
    case 'inmutable': return <ImmutableVisual color={agent.color} />;
    case 'normalizador': return <NormalizerVisual color={agent.color} />;
    case 'guardian': return <GuardianVisual color={agent.color} />;
    case 'img-proc': return <ImageProcVisual color={agent.color} />;
    case 'calidad': return <QualityVisual color={agent.color} />;
    case 'proteccion-ip': return <ProtectionVisual color={agent.color} />;
    case 'rwe-generator': return <RWEVisual color={agent.color} />;
    case 'interfaz-federada': return <FederatedVisual color={agent.color} />;
    case 'embajador-api': return <AmbassadorVisual color={agent.color} />;
    
    // Methodology Visuals
    case 'meth-negocio': return <NegocioVisual color={agent.color} />;
    case 'meth-analisis': return <AnalisisVisual color={agent.color} />;
    case 'meth-arquitectura': return <ArquitecturaVisual color={agent.color} />;

    default: return <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}><agent.icon size={120} color={agent.color} style={{ opacity: 0.2 }} /></motion.div>;
  }
};

/* --- MAIN MODAL COMPONENT --- */

const AgentModal = ({ agent, onClose }) => {
  const agentId = agent.id;
  const isGuardian = agentId === 'guardian';
  const isAmbassador = agentId === 'embajador-api';
  const isMethodology = agentId.startsWith('meth-');
  
  const mission = agent.description 
    ? agent.description 
    : "Mi función es orquestar y fluir el dato desde el estado crudo hasta el estado científico, asegurando la integridad del proceso.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
        zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '2rem'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, scale: 0.9, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="glass-panel"
        style={{
          width: '100%', maxWidth: '950px', maxHeight: '95vh', overflowY: 'auto',
          padding: 0, position: 'relative',
          border: `1px solid ${agent.color}33`,
          boxShadow: `0 0 100px ${agent.color}11`
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button UI */}
        <button 
          onClick={onClose}
          className="back-button"
          style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#94a3b8', zIndex: 10 }}
        >
          <X size={28} />
        </button>

        <div style={{ padding: '3.5rem' }}>
          
          {/* 1. HEADER SECTION */}
          <header style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ padding: '0.8rem', background: `${agent.color}22`, borderRadius: '12px', border: `1px solid ${agent.color}44` }}>
              <agent.icon size={40} color={agent.color} />
            </div>
            <div>
              <h2 style={{ fontSize: '2.4rem', margin: 0, letterSpacing: '-1px' }}>{agent.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot" style={{ backgroundColor: agent.color }}></span>
                <span style={{ color: agent.color, fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  {isMethodology ? 'METODOLOGÍA EVIDENZE' : (isAmbassador ? 'EVIDENZE Certificado' : 'SISTEMA ACTIVO')}
                </span>
              </div>
            </div>
          </header>

          {/* 2. THE VISUAL BOX (MONITOR STYLE) */}
          <div style={{ 
            height: '350px', width: '100%', position: 'relative', 
            background: `radial-gradient(circle at center, ${agent.color}15 0%, rgba(0,0,0,0.5) 100%)`,
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px',
            marginBottom: '3rem',
            overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center',
            boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8)'
          }}>
            <AgentVisualizer agent={agent} />
          </div>

          {/* 3. MISSION SECTION */}
          <div style={{ marginBottom: isMethodology ? '0' : '3rem' }}>
            <h3 style={{ color: '#64748b', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '1rem' }}>
              {isMethodology ? 'Enfoque Estratégico' : 'La Misión (Valor de Negocio)'}
            </h3>
            <div style={{ fontSize: '1.3rem', lineHeight: 1.6, borderLeft: `4px solid ${agent.color}`, paddingLeft: '1.5rem', color: '#e2e8f0' }}>
              {isGuardian && "Asegurar que ningún dato personal abandone el hospital. Actúo como el escudo legal del ecosistema, aplicando anonimización irreversible para que los datos médicos se conviertan en activos de investigación 100% seguros y conformes al GDPR."}
              {isAmbassador && (
                <>
                  <p>"Gobernar no es catalogar". Mi misión es orquestar la publicación definitiva del <strong>catálogo de datos</strong> y el Espacio de Datos en el <strong>Marketplace de Anjana</strong>.</p>
                  <p style={{ fontSize: '1rem', color: '#94a3b8', marginTop: '0.5rem' }}>Automatizamos la sincronización de activos para la red EHDS, asegurando que cada entrada en el catálogo sea líquida, funcional y soberana.</p>
                </>
              )}
              {!isGuardian && !isAmbassador && mission}
            </div>
          </div>

          {/* 4. SKILLS SECTION */}
          {!isMethodology && (
            <>
              <h3 style={{ color: '#64748b', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                Matriz de Capacidades y Skills
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1rem' }}>
                <SkillCard 
                  icon={isAmbassador ? Globe : Lock} 
                  color={agent.color} 
                  title={isAmbassador ? "Data Marketplace" : "Protocolo de Seguridad"} 
                  desc={isAmbassador ? "Publicación automatizada de metadatos clínicos enriquecidos para su consumo seguro." : "Cifrado de grado militar y control de acceso basado en roles."}
                />
                <SkillCard 
                  icon={isAmbassador ? Network : Network} 
                  color={agent.color} 
                  title={isAmbassador ? "Gobernanza Proactiva" : "Interoperabilidad"} 
                  desc={isAmbassador ? "Integración bidireccional con Anjana para control de linaje y calidad del dato." : "Capacidad nativa para comunicarse con otros agentes del ecosistema."}
                />
                <SkillCard 
                  icon={Search} 
                  color={agent.color} 
                  title={isAmbassador ? "Publicación EHDS" : "Detección de Patrones"} 
                  desc={isAmbassador ? "Traducción de esquemas locales a los requerimientos de la red europea de salud." : "Algoritmos avanzados para la identificación de estructuras."}
                />
                <SkillCard 
                  icon={Link} 
                  color={agent.color} 
                  title="Soberanía del Dato" 
                  desc={isAmbassador ? "Asegura que el hospital mantiene el control total sobre quién y cómo accede a la evidencia." : "Validación de esquemas y tipos de datos."}
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AgentModal;
