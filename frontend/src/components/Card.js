import React from "react";

function Card(props) {
  const {name, set, rep} = props.workout;
  
  return (
    <div className="col-sm-12 col-md-4 col-lg-3">
        <div className="box">
          <div className="body">
            <div className="imgContainer">
              <img
                src="https://staticg.sportskeeda.com/editor/2022/06/f452a-16564241478609-1920.jpg"
                alt=""
              />
            </div>
            <div className="content d-flex flex-column align-items-center justify-content-center">
              <div>
                <h3 className="text-white fs-5">{name}</h3>
                <p className="fs-6 text-white">
                  Sets: {set}
                </p>
                <p className="fs-6 text-white">
                  Reps: {rep}
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Card;
