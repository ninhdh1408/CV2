import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            minima quod molestias numquam, cumque eveniet delectus dolore
            laborum molestiae quis possimus eos dignissimos cupiditate ipsam
            sunt doloremque commodi adipisci quasi?
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFOMATION</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> 2 Nguyen Hoang street - My Dinh 2 - Nam Tu Liem - Hanoi
              </p>
              <p>
                <strong>Email:</strong> haininhdoan322@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 0344 20x xxx
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - Vietnamese
              </p>
              <p>
                <strong>Second Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
