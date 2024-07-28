import './style.css'
import Calander from '../components/calander'

function Index() {
  return (
    <>
    <div className="main">
        <div className="header">
            <h1>These are the days that you wasted!</h1>
        </div>
        <div className="mid">
            
        <Calander/>
        </div>
        <div className="footer">
            <p> <i>"Success in studying isn’t about the big leaps but the small, consistent actions. Embrace daily progress, no matter how tiny, and let each study session become a step toward your ultimate goal."</i> </p>
        </div>
    </div>
    
    </>
  )
}

export default Index