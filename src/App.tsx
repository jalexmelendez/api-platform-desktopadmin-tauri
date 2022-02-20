import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import tauriCircles from './tauri.svg';
import tauriWord from './wordmark.svg';
import './App.css';

import {
  AdminGuesser,
  hydraDataProvider,
  hydraSchemaAnalyzer,
} from '@api-platform/admin';

type EntryPoint = {
  exists: boolean,
  value: string
}

function hasEntryPoint() : EntryPoint {
  let entrypoint: string | null = localStorage.getItem('entrypoint');
  if (entrypoint == null) {
    return {
      exists: false,
      value: ""
    };
  }
  return {
    exists: true,
    value: entrypoint
  };
}

function removeEntryPoint(): boolean {
  localStorage.removeItem('entrypoint');
  return true;
}

function addEntryPoint(entrypoint: string): boolean {
  localStorage.setItem('entrypoint', entrypoint);
  return true;
}

function App() {
  // CHANGE THE URL FOR YOUR API PLATFORM'S API ENTRYPOINT
  let entrypoint: string = "YOUR_URL";
  //
  return (
    <AdminGuesser
    // Use your custom data provider or resource schema analyzer
    dataProvider={hydraDataProvider({ entrypoint: entrypoint })}
    schemaAnalyzer={hydraSchemaAnalyzer()}
    />
  )
}

export default App
