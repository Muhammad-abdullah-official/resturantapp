import '../assets/styles/App.css';
import img1 from '../assets/img1.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="firstDiv">
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience the finest dining experience with our exquisite dishes.</p>
      <p>Indulge in a truly exceptional dining experience with our meticulously crafted menu, designed to showcase the finest ingredients and culinary techniques. At our restaurant, every dish is a testament to our commitment to quality and flavor, offering a gastronomic journey that delights the senses and leaves a lasting impression. From the moment you step through our doors, you are welcomed into an ambiance that perfectly complements our gourmet offerings. Our skilled chefs use only the freshest, locally sourced ingredients to create masterpieces that are both visually stunning and bursting with flavor.</p>
      <p>Whether you are joining us for a special occasion or simply seeking an extraordinary meal, our exquisite dishes promise to elevate your dining experience to new heights. Each plate is thoughtfully prepared with attention to detail, ensuring a balance of taste, texture, and presentation. Our attentive staff is dedicated to providing impeccable service, enhancing your meal with their expertise and warm hospitality. Experience the artistry of fine dining as you savor the unparalleled flavors and enjoy a culinary adventure that celebrates the art of great food.</p>
      </div>

      <div className="secondDiv">
      <img src={img1} alt="Restaurant" />
      </div>
</div>
  );
};

export default Home;
