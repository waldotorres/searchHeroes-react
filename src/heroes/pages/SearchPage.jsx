import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm"
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  

  const {q = ''} = queryString.parse(location.search);

  const { formState,
          onInputChange,
          onResetForm } = useForm({
            searchText:q
          });

  const { searchText } = formState;        

  
  const heroes = getHeroesByName( q);

  const onSearch =(ev)=>{
    
      ev.preventDefault();
      
     

      navigate(`?q=${ searchText }`);    
      //onResetForm();
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearch}>
            <input type="text"
              className="form-control" 
                placeholder="Search a hero"
                name="searchText"
                value={ searchText }
                autoComplete="off"
                onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"              
              >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          { q.length === 0
            ?<div className="alert alert-primary">
            Search a hero
            </div>
            :<></>
          }
          {   q.length > 0 && heroes.length === 0 
              ?<div className="alert alert-danger">
                No hero with { <strong>{q}</strong>  }
              </div>
              : <></>
          }

          {
            heroes.map( hero => <HeroCard key={ hero.id} hero = {hero} /> ) 
          }

        </div>
      </div>
    </>
  )
}
