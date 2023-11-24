import React, { useState } from 'react';

function Card({ cardData, setCartValue }) {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="card m-2">
        
     {cardData.img1 &&(
         <img
         src="https://www.thespruce.com/thmb/pjDqYUU4EG1y_fNU4x23WCbqLXA=/4238x2827/filters:fill(auto,1)/when-to-harvest-watermelon-2539591-04-f7f99d3a73d846cb9d453f8a6f0cc7ee.jpg"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img2 &&(
         <img
         src="https://th.bing.com/th/id/OIP.EKtHvZ2bCZvXfgDP_smT0AHaFj?rs=1&pid=ImgDetMain"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img3 &&(
         <img
         src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img4 &&(
         <img
         src="https://i.pinimg.com/736x/d2/17/7e/d2177ed329385edb5c197fb87fab43ad.jpg"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img5 &&(
         <img
         src="https://www.agrifarming.in/wp-content/uploads/2015/03/Harvested-Capsicum.jpg"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img6 &&(
         <img
         src="https://th.bing.com/th/id/OIP.rmewcxgfP3eQ7-_Yha2tMwHaE8?w=5760&h=3840&rs=1&pid=ImgDetMain"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img7 &&(
         <img
         src="https://th.bing.com/th/id/R.09deb0d2a029449efd0d8fb5a42c1dc2?rik=CQZ%2b%2bYoof%2b4XQw&riu=http%3a%2f%2fskylightfarms.com%2fwp-content%2fuploads%2f2014%2f07%2fSavoy-and-napa.jpg&ehk=mpaT4hFPHb0zDBGw7rC24Rr%2bA0uaNUohZ6TE%2b7lrqus%3d&risl=1&pid=ImgRaw&r=0"
         className="card-img-top"
         alt="Product"
       />
     )}
     {cardData.img8 &&(
         <img
         src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/25/3/shutterstock_440493100_5-second-Studio_carrots.jpg.rend.hgtvcom.1280.853.suffix/1524688181811.jpeg"
         className="card-img-top"
         alt="Product"
       />
     )}
      {cardData.isSale && (
        <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {cardData.isSpecial && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Special
        </div>
      )}
      {cardData.isSoldout && (
        <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
          Soldout
        </div>
      )}
      <div className="card-body p-4 text-center">
        <h5 className="card-title">{cardData.name}</h5>
        <p className="card-text">
          {cardData.rating && <div>{cardData.rating}</div>}
          {cardData.originalPrice ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>
                {cardData.originalPrice}
              </span>{' '}
              {cardData.price}
            </div>
          ) : (
            `Price: ${cardData.price}`
          )}
        </p>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {toggle ? (
            <button
              className="btn btn-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value + 1);
                setToggle(false);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => {
                setCartValue((value) => value - 1);
                setToggle(true);
              }}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
    
  );
}

function CardValue({ setCartValue }) {
  const cardData = [
    { name: 'WaterMelon',  price: '₹40',img1:true },
    { name: 'Strawberry',  originalPrice: '₹130', price: '₹60', isSpecial: true ,img2:true},
    { name: 'Apple' , price: '₹749', isSale: true,img3:true },
    { name: 'Orange',  price: '₹80',img4:true },
    { name: 'Capsicum',price: '₹49', img5:true},
    { name: 'Tomato',  price: '₹140',img6:true },
    { name: 'Cabbage', originalPrice: '₹45', price: '₹18', isSoldout: true,img7:true },
    { name: 'Carrot',  price: '₹54',img8:true },
  ];

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-mb-4">
              <Card cardData={card} setCartValue={setCartValue} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardValue;