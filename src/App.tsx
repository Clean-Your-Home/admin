import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { AdminPage, ModerationPage } from './pages'

import { ROUTES } from './api/routes'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<AdminPage />} />
        <Route path={ROUTES.MODERATE} element={<ModerationPage />} />
      </Routes>
    </Router>
  )
}

export default App
