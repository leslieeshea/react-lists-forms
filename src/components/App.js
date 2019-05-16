import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Good from './Good';
import Bad from './Bad';

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
      <Good />
    </>
  );
}
