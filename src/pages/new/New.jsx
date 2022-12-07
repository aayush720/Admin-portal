import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import{useState} from 'react';
const New = ({ inputs, title }) => {
  

 
  const[file,setFile]=useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
            // here set image if setted
              src={file ?URL.createObjectURL(file):"../img/cat.jpg"}  alt="no_image"
            />
          </div>
          <div className="right">
            <form action="">
              <div className="forminput">
                <label htmlFor="file">
                  Image
                  <DriveFolderUploadIcon className="icon" />{" "}
                </label>
                {/* onchange when file add so it store */}
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}style={{ display: "none" }} />
              </div>
              {/* <div className="forminput">
                <label>User name </label>
                <input type="text" placeholder="User name" />
              </div>
              <div className="forminput">
                <label>Email</label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="forminput">
                <label>Phone Number</label>
                <input type="number" placeholder="Phone number" />
              </div>
              <div className="forminput">
                <label>Password</label>
                <input type="password" placeholder="******" />
              </div>
              <div className="forminput">
                <label>Address</label>
                <input type="textArea" placeholder="Address" />
              </div>
              <div className="forminput">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div> */}

              {/* instead of write above like many of times  */}

              {inputs.map((input) => 
                <div className="forminput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type}placeholder={input.placeholder} />
                </div>
              )
              }
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
