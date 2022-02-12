import React, {useContext} from 'react';

import { AddedProduct , RemovedProduct} from '../App';

export default function Item(props) {

  const addHandler = useContext(AddedProduct)
  const removeHandler = useContext(RemovedProduct)

  return (
      <div className="item">
          <img src={props.currItem.img} alt="" />
          <h5>{props.currItem.name}</h5>
          <div>
            <h5><span onClick={() => addHandler(props.currItem)}>+</span>{props.currItem.quantity}<span onClick={() => removeHandler(props.currItem)}>-</span></h5>
          </div>
          <h5>{props.currItem.price} $</h5>
      </div>
  )
}
