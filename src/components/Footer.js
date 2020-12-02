import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">

                <footer style={{backgroundImage: `url(${process.env.PUBLIC_URL} /pictures/citylights.jpg)`, backgroundSize:'100%'}} class="page-footer font-small elegant-color-dark darken-3" >


                    <div class="container">


                        <div class="row">


                            <div class="col-md-12 py-5">
                                <div class="mb-5 flex-center">


                                    <a class="fb-ic">
                                        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>

                                    <a class="tw-ic">
                                        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>

                                    <a class="gplus-ic">
                                        <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>

                                    <a class="li-ic">
                                        <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>

                                    <a class="ins-ic">
                                        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>

                                    <a class="pin-ic">
                                        <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                                    </a>
                                </div>
                            </div>


                        </div>


                    </div>



                    <div class="footer-copyright text-center py-3">© 2020 Copyright:
                         <a href="#"> Cinelux Bulgaria</a>
                    </div>


                </footer>

            </div>
        )
    }
}


