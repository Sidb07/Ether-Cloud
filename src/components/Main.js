import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment';
import ParticlesBg from 'particles-bg';
import './App.css'

class Main extends Component {
  render() {
    return (
      <>
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              
              <div className="card2 mb-3 mx-auto" style={{ maxWidth: '512px' , color:'white', boxShadow:'5px 5px 10px rgb(0, 0, 0)'}}>
                <h2 fontFamily="Arial"><b>Upload File</b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control"
                            placeholder="Add Description..."
                            required />
                      </div>
                    <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <br></br>
                    <button type="submit" className="button button2"><b>Upload</b></button>
                  </form>
              </div>

              <p>&nbsp;</p>
              
              <table className="table-sm table-bordered text-monospace text-white" style={{ width: 'auto', boxShadow:'5px 5px 10px rgb(0, 0, 0)'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="text-white">
                    {/* <th scope="col" style={{ width: '10px'}}>File No.</th> */}
                    <th scope="col" style={{ width: '200px'}}>Name</th>
                    <th scope="col" style={{ width: '230px'}}>Description</th>
                    <th scope="col" style={{ width: '120px'}}>File Type</th>
                    <th scope="col" style={{ width: '90px'}}>Size</th>
                    <th scope="col" style={{ width: '90px'}}>Date</th>
                    <th scope="col" style={{ width: '120px'}}>Uploader</th>
                    <th scope="col" style={{ width: '120px'}}>IPFS Hash/Share</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '15px', 'fontFamily': 'Arial', 'fontWeight': 'bold' }} key={key}>
                      <tr>
                        {/* <td>{file.fileId}</td> */}
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>

            </div>
          </main>
        </div>
      </div>
      <ParticlesBg color="#370665" num={100} type="cobweb" bg={true} />
      <ParticlesBg color="#eeeded" num={100} type="cobweb" bg={true} />
      <ParticlesBg color="#f14a16" num={100} type="cobweb" bg={true} />
      <ParticlesBg color="#fc9918" num={100} type="cobweb" bg={true} />
      
      {/* <div class="footerc" style={{position:"absolute"}}>
					<div class="container-row">
            <div class="A3L_Slogan" style={{marginLeft:30}}>
              <div class="slogan_title" style={{ marginTop:10, fontFamily: "Arial", color:"white" }}>
                <h1><b>Dopetech Solutions</b><h6> <b>CEO Rutvij Hadap</b></h6></h1>
              </div>
              <div class="slogan_catchphrase" style={{ fontFamily: "Arial", fontSize: 20, color:"white" }}>
                <p>
                  Random Stuff <br/>
                  Baki TP
                </p>
              </div>
            </div>
          </div>
				</div>  */}

      </>
    );
  }
}

export default Main;