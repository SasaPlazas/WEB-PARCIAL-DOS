
import './App.css'
import AddComents from './pages/addComents'
import CommentList from './pages/commentList'

function App() {


  return (
    <>
       <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CommentList/>
            }
          >
            <Route
            path="/add"
            element={
              <AddComents/>
            }

            
          >
        </Routes>
      </Router>
    </>
  )
}

export default App
