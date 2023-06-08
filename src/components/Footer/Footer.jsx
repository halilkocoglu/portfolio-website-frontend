import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="com">
        <div>
          <span>Email : </span> 
          <span>halilkocoglu98@gmail.com</span>
        </div>
      </div>
      <div>
        Copyright &copy; 2023   
      </div>
      <div>
        Made by
         <a href="https://github.com/halilkocoglu" rel="noreferrer" target="_blank"> Halil Koçoğlu</a>
      </div>
    </div>
  )
}

export default Footer