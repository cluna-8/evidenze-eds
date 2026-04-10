import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Orchestrator from './components/Orchestrator';
import LayerOne from './components/LayerOne';
import LayerThree from './components/LayerThree';
import AgentModal from './components/AgentModal';

function App() {
  const [currentView, setCurrentView] = useState('orchestrator');
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
  };

  const closeAgentModal = () => {
    setSelectedAgent(null);
  };

  return (
    <div style={{ padding: '1rem 2rem', minHeight: '100vh', position: 'relative' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/EVIDENZE_LOGOC.png" alt="Evidenze Logo" style={{ height: '70px', marginBottom: '1rem' }} />
        <h1 className="title" style={{ fontSize: '3rem', margin: 0 }}>Agentic Ecosystem</h1>
        <p className="subtitle" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
          Central SDK & Clinical Data Orchestrator
        </p>
      </header>

      <main style={{ position: 'relative', width: '100%', maxWidth: '1600px', margin: '0 auto', minHeight: '800px' }}>
        <AnimatePresence mode="wait">
          {currentView === 'orchestrator' && (
            <Orchestrator 
              key="orchestrator" 
              onZoomLayer1={() => setCurrentView('layer1')} 
              onZoomLayer3={() => setCurrentView('layer3')}
              onAgentClick={handleAgentClick}
            />
          )}
          {currentView === 'layer1' && (
            <LayerOne 
              key="layer1" 
              onBack={() => setCurrentView('orchestrator')} 
              onAgentClick={handleAgentClick}
            />
          )}
          {currentView === 'layer3' && (
            <LayerThree 
              key="layer3" 
              onBack={() => setCurrentView('orchestrator')} 
              onAgentClick={handleAgentClick}
            />
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedAgent && (
          <AgentModal agent={selectedAgent} onClose={closeAgentModal} />
        )}
      </AnimatePresence>
      
      <footer style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem' }}>
        © 2026 EVIDENZE - Clinical Intelligence & Agentic Orchestration
      </footer>
    </div>
  );
}

export default App;


