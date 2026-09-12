import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { LandingPage } from './components/LandingPage';
import { AuthScreen } from './components/AuthScreen';
import { DashboardShell } from './components/Dashboard/DashboardShell';
import { ChapterRunner } from './components/Dashboard/ChapterRunner';

const MainViewRouter: React.FC = () => {
  const { currentView } = useApp();

  switch (currentView) {
    case 'login':
      return <AuthScreen />;
    case 'dashboard':
      return <DashboardShell />;
    case 'chapter-runner':
      return <ChapterRunner />;
    case 'landing':
    default:
      return <LandingPage />;
  }
};

export default function App() {
  return (
    <AppProvider>
      <MainViewRouter />
    </AppProvider>
  );
}
