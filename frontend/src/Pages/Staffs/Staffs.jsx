import React from 'react'
import './staffs.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {KeyboardArrowLeft} from '@mui/icons-material/';
import {KeyboardArrowRight} from '@mui/icons-material/';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default function Staffs() {
 
  return (
    <>
   
<Sidebar>


  <Header/>



<section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">OUR TEAM </h3>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    {/* <i class="fa fa-arrow-left"></i> */}
                    <KeyboardArrowLeft/>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    {/* <i class="fa fa-arrow-right"></i> */}
                    <KeyboardArrowRight/>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/01/hari.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Harinarayanan.P</h4>
                                            <p class="card-text">
                                            HOD
              </p>
              <p class="card-text">
              9497006167
              </p>
              <p class="card-text">
              hari.peringot@gmail.com</p> 
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/01/sukhdev.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Sukhdev.k</h4>
                                            <p class="card-text">
                                              Lecturer
                                             </p>
                                          <p class="card-text">
                                       9495461015
                                        </p>
                                     <p class="card-text">
                                         sukhdevk1@gmail.com
                                       </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\sarath.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Sarath</h4>
                                            
                                            <p class="card-text">
                                         Lecturer
                                          </p>
                                         <p class="card-text">
                                         9496836037
                                               </p>
                                            <p class="card-text">
                                    saraths90@gmail.com
                                        </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\sruthi.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms Sruthi</h4>
                                            <p class="card-text">
                                     Lecturer
                                         </p>
                                    <p class="card-text">
                                 8590306492
                                    </p>
                                    <p class="card-text">
                                 sruthipsumathi@gmail.com
                                     </p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\Azees.jpeg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Abdhul Azeez</h4>
                                            <p class="card-text"> 
            Lecturer
          </p>
         <p class="card-text">
          9495730115
         </p>
         <p class="card-text">
          azeezcet@gmail.com
         </p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\shithin.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title"> Mr.Shithin P.V</h4>
                                            <p class="card-text">
              Lecturer
            </p>
            <p class="card-text">
              6282572757
            </p>
            <p class="card-text">
              shithinpv6@gmail.com
            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/09/Nimisha-K.P..jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title"> Ms.Nimisha K.P</h4>
                                           <p class="card-text">
              Demonstrator
            </p>
            <p class="card-text">
              9496733101
            </p>
            <p class="card-text">
              nimishakp@gmail.com
            </p>
                                 </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/01/manoj-kumar.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Manoj Kumar P</h4>
                                            <p class="card-text">
              Trade instructer Gr II
            </p>
            <p class="card-text">
              9846230531
            </p>
            <p class="card-text">
              manojramnivas@gmail.com
            </p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\vinayan.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Vinayan K.P</h4>
                                            <p class="card-text">
            Tradesman
            </p>
            <p class="card-text">
              8547586912
            </p>
            <p class="card-text">
              vinayankppayyanur@gmail.com
            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

{/*  */}

<div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\sreeranjini.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms Sreeranjini</h4>
                                            
                                         <p class="card-text">
              Demonstrator
            </p>
            <p class="card-text">
              7559941570
            </p>
            <p class="card-text">
            osreeranjini@gmail.com
            </p>


                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\Athira1.jpeg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms.Athira T</h4>
                                            <p class="card-text">
              Demonstrator
            </p>
            <p class="card-text">
              8281482667
            </p>
            <p class="card-text">
              athirat2663@gmail.com
            </p>
                         </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\revathi.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms.Revathi</h4>
                                            <p class="card-text">
              Demonstrator
            </p>

            <p class="card-text">
              9497781161
              </p>
              <p class="card-text">
                revathigovind121@gmail.com
              </p>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

{/*  */}


{/*  */}

<div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="/Assets/neethu.jpeg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms.Neethu T.V</h4>
                                            
                                            <p class="card-text">
            Lecturer
            </p>
            <p class="card-text">
            8129576353
            </p>
            <p class="card-text">
              neethutv262@gmail.com
            </p>


                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="/Assets/nithya1.jpeg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms.Nithya C.R</h4>
                                            <p class="card-text">
          Lecturer
        </p>
        <p class="card-text">
          9747503488
        </p>
        <p class="card-text">
          nithyacr57@gmail.com
        </p>

                         </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="/Assets/hemjith.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Hemjith T.J</h4>
                                            <p class="card-text">
              Trade instructor(electrical)
            </p>
            <p class="card-text">
            9605333930
            </p>
            <p class="card-text">
              hemjithtj@gmail.com
            </p>



                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



{/*  */}
{/*  */}

<div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="\Assets\jaison.jpg"style={{maxHeight:"52vh"}}/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Jaison P.K</h4>
                                            
                                            <p class="card-text">
              Lecturer
            </p>
            <p class="card-text">
              9961989636
            </p>
            <p class="card-text">
              jaisonpk@gmail.com
            </p>


                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/01/salil.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Salilkumar A.V</h4>
                                            <p class="card-text">
              Trade instructor(ME)
            </p>
            <p class="card-text">
              9446577328
            </p>
            <p class="card-text">
              salilvadakara@gmail.com
            </p>


                         </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/01/nelson.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Mr.Nelson K.A</h4>
                                            <p class="card-text">
              Trade instructor(ME)
            </p>
            <p class="card-text">
              9495535206
            </p>
            <p class="card-text">
              nelsonka40@gmail.com
            </p>




                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



{/*  */}
<div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/01/DEEPTHI.jpg"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Ms.Deepthi.C</h4>
                                            
                                            <p class="card-text">
              Lecturer
            </p>
            <p class="card-text">
              9497847664
            </p>
            <p class="card-text">
              cdeepthinambiar@gmail.com
            </p>


                                        </div>

                                    </div>
                                </div>
                               
                               

                            </div>
                        </div>


{/*  */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
</Sidebar> 
    </>
  )
}
