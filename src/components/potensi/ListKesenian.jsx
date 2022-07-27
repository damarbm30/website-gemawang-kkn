import React from 'react';
import ItemKesenian from './ItemKesenian';

const ListKesenian = ({ kesenian }) => {
  return (
    <div className="mx-auto flex w-[100%] flex-wrap justify-center gap-12 pb-12">
      {kesenian.map((kesenian) => (
        <ItemKesenian kesenian={kesenian} key={kesenian.id} />
      ))}
    </div>
  )
}

export default ListKesenian