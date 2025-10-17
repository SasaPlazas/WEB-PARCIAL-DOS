
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

            //aqui tambien deben estar las rutas de el editComment
          >
        </Routes>
      </Router>
    </>
  )
}

export default App
