import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Leads from './pages/Leads.jsx'
import Analytics from './pages/Analytics.jsx'
import MapPage from './pages/MapPage.jsx'
import AIFind from './pages/AIFind.jsx'
import EmailPage from './pages/EmailPage.jsx'
import MyAI from './pages/MyAI.jsx'
import Pipeline from './pages/Pipeline.jsx'
import Settings from './pages/Settings.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/leads' replace />} />
        <Route path='/leads' element={<Leads />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/map' element={<MapPage />} />
        <Route path='/ai-find' element={<AIFind />} />
        <Route path='/email' element={<EmailPage />} />
        <Route path='/my-ai' element={<MyAI />} />
        <Route path='/pipeline' element={<Pipeline />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Layout>
  )
}
