// import library
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// style
import './info.css'

const Male =()=>{
    return(
        <>

        {/* parents male */}

        <Row style={{display:'flex',justifyContent:'space-around',marginBottom:'10px'}}>
            
            <Col >
             <div  style={{display:'flex',justifyContent:'center',gap:'3%'}}>
             <div>
                    <div className="maleContainer">
                        <div style={{display:'flex' ,justifyContent:'center'}}>
                        <div className="fatherMaleIMg"></div>
                        </div>
                    </div>
                </div>

                <div>
                     <div className="maleContainer">
                        <div style={{display:'flex' ,justifyContent:'center'}}>
                        <div className="MotherMaleIMg"></div>
                        </div>
                    </div>
                </div>
             </div>

                <div className="titleInfo">
                            Jhosua Xions & Freya Xions
                        </div>
            </Col>

        </Row>


        {/* male & female */}

       <Row style={{display:'flex',justifyContent:'center',gap:'15%'}}>

        <Col>
        <div className="titleInfo">
            alexander xions
        </div>
            <div className="maleContainer">
            <div className="imageMale"></div>
            <div className="religionInfo">
                Islam
            </div>
            <div className="bornInfo">12 maret 19997</div>
            </div>
        </Col>

        <Col>
        <div className="titleInfo">
            shofia julisty
        </div>
            <div className="femaleContainer">
            <div className="femaleImg"></div>
            <div className="religionInfo">
                Islam
            </div>
            <div className="bornInfo">13 maret 19999</div>
            </div>
        </Col>

       </Row>

       {/* parent female */}

       
       <Row style={{display:'flex',justifyContent:'space-around',marginTop:'30px'}}>
            
            
       <Col >
             <div  style={{display:'flex',justifyContent:'center',gap:'3%'}}>
             <div>
                    <div className="maleContainer">
                        <div style={{display:'flex' ,justifyContent:'center'}}>
                        <div className="fatherFemaleIMg"></div>
                        </div>
                    </div>
                </div>

                <div>
                     <div className="maleContainer">
                        <div style={{display:'flex' ,justifyContent:'center'}}>
                        <div className="MotherFemaleIMg"></div>
                        </div>
                    </div>
                </div>
             </div>

                <div className="titleInfo">
                                Simons Julisty & Margaret Julisty
                        </div>
            </Col>


        </Row>

        </>
    )
}

export default Male;