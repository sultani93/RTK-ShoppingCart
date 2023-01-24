import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import {
  getCartTotal,
  clearCart,
  getCartItems,
} from './redux/feature/cartSlice'
import CartItem from './CartItem'

const CartContainer = () => {
  const { items, totalAmount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [items])

  if (items.length === 0) {
    return (
      <>
        <h3 className='fs-bold mt-4'>
          Your Shopping{' '}
          <span>
            <MDBIcon fas icon='shopping-bag'></MDBIcon>
          </span>
          is Empty
        </h3>
        <MDBBtn className='mx-2' onClick={() => dispatch(getCartItems())}>
          Get items
        </MDBBtn>
      </>
    )
  }

  return (
    <>
      <h2 className='lead-mb-o mt-2'>Your Shopping Cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <footer>
        <hr />
        <div className=''>
          {' '}
          <h4
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginRight: '60px',
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>
        <MDBBtn
          color='danger'
          style={{ width: '140px', marginTop: '50px' }}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </MDBBtn>
      </footer>
    </>
  )
}

export default CartContainer
