import './style.css'
import Car from '../img/720s-Azores-hero.png';

function index() {
  return (
  <>
    <div className="first-main-container">
        <div className="text">
            <h1>KRAVKO</h1>
            <h2>kravko</h2>
        </div>
        <div className="bottom-text">
            <div className="line"></div>
            <p>Hi, it's Krishav Koirala. This is inspired by the latest video thumbnail from "Stache," and a idea popin my dumb ass brain. While i was taking a break from a project,
                 I decided to make something just for fun, and it turned out great. Thank you!</p>
        </div>
    </div>
    <img className='car' src={Car} />
    <div className="second-main-container">
        <div className="sides">
            <div className="box">
                <h1>This is just a DEMO</h1>
                <p>Lorem Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur tenetur illum nostrum voluptatum saepe maiores! Modi, ratione et. Voluptas nisi eaque reprehenderit minus odit sapiente! Maiores qui praesentium quibusdam! ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam minus magnam repellat velit nemo consequatur doloremque mollitia autem enim unde animi asperiores impedit quia cupiditate hic fugiat omnis dolorem!</p>
            </div>
            <div className="box">
                <h1>This is just a DEMO</h1>
                <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur porro soluta, repellat labore similique veniam eum omnis ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum nam deserunt. ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam minus magnam repellat velit nemo consequatur doloremque mollitia autem enim unde animi asperiores impedit quia cupiditate hic fugiat omnis dolorem!</p>
            </div>
        </div>
        <div className="sides">
        <div className="box">
                <h1>This is just a DEMO</h1>
                <p>Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis adipisci fugit sequi, blanditiis, aspernatur cupiditate sit voluptatibus nobis officiis illum nihil itaque magni quasi dolores dolorem veniam saepe eos error! adipisicing elit. Assumenda, laboriosam minus magnam repellat velit nemo consequatur doloremque mollitia autem enim unde animi asperiores impedit quia cupiditate hic fugiat omnis dolorem!</p>
            </div>
            <div className="box">
                <h1>This is just a DEMO</h1>
                <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maxime debitis adipisci! Repudiandae, minima animi. ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam minus magnam repellat velit nemo consequatur doloremque mollitia autem enim unde animi asperiores impedit quia cupiditate hic fugiat omnis dolorem!</p>
            </div>
        </div>
    </div>
  </>
  )
}

export default index