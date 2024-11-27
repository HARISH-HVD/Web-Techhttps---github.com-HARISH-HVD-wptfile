function Footer(){
    return(
        <>
        <footer className="">
            <hr/>
            <div className="row p-0">
                <div className="col-3 p-0">
                    <div className="card">
                        <div className="card-header">
                            <b><u>Featured</u></b>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><b><u>Bootstrap</u></b> </h5>
                            <p className="card-text">for every type of content you need to fix your Code.</p>
                            <a href="#" className="btn btn-primary">Welcome Again</a>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-3">
                            <h1 className="display-6">
                            </h1>
                            <dl>
                                <dt>
                                    <b><u>Links</u></b>
                                </dt>
                                <dd>
                                    <ul className="list-group">
                                        <li className="list-group-item">Home</li>
                                        <li className="list-group-item">Docs</li>
                                        <li className="list-group-item">Examples</li>
                                        <li className="list-group-item">Themes</li>
                                        <li className="list-group-item">Blogs</li>
                                        <li className="list-group-item">Swag Store</li>


                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-3">
                            <h1 className="display-6">
                            </h1>
                            <dl>
                                <dt>
                                    <b><u>Guides</u></b>
                                </dt>
                                <dd>
                                    <ul className="list-group">
                                        <li className="list-group-item">Getting Started</li>
                                        <li className="list-group-item">Starter Template</li>
                                        <li className="list-group-item">Webpack</li>
                                        <li className="list-group-item">Parcel</li>

                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-3">
                            <h1 className="display-6">
                            </h1>
                            <dl>
                                <dt>
                                    <b><u>Projects</u></b>
                                </dt>
                                <dd>
                                    <ul className="list-group">
                                        <li className="list-group-item">Bootstrap 5</li>
                                        <li className="list-group-item">Bootstrap 4</li>
                                        <li className="list-group-item">Icons</li>
                                        <li className="list-group-item">RFS</li>


                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="col-3">
                            <h1 className="display-6">
                            </h1>
                            <dl>
                                <dt>
                                    <b><u>Community</u></b>
                                </dt>
                                <dd>
                                    <ul className="list-group">
                                        <li className="list-group-item">Issues</li>
                                        <li className="list-group-item">Discussions</li>
                                        <li className="list-group-item">Corporate Sponsors</li>
                                        <li className="list-group-item">Open Collective</li>
                                        <li className="list-group-item">Stack Overflow</li>



                                    </ul>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export {Footer}
//named export