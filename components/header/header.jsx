// import library
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// style
import './header.css'


const Header =()=>{
    return (
        <>
        <Row className="containerHero" style={{padding:"20px"}}> 
            <Col  className=" heroImage ">
                <div>
                <div className="titleHero">
                    The wedding of
                    </div>
                    <div className="nameHero">
                        alex & soofia
                    </div>
                    <div className="dateHero">
                        Monday, 12 march 2023
                    </div>
               </div>
            </Col>
 
        </Row>
    
        </>
    )
}

export default Header;