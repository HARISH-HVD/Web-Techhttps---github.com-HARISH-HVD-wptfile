import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function ProductCard({ data }) {
    console.log(data);
    const user = useSelector((state) => state.loginReducer.user)


    return (
        
        <div className="row">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            {data.map((p, i) => (
                <div className="col-md-5" key={i}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img 
                            src={require(`../assets/imgs/bags/${p.image}`)} 
                            className="card-img-top" 
                            alt={p.name} 
                            height={200} 
                        />
                        <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text">${p.price}</p>
                            <Link className="btn btn-primary" to="/addtocart" >Buy Now</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

