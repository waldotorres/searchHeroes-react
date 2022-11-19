import { useMemo } from "react";
import { Navigate, useNavigate,  useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {

  

  const navigate = useNavigate();
  const onNavigateBack = ()=>{
    navigate(-1);
    
  }
  const { id } = useParams();
  const hero = useMemo( ()=> getHeroById(id), [id]);
  
  if(!hero){
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">

    <div className="col-4">
        <img  className="img-thumbnail animate__animated animate__fadeInLeft" 
              src={`/assets/heroes/${ hero.id }.jpg`} 
              alt={ hero.superhero } />
    </div>
    <div className="col-8">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Alter ego: <b>{ hero.alter_ego }</b></li>
        <li className="list-group-item">Publisher: <b>{ hero.publisher }</b></li>
        <li className="list-group-item">First Appearance: <b>{ hero.first_appearance }</b></li>
      </ul>
      <h5 className="mt-3">Characters</h5>
      <p>{ hero.characters}</p>
      <button className="btn btn-outline-primary"
              onClick={onNavigateBack}
      >
        Regresar</button>
    </div>
    </div>
  )
}
