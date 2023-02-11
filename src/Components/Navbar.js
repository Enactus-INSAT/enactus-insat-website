import React, {useState} from "react";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [];
    return  <nav>
        <div>
            <img src={""} alt="" />
        </div>
        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Team</a>
            <a href="">Contact</a>
            <button>Donate</button>
        </div>
    </nav>
}
export default Navbar;