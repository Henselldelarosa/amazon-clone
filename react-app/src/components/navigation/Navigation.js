import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Navigation.scss'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {useStateValue} from '../../context/StateProvider'
import { auth } from '../../firebase';

const Navigation = () => {
	const [{basket, user}, dispatch] = useStateValue()

	const handleSign = () => {

		if(user){
			auth.signOut()
		}
	}

	return (
		<div className='navigation'>

			<NavLink to='/'>
				<img
				className='navigation__logo'
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				alt=""
				/>
			</NavLink>

		<div className="navigation__search">
			<input
			type="text"
			className="navigation__searchInput"
			/>
			<SearchIcon className='navigation__searchIcon'/>
		</div>

		<div className="navigation__nav">

			<NavLink to={!user && '/login'}>
			<div onClick={handleSign} className="navigation__option">
				<span className="navigation__option--one">Hello {user? user.email : 'Hello Guest'}</span>
				<span className="navigation__option--two">{user ? "Sign Out" : "Sign In"}</span>
			</div>
			</NavLink>

			<div className="navigation__option">
				<span className="navigation__option--one">Returns</span>
				<span className="navigation__option--two">& Orders</span>
			</div>

			<div className="navigation__option">
				<span className="navigation__option--one">Your</span>
				<span className="navigation__option--two">Prime</span>
			</div>

			<NavLink to='/checkout'>
				<div className="navigation__option--basket">
					<ShoppingBasketIcon/>
					<span className="navigation__option--two navigation__basket--count">
						{basket?.length}
					</span>
				</div>
			</NavLink>

		</div>
	</div>
	)
}

export default Navigation
