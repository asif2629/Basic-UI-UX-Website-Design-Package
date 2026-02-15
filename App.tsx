
import React from 'react';
import ProductView from './components/ProductView';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <ProductView />
      </main>
    </div>
  );
};

export default App;
