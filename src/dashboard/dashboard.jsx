import React, { useContext } from "react";
import "./dashboard.css";
import { useState } from "react";
import { useEffect } from "react";
export default function Dashboard() {
    return (
        <div className="dashboard">
          <div className="nav">
            <div className="nav-left">
              
            </div>
            <div className="nav-right">
              <p>Angel Mary</p>
              
            </div>
          </div>
          <div className="dashboard-cont">
            <div className="side-bar">
            <br/><br/><button className="button1"variant="outlined">Home</button><br/>
            <button className="button2"variant="outlined">Login</button>
            </div>
            <div className="main-cont">
            <div className="container">
            <div className="card">
    <div className="img-container"></div>
    <div className="card-content">
      <h2>Chicken Biriyani</h2>
      
      <p className="excerpt">Ingredients<br/>Phone:2472</p>
      <p className="author">By Sera</p>
    </div>
  </div>

  <br/>

  <div class="card">
    <div class="img-container"></div>
    <div class="card-content">
      <h2>Pasta</h2>
      
      <p class="excerpt">Ingredients<br/>Phone:2472</p>
      <p class="author">By Riya</p>
    </div>
  </div>

   <br/>
  <div class="card">
    <div class="img-container"></div>
    <div class="card-content">
      <h2>Prawns Fry</h2>
      
      <p class="excerpt">Ingredients<br/>Phone:2472</p>
      <p class="author">By Kamala</p>
    </div>
    </div>
    </div>
          </div>
          <div className="right-bar">
            <div className="addpg">
              <h2>Add Your Receipe</h2>
                <div>
                  <label>Item Name:</label> <br />
                  <input
                    type="text"
                    
                    name="pg_name"
                    
                    id="name"
                  />
                  <br />

                  <label> Image:</label> <br />
                  <input type="file" 
                
                
                

                  accept="image/*" />
                  <br />
                  <button  type="button">Upload</button>
                  <br />
                  <br />

                  <label>Address:</label> <br />
                  <input
                    id="address"
                    name="address"
                    
                   
                  />
                  <br />
                  <label>Facilities:</label> <br />
                  <input
                    type="text"
                    id="facilities"
                    name="facilities"
                    
                  />
                  <br />
                  <label>Rent:</label> <br />
                  <input
                    type="number"
                    id="rent"
                    name="rent"
                   
                  />
                  <br />
                  <label>Phone Number:</label> <br />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    
                  />
                  <br />

                  <button   type="button">Submit</button>

                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
